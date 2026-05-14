<template>
  <section id="testimonials" class="wrap">
    <SectionHead title="Kind Words" meta="§ 07 / References" />

    <div class="section-intro">
      <SectionSideLabel
        num="07 / References"
        label="People I've worked with."
        hint="Words from managers, designers, and founders who had to endure my PRs."
      />
      <div class="testimonials-grid reveal-stagger">
        <TestimonialCard
          v-for="t in testimonials"
          :key="t.name"
          :testimonial="t"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '~/data/portfolio'
</script>
