<template>
  <section id="work" class="wrap">
    <SectionHead title="Selected Work" meta="§ 04 / 06 Projects" />

    <div class="section-intro">
      <SectionSideLabel
        num="04 / Work"
        label="Six things I shipped."
        hint="Healthcare platforms, data pipelines, security tools, and logistics systems — all in production."
      />
      <div class="projects reveal-stagger">
        <ProjectRow v-for="project in projects" :key="project.num" :project="project" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '~/data/portfolio'
</script>
