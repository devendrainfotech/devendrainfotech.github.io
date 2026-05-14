<template>
  <section id="experience" class="wrap">
    <SectionHead title="Experience" meta="§ 05 / Timeline" />

    <div class="section-intro">
      <SectionSideLabel
        num="05 / Timeline"
        label="Where I've been."
        hint="9 years across fertility healthcare, cybersecurity, fintech, construction tech, and logistics."
      />
      <div class="timeline reveal-stagger">
        <TimelineRow v-for="entry in experience" :key="entry.when" :entry="entry" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experience } from '~/data/portfolio'
</script>
