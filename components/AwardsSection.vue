<template>
  <section id="awards" class="wrap">
    <SectionHead title="Awards & Talks" meta="§ 08 / Recognition" />

    <div class="section-intro">
      <SectionSideLabel
        num="08 / Recognition"
        label="Talks & small wins."
        hint="Awards, conference talks, guest lectures — the occasional pat on the back."
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
