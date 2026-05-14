<template>
  <section id="experience" class="wrap">
    <SectionHead title="Experience" meta="§ 05 / Timeline" />

    <div class="section-intro">
      <SectionSideLabel
        num="05 / Timeline"
        label="Where I've been hiding."
        hint="Six years in startups and consulting, with one big rewrite I'm still proud of."
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
