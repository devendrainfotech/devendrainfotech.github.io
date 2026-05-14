<template>
  <div class="timeline-row">
    <span class="when">{{ entry.when }}</span>
    <div class="role">
      {{ entry.role }}
      <small>{{ entry.company }}</small>
    </div>
    <div class="desc">{{ entry.desc }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  entry: {
    when: string
    role: string
    company: string
    desc: string
    current: boolean
  }
}>()
</script>
