<template>
  <section id="about" class="wrap">
    <SectionHead title="About" meta="§ 02 / Who" />

    <!-- Bio -->
    <div class="about-grid">
      <SectionSideLabel
        num="01 / Bio"
        label="A short introduction."
        hint="Where I come from, what I build, and what I obsess over on weekends."
      />
      <div class="reveal">
        <p class="about-lead">
          I'm a full-stack developer who writes JavaScript for a living — and often <em>for fun</em>.
          Six years of shipping web apps, APIs, and the occasional CLI.
          I care about clean interfaces, fast feedback loops, and systems that
          stay simple as they grow.
        </p>
      </div>
    </div>

    <!-- Stats -->
    <div class="about-grid">
      <SectionSideLabel
        num="02 / Snapshot"
        label="By the numbers."
        hint="A quick factsheet — stack, output, and the occasional honest admission."
      />
      <div class="about-aside reveal-stagger">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span>{{ stat.label }}</span>
          <span>{{ stat.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Years shipping', value: '06' },
  { label: 'Production deploys', value: '1,200+' },
  { label: 'Primary language', value: 'TypeScript' },
  { label: 'Favourite runtime', value: 'Node.js' },
  { label: 'Open source repos', value: '34' },
  { label: 'Coffees / week', value: 'Undisclosed' },
]
</script>
