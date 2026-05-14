<template>
  <section id="writing" class="wrap">
    <SectionHead title="Writing" meta="§ 06 / Notes" />

    <div class="section-intro">
      <SectionSideLabel
        num="06 / Notes"
        label="Writing."
        hint="Articles on Node.js, AI integration, and building production JavaScript systems."
      />
      <div class="writing-list reveal-stagger">
        <WritingCard v-for="article in writing" :key="article.title" :article="article" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { writing } from '~/data/portfolio'
</script>
