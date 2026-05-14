<template>
  <canvas ref="canvas" id="dotGrid" aria-hidden="true"></canvas>
</template>

<script setup lang="ts">
const canvas = ref<HTMLCanvasElement | null>(null)
let rafId = 0
let resizeHandler: () => void
let mouseMoveHandler: (e: MouseEvent) => void

onMounted(() => {
  const el = canvas.value
  if (!el) return

  const ctx = el.getContext('2d')!
  let w = 0
  let h = 0
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 }

  resizeHandler = () => {
    w = window.innerWidth
    h = window.innerHeight
    el.width = w * dpr
    el.height = h * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  mouseMoveHandler = (e: MouseEvent) => {
    mouse.tx = e.clientX
    mouse.ty = e.clientY
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)
    mouse.x += (mouse.tx - mouse.x) * 0.12
    mouse.y += (mouse.ty - mouse.y) * 0.12

    const spacing = 48
    const cols = Math.ceil(w / spacing) + 2
    const rows = Math.ceil(h / spacing) + 2
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
    const base = isDark ? 'rgba(250,250,250,' : 'rgba(18,18,18,'
    const radius = 1.2
    const influence = 140

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * spacing
        const y = j * spacing
        const dx = x - mouse.x
        const dy = y - mouse.y
        const d = Math.hypot(dx, dy)
        let ox = 0
        let oy = 0
        let op = 0.14
        let r = radius

        if (d < influence) {
          const k = 1 - d / influence
          op = 0.14 + k * 0.55
          r = radius + k * 1.8
          const ang = Math.atan2(dy, dx)
          const push = k * 10
          ox = Math.cos(ang) * push
          oy = Math.sin(ang) * push
        }

        ctx.fillStyle = base + op.toFixed(3) + ')'
        ctx.beginPath()
        ctx.arc(x + ox, y + oy, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    rafId = requestAnimationFrame(draw)
  }

  resizeHandler()
  window.addEventListener('resize', resizeHandler, { passive: true })
  window.addEventListener('mousemove', mouseMoveHandler, { passive: true })
  rafId = requestAnimationFrame(draw)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', resizeHandler)
  window.removeEventListener('mousemove', mouseMoveHandler)
})
</script>
