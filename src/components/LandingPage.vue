<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const titleRef = ref(null);
const imgRef = ref(null);

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  if (titleRef.value) {
    titleRef.value.style.transform = `translateY(${scrollPosition * -0.2}px)`;
  }
  if (imgRef.value) {
    imgRef.value.style.transform = `translateY(${scrollPosition * -0.5}px)`;
  }
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <div class="flex justify-center items-start pt-12 relative px-4">
    <h1 ref="titleRef" class="uppercase select-none text-[10rem] font-narse font-extrabold text-pink-500 leading-[80%] mr-4">cyndel herolt</h1>
    <img ref="imgRef" src="@/assets/images/devil2.webp" alt="illustration devil" class="w-[300px] absolute bottom-0">
    <div class="flex flex-col items-start mt-12">
      <div class="text-yellow-400 opacity-80 text-md">Cyndel Herolt</div>
      <h2 class="leading-normal text-yellow-400 text-lg font-black">Développeuse web</h2>
      <h3 class="opacity-80 mb-4 text-lg font-black">Fullstack</h3>
      <div class="flex contact">
        <small class="text-yellow-400 opacity-80 text-base"><i class="pi pi-envelope"></i> &nbsp; cyndelherolt@gmail.com</small>
        <small class="text-yellow-400 opacity-80 text-base"><i class="pi pi-building"></i> &nbsp; URCA - IUT de Troyes</small>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Narse:wght@800&display=swap');

.font-narse {
  font-family: 'Narse', sans-serif;
  writing-mode: vertical-rl;
}

.contact {
  flex-direction: column;
}

@media (max-width: 768px) {

  .font-narse {
    font-size: 8rem;
  }

  .contact {
    writing-mode: vertical-lr;
  }
}
</style>
