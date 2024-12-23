<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import LandingLayout from '@/components/LandingPage.vue'
import IdCard from '@/components/IdCard.vue'
import Skills from '@/components/SkillsCards.vue'
import Projects from '@/components/ProjectsSection.vue'
</script>

<template>
  <main class="w-screen flex flex-col items-center gap-28">
    <LandingLayout class="section min-h-screen w-full" />
    <IdCard class="section min-h-screen w-full" />
    <Skills class="section min-h-screen w-full" />
    <Projects class="section w-full"/>
  </main>
</template>

<style scoped>

</style>
