<template>
  <a class="writing-card" :href="article.href">
    <span class="date">{{ article.date }} · {{ article.readTime }}</span>
    <h3>{{ article.title }}</h3>
    <p>{{ article.excerpt }}</p>
    <span class="read">Read essay</span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  article: {
    date: string
    readTime: string
    title: string
    excerpt: string
    href: string
  }
}>()
</script>
