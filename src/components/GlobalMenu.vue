<script setup>
import { onMounted, ref } from 'vue'

const toggleMenu = ref(false)

onMounted(() => {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      toggleMenu.value = !toggleMenu.value
    } else if (e.key === 'Escape') {
      toggleMenu.value = false
    }
  })
})

const handleToggleMenu = () => {
  toggleMenu.value = !toggleMenu.value
}
</script>

<template>
  <i class="pi pi-microsoft mix-blend-difference z-10" @click="handleToggleMenu"></i>
  <nav v-if="toggleMenu" class="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-10">
    <i class="pi pi-arrow-down-left-and-arrow-up-right-to-center" @click="handleToggleMenu"></i>
    <ul class="flex flex-wrap p-0 m-0 h-full">
      <li class="w-1/2 h-1/2 flex justify-center items-center text-center uppercase text-[10vw] font-bold hover:mix-blend-difference opacity-80">
        <a href="#home" @click="handleToggleMenu" class="h-full flex items-center w-full justify-center">Accueil</a>
      </li>
      <li class="w-1/2 h-1/2 flex justify-center items-center text-center uppercase text-[10vw] font-bold hover:mix-blend-difference">
        <a href="#about" @click="handleToggleMenu" class="h-full flex items-center w-full justify-center">À propos</a>
      </li>
      <li class="w-1/2 h-1/2 flex justify-center items-center text-center uppercase text-[10vw] font-bold hover:mix-blend-difference">
        <a href="#skills" @click="handleToggleMenu" class="h-full flex items-center w-full justify-center">Skills</a>
      </li>
      <li class="w-1/2 h-1/2 flex justify-center items-center text-center uppercase text-[10vw] font-bold hover:mix-blend-difference opacity-80">
        <a href="#projets" @click="handleToggleMenu" class="h-full flex items-center w-full justify-center">Projets</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pi.pi-microsoft {
  color: #ffcd27;
  position: fixed;
  top: 1rem;
  left: 1rem;
  transition: color 0.3s;
}

.pi.pi-microsoft:hover {
  color: #f127ff;
  cursor: pointer;
}

.pi.pi-arrow-down-left-and-arrow-up-right-to-center {
  color: white;
  mix-blend-mode: difference;
  position: absolute;
  border-radius: 5px;
  top: 1rem;
  left: 1rem;
  transition: color 0.3s;
  z-index: 2;
}

.pi.pi-arrow-down-left-and-arrow-up-right-to-center:hover {
  color: #f127ff;
  cursor: pointer;
}

nav {
  background-color: white;

  ul {

    li {
      background-color: black;
      color: white;
    }
  }
}
</style>
