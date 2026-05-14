<template>
  <section class="hero wrap" aria-label="Introduction">
    <div>
      <div class="hero-top">
        <!-- Left column: status + title + specimen -->
        <div class="hero-text">
          <div class="status-chip reveal">
            <span class="led" aria-hidden="true"></span>
            Open to opportunities · Ahmedabad, IN
          </div>

          <div class="hero-title-wrap">
            <span class="xhair tl" aria-hidden="true"></span>
            <span class="xhair tr" aria-hidden="true"></span>
            <span class="xhair bl" aria-hidden="true"></span>
            <span class="xhair br" aria-hidden="true"></span>
            <h1 ref="titleRef" class="hero-title" data-split>
              Devendra Yadav<br>
              <em class="text-orange">full-stack</em> developer<br>
              shipping in <span data-keep class="rotator-host">JavaScript</span>
            </h1>
          </div>

          <div class="specimen reveal" aria-hidden="true">
            <span><b>DEV.</b> Devendra Yadav</span>
            <span class="dot-sep"></span>
            <span>9+ yrs experience</span>
            <span class="dot-sep"></span>
            <span>Ahmedabad, IN</span>
            <span class="dot-sep"></span>
            <span>AWS Certified</span>
          </div>
        </div>

        <!-- Right column: portrait -->
        <div class="portrait-slot reveal" role="img" aria-label="Portrait of Devendra Yadav">
          <span class="corner" aria-hidden="true">DY · 01</span>
          <img src="/avatar.png" alt="Devendra Yadav" class="portrait-img" />
        </div>
      </div>
    </div>

    <!-- Bottom 3-column footer -->
    <div class="hero-bottom">
      <div class="col reveal">
        <span class="mono">01 — Intro</span>
        <p>I build end-to-end products in JavaScript. <strong>From Terraform infrastructure to pixel-tuned UIs</strong> — I enjoy every layer.</p>
      </div>
      <div class="col reveal">
        <span class="mono">02 — Currently</span>
        <p>Senior engineer at Basis Worldwide — shipping Nuxt 4 frontends for CooperSurgical and building real-time data pipelines on AWS.</p>
      </div>
      <div class="col reveal col--right">
        <span class="mono">Scroll</span>
        <p class="scroll-p">
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

  const words = ['JavaScript', 'TypeScript', 'Node.js', 'Nuxt', 'Vue', 'React']
  let i = 0

  host.innerHTML = `<span class="r-word">${host.textContent}<span class="hero-dot">.</span></span><span class="cursor" aria-hidden="true"></span>`
  const wordEl = host.querySelector<HTMLElement>('.r-word')!
  const textNode = wordEl.childNodes[0] as Text

  setInterval(() => {
    i = (i + 1) % words.length
    wordEl.classList.add('out')
    setTimeout(() => {
      // Update only the text node — preserves the dot span inside r-word
      textNode.textContent = words[i]
      wordEl.style.transition = 'none'
      wordEl.classList.remove('out')
      wordEl.classList.add('in-anim')
      void wordEl.offsetHeight
      wordEl.style.transition = ''
      requestAnimationFrame(() => requestAnimationFrame(() => wordEl.classList.remove('in-anim')))
    }, 400)
  }, 2600)
}
</script>
