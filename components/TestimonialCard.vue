<template>
  <div class="testimonial">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <blockquote v-html="`&ldquo;${testimonial.quote}&rdquo;`"></blockquote>
    <div class="author">
      <div class="avatar" aria-hidden="true">{{ testimonial.initials }}</div>
      <div class="author-text">
        <strong>{{ testimonial.name }}</strong>
        <span>{{ testimonial.role }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  testimonial: {
    quote: string
    name: string
    role: string
    initials: string
  }
}>()
</script>
