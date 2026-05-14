<template>
  <div class="skill-row">
    <span class="sn">{{ skill.num }}</span>
    <span class="name">{{ skill.name }}</span>
    <span class="tools">{{ skill.tools }}</span>
    <div class="meter" :aria-label="`Proficiency: ${skill.label}`">
      <span
        v-for="n in 5"
        :key="n"
        class="seg"
        :class="{ on: n <= skill.level }"
      ></span>
    </div>
    <span class="lvl">{{ skill.label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  skill: {
    num: string
    name: string
    tools: string
    level: number
    label: string
  }
}>()
</script>
