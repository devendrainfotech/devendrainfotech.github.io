<template>
  <footer class="site-footer">
    <span>© 2026 Devendra Yadav</span>
    <span class="footer-links">
      <a href="https://github.com/devendrainfotech" target="_blank" rel="noopener noreferrer">GitHub</a>
      <span aria-hidden="true">·</span>
      <a href="https://www.linkedin.com/in/devendrainfotech/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <span aria-hidden="true">·</span>
      <a href="https://medium.com/@devendrainfotech" target="_blank" rel="noopener noreferrer">Medium</a>
    </span>
    <span aria-label="Local time">{{ time }}</span>
  </footer>
</template>

<script setup lang="ts">
const { time } = useClock()
</script>
