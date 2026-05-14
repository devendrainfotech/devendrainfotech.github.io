<template>
  <div class="section-head reveal">
    <h2>{{ title }}</h2>
    <span class="meta">{{ meta }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string; meta: string }>()
</script>
