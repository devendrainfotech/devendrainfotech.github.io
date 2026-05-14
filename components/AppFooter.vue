<template>
  <footer class="site-footer">
    <span>© 2026 Devendra Yadav</span>
    <span>Built with care · Nuxt · Vue · CSS</span>
    <span aria-label="Local time">{{ time }}</span>
  </footer>
</template>

<script setup lang="ts">
const { time } = useClock()
</script>
