<template>
  <section id="awards" class="wrap">
    <SectionHead title="Awards & Certs" meta="§ 08 / Recognition" />

    <div class="section-intro">
      <SectionSideLabel
        num="08 / Recognition"
        label="Certs & recognition."
        hint="AWS certification, competition wins, and a couple of team awards worth keeping."
      />
      <div class="awards-list reveal-stagger">
        <AwardRow v-for="award in awards" :key="award.title" :award="award" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { awards } from '~/data/portfolio'
</script>
