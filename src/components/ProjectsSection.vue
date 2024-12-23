<script setup>
import { ref, onMounted } from 'vue';

const projets = [
  {
    title: 'UniServices',
    type: 'suite d\'applications',
    banner: 'uniservices.png',
    description: 'Outil de gestion de formations universitaires',
    images: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
  },
  {
    title: 'Roy Lunetier',
    type: 'preuve de concept',
    banner: 'roylunetier.png',
    description: 'Viewer et configurateur 3D',
    images: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
  },
  {
    title: 'EscapeGame',
    type: 'réalité virtuelle',
    banner: 'vr.png',
    description: 'Escape Game en réalité virtuelle',
    images: 'https://via.placeholder.com/150',
    link: 'https://www.google.com',
  }
];

const banners = ref([]);

onMounted(() => {
  banners.value = projets.map(projet => new URL(`../assets/projets/${projet.banner}`, import.meta.url).href);
});
</script>

<template>
  <div id="projets" class="flex flex-row-reverse justify-center items-center mt-32 h-full">
    <h1 class="h-full uppercase select-none text-[9rem] font-narse font-extrabold text-lime-500 text-center">Projets</h1>
    <div class="cards w-1/2 h-full flex gap-2">
      <div v-for="(projet, index) in projets" :key="projet.title" class="bg-blue-700 flex-1 rounded-tr-3xl rounded-bl-3xl px-6 py-4 text-white flex flex-col justify-between gap-3 pb-8 relative">
        <div>
          <div class="flex flex-col">
            <span class="text-2xl font-black" style="line-height: 80%">0{{index + 1}}</span>
            <span class="uppercase text-lime-400 text-md font-black">{{ projet.type }}</span>
          </div>
          <img :src="banners[index]" :alt="projet.title" class="w-full object-cover rounded-md">
          <div class="text-xl font-black uppercase text-lime-400">{{projet.title}}</div>
          <div>{{projet.description}}</div>
        </div>
          <a :href="projet.link" target="_blank" class="btn bg-lime-400 px-4 py-2 rounded-md absolute -bottom-3 right-4 uppercase text-black z-10 flex items-center text-xs hover:bg-yellow-400 font-bold">
            <span>voir le projet</span>
            <i class="pi pi-external-link ml-2"></i>
          </a>
        </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Narse:wght@800&display=swap');

.font-narse {
  font-family: 'Narse', sans-serif;
  writing-mode: vertical-rl;
  line-height: normal;
}

.btn {
  transition: background-color 0.5s;
}

@media (max-width: 768px) {
  #projets {
    justify-content: space-between;
    padding: 0 1rem;
  }

  .font-narse {
    font-size: 8rem;
  }

  .cards {
    flex-direction: column;
    width: 100%;
  }
}
</style>
