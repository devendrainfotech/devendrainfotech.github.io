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
          I'm a Senior Full-stack Engineer based in Ahmedabad with 9+ years shipping production software
          across fertility healthcare, cybersecurity, trading, construction tech, and logistics.
          Currently at Basis Worldwide, I lead <em>Nuxt 4 development</em> for CooperSurgical's fertility
          brand portfolio, architect Terraform infrastructure on Azure and GCP, and build real-time
          data pipelines. I care about clean APIs, maintainable code, and systems that work reliably under pressure.
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
