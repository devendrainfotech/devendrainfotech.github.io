// Renders the prerendered /resume page to a real PDF file using headless
// Chromium (Playwright), so the downloadable résumé always matches the page.
//
// Run after `nuxt generate`. Writes:
//   .output/public/resume.pdf  → shipped with the deploy
//   public/resume.pdf          → committed fallback / served in `nuxt dev`
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { join, extname, resolve } from 'node:path'
import { chromium } from 'playwright'

const ROOT = resolve('.output/public')
const OUT_SITE = join(ROOT, 'resume.pdf')
const OUT_REPO = resolve('public/resume.pdf')

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
}

async function resolveFile(urlPath) {
  const clean = decodeURIComponent((urlPath || '/').split('?')[0])
  const base = join(ROOT, clean)
  const candidates = clean.endsWith('/')
    ? [base, join(base, 'index.html')]
    : [base, `${base}.html`, join(base, 'index.html')]
  for (const c of candidates) {
    try {
      if ((await stat(c)).isFile()) return c
    } catch {
      /* keep trying */
    }
  }
  return null
}

function startServer() {
  return new Promise((res) => {
    const server = createServer(async (req, resp) => {
      const file = await resolveFile(req.url)
      if (!file) {
        resp.statusCode = 404
        resp.end('Not found')
        return
      }
      resp.setHeader('Content-Type', MIME[extname(file)] || 'application/octet-stream')
      resp.end(await readFile(file))
    })
    server.listen(0, '127.0.0.1', () => res(server))
  })
}

async function main() {
  if (!existsSync(ROOT)) {
    console.error(`[resume-pdf] ${ROOT} not found — run "nuxt generate" first.`)
    process.exit(1)
  }

  const server = await startServer()
  const { port } = server.address()
  const url = `http://127.0.0.1:${port}/resume`

  const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] })
  try {
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    const pdf = await page.pdf({ printBackground: true, preferCSSPageSize: true })

    await writeFile(OUT_SITE, pdf)
    await mkdir(resolve('public'), { recursive: true })
    await writeFile(OUT_REPO, pdf)
    console.log(`[resume-pdf] wrote resume.pdf (${(pdf.length / 1024).toFixed(0)} KB)`)
  } finally {
    await browser.close()
    server.close()
  }
}

main().catch((err) => {
  console.error('[resume-pdf] failed:', err)
  process.exit(1)
})
