<template>
  <section class="hero wrap" aria-label="Introduction">
    <span class="hero-mono-bg" aria-hidden="true">Dy</span>

    <div>
      <div class="hero-top">
        <!-- Left column: status + title + specimen -->
        <div>
          <div class="status-chip reveal">
            <span class="led" aria-hidden="true"></span>
            Available for work · Q3 '26
          </div>

          <div class="hero-title-wrap">
            <span class="xhair tl" aria-hidden="true"></span>
            <span class="xhair tr" aria-hidden="true"></span>
            <span class="xhair bl" aria-hidden="true"></span>
            <span class="xhair br" aria-hidden="true"></span>
            <h1 ref="titleRef" class="hero-title" data-split>
              Devendra Yadav<br>
              <em>full-stack</em> developer<br>
              shipping in <span data-keep class="rotator-host">JavaScript</span>.
            </h1>
          </div>

          <div class="specimen reveal" aria-hidden="true">
            <span><b>FIG. 01</b> Display specimen</span>
            <span class="dot-sep"></span>
            <span>Inter Tight · 500</span>
            <span class="dot-sep"></span>
            <span>Set −3.5%</span>
            <span class="dot-sep"></span>
            <span>42 glyphs</span>
            <span class="dot-sep"></span>
            <span>Rev. <b>2026.04</b></span>
          </div>
        </div>

        <!-- Right column: portrait placeholder -->
        <div class="portrait-slot reveal" role="img" aria-label="Portrait placeholder">
          <span class="corner" aria-hidden="true">DY · 01</span>
          <span class="initials" aria-hidden="true">Dy</span>
          <span class="label" aria-hidden="true">PORTRAIT · DROP IMAGE HERE</span>
        </div>
      </div>
    </div>

    <!-- Bottom 3-column footer -->
    <div class="hero-bottom">
      <div class="col reveal">
        <span class="mono">01 — Intro</span>
        <p>I build end-to-end products in JavaScript. <strong>From database schemas to pixel-tuned UIs</strong> — I enjoy every layer.</p>
      </div>
      <div class="col reveal">
        <span class="mono">02 — Currently</span>
        <p>Leading a small product team on developer tooling. Writing more TypeScript than I thought humanly possible.</p>
      </div>
      <div class="col reveal" style="align-items:flex-end; text-align:right;">
        <span class="mono">Scroll</span>
        <p style="display:flex; align-items:center; gap:8px; justify-content:flex-end;">
          <span class="kbd">↓</span> or <span class="kbd">space</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const titleRef = ref<HTMLElement | null>(null)

// Split headline into animated chars on mount
onMounted(() => {
  const el = titleRef.value
  if (!el) return

  const lines = el.innerHTML.split('<br>')
  el.innerHTML = ''
  let idx = 0

  lines.forEach((lineHtml) => {
    const lineEl = document.createElement('span')
    lineEl.className = 'line'

    const temp = document.createElement('div')
    temp.innerHTML = lineHtml.trim()

    temp.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        ;[...(node.textContent ?? '')].forEach((ch) => {
          if (ch === ' ') {
            lineEl.appendChild(Object.assign(document.createElement('span'), { className: 'space' }))
            return
          }
          const span = document.createElement('span')
          span.className = 'char'
          span.style.animationDelay = `${0.04 * idx + 0.2}s`
          span.textContent = ch
          lineEl.appendChild(span)
          idx++
        })
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const elem = node as HTMLElement
        if (elem.hasAttribute('data-keep')) {
          const clone = elem.cloneNode(true) as HTMLElement
          clone.style.cssText = 'display:inline-block;opacity:0;transform:translateY(20px);transition:opacity 0.6s var(--ease),transform 0.6s var(--ease)'
          lineEl.appendChild(clone)
          const delay = 0.04 * idx + 0.3
          setTimeout(() => {
            clone.style.opacity = '1'
            clone.style.transform = 'translateY(0)'
          }, delay * 1000)
          idx += 4
          return
        }
        ;[...(elem.textContent ?? '')].forEach((ch) => {
          if (ch === ' ') {
            lineEl.appendChild(Object.assign(document.createElement('span'), { className: 'space' }))
            return
          }
          const span = document.createElement('span')
          span.className = `char ${elem.tagName.toLowerCase() === 'em' ? 'italic' : ''}`
          span.style.animationDelay = `${0.04 * idx + 0.2}s`
          span.textContent = ch
          lineEl.appendChild(span)
          idx++
        })
      }
    })
    el.appendChild(lineEl)
  })

  // Word rotator — delayed start
  setTimeout(initRotator, 1800)
})

function initRotator() {
  const host = document.querySelector<HTMLElement>('.rotator-host')
  if (!host) return

  const words = ['JavaScript', 'TypeScript', 'Node', 'React', 'systems']
  let i = 0

  host.innerHTML = `<span class="r-word">${host.textContent}</span><span class="cursor" aria-hidden="true"></span>`
  const wordEl = host.querySelector<HTMLElement>('.r-word')!

  setInterval(() => {
    i = (i + 1) % words.length
    wordEl.classList.add('out')
    setTimeout(() => {
      wordEl.textContent = words[i]
      wordEl.classList.remove('out')
      wordEl.classList.add('in-anim')
      requestAnimationFrame(() => requestAnimationFrame(() => wordEl.classList.remove('in-anim')))
    }, 400)
  }, 2600)
}
</script>
