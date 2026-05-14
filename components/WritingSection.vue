<template>
  <section id="writing" class="wrap">
    <SectionHead title="Writing" meta="§ 06 / Notes" />

    <div class="section-intro">
      <SectionSideLabel
        num="06 / Notes"
        label="Essays & field notes."
        hint="Occasional writing on types, tools, and the weird corners of JavaScript."
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
