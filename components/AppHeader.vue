<template>
  <header class="site-header">
    <a href="#top" class="logo">
      <span class="dot" aria-hidden="true"></span>
      DY&nbsp;/&nbsp;Portfolio&nbsp;<span style="color:var(--fg-mute)">'26</span>
    </a>

    <nav class="nav-links" aria-label="Primary">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#writing">Writing</a>
      <a href="#contact">Contact</a>
    </nav>

    <div class="nav-right">
      <span class="mono" aria-label="Local time">{{ time }}</span>
      <button
        class="theme-toggle"
        :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`"
        @click="toggle"
      ></button>
    </div>
  </header>
</template>

<script setup lang="ts">
const { time } = useClock()
const { theme, toggle } = useTheme()
</script>
