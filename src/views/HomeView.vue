<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import LandingLayout from '@/components/LandingPage.vue'
import IdCard from '@/components/IdCard.vue'
import Skills from '@/components/SkillsCards.vue'

</script>

<template>
  <main class="w-screen flex flex-col items-center">
    <LandingLayout class="section h-screen w-full" />
    <IdCard class="section h-screen w-full" />
    <Skills class="section h-screen w-full" />
    <div class="section w-full">
      <!-- Add other sections here -->
    </div>
  </main>
</template>

<style scoped>

</style>
