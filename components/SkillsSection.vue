<template>
  <section id="skills" class="wrap">
    <SectionHead title="Skills" meta="§ 03 / Toolkit" />

    <div class="section-intro">
      <SectionSideLabel
        num="03 / Toolkit"
        label="Things I reach for."
        hint="The stack I've shipped production software on, loosely ordered by depth."
      />
      <div class="skills-list reveal-stagger">
        <SkillRow v-for="skill in skills" :key="skill.num" :skill="skill" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skills } from '~/data/portfolio'
</script>
