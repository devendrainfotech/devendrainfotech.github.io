<template>
  <aside class="side-label reveal">
    <span class="num">{{ num }}</span>
    <span class="label">{{ label }}</span>
    <span class="hint">{{ hint }}</span>
    <span class="line-mark" aria-hidden="true"></span>
  </aside>
</template>

<script setup lang="ts">
defineProps<{ num: string; label: string; hint: string }>()
</script>
