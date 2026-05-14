<template>
  <a :href="project.href" class="project-row" :aria-label="project.title">
    <span class="num">{{ project.num }}</span>
    <div>
      <div class="title">{{ project.title }}</div>
    </div>
    <div class="desc">{{ project.desc }}</div>
    <span class="year">{{ project.year }}</span>
    <span class="arrow" aria-hidden="true">→</span>
    <div class="project-preview" aria-hidden="true">
      <div class="placeholder">PROJECT STILL / {{ project.preview }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    num: string
    title: string
    desc: string
    year: string
    href: string
    preview: string
  }
}>()
</script>
