<template>
  <div class="award-row">
    <span class="year">{{ award.year }}</span>
    <span class="title">{{ award.title }}</span>
    <span class="org">{{ award.org }}</span>
    <span class="tag">{{ award.tag }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  award: {
    year: string
    title: string
    org: string
    tag: string
  }
}>()
</script>
