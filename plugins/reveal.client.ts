// Global IntersectionObserver for .reveal / .reveal-stagger scroll animations.
// Runs once per page load after the DOM is ready.
export default defineNuxtPlugin(() => {
  if (typeof IntersectionObserver === 'undefined') return

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )

  // Observe after a tick so all components have mounted
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el))
  })
})
