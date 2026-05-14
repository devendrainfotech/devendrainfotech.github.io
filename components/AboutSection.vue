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
          Senior full-stack engineer, Ahmedabad. Nine years in, five industries deep:
          healthcare, fintech, cybersecurity, trading, and logistics.
        </p>
        <p class="about-lead">
          Currently at Basis Worldwide — <em>Nuxt 4</em> for CooperSurgical, <em>Terraform</em>
          across Azure and GCP for an AI healthcare client, and a real-time <em>CDC pipeline</em>
          for Panopto's enterprise video platform.
        </p>
        <p class="about-lead">
          I build the boring layers that make products feel fast.
          Database to design system. Whichever layer is on fire.
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
  { label: 'Years shipping', value: '09+' },
  { label: 'Production projects', value: '20+' },
  { label: 'Primary language', value: 'TypeScript' },
  { label: 'Current stack', value: 'Nuxt 4 · AWS' },
  { label: 'AWS Certified', value: 'Developer Assoc.' },
  { label: 'Based in', value: 'Ahmedabad, IN' },
]
</script>
