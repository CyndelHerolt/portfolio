<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { select } from 'three/src/nodes/math/ConditionalNode.js'

const arrowRef = ref(null);
const containerRef = ref(null);
const discExtRef = ref(null);

const handleScroll = () => {
  // log la position du scroll verticale de la fenêtre
  console.log(window.scrollY);

  if (arrowRef.value && containerRef.value) {
    // ajouter un effet de transition
    arrowRef.value.style.opacity = containerRef.value.scrollLeft > 150 ? 0 : 1;
    arrowRef.value.style.transition = 'opacity 0.3s';

    // appliquer un effet de parallaxe
    discExtRef.value.style.transform = `translateX(-${containerRef.value.scrollLeft / 1.5}px)`;
// appliquer une couleur de fond en fonction de la position du scroll
    if (containerRef.value.scrollLeft > 600) {
      discExtRef.value.style.backgroundColor = '#ffcd27';
    } else if (containerRef.value.scrollLeft > 300) {
      discExtRef.value.style.backgroundColor = '#f127ff';
    } else {
      discExtRef.value.style.backgroundColor = '#276bff';
    }
    discExtRef.value.style.transition = 'background-color .5s';

    // agrandir le disque en fonction de la position du scroll
    discExtRef.value.style.width = `${20 + containerRef.value.scrollLeft / 10}rem`;
    discExtRef.value.style.height = `${20 + containerRef.value.scrollLeft / 10}rem`;
  }
};

onMounted(() => {
  if (containerRef.value) {
    console.log('Container mounted');
    containerRef.value.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', handleScroll);
  }
});
</script>

<template>
  <main ref="containerRef" class="flex flex-row flex-nowrap items-center overflow-x-auto overflow-y-hidden border-t-2 border-b-2 border-stone-500">
    <div class="container flex justify-start items-center h-screen w-screen whitespace-nowrap">
      <div class="disc-container flex justify-center items-center h-screen w-screen flex-shrink-0">
        <div ref="discExtRef" class="flex justify-center items-center rounded-full w-[20rem] h-[20rem] flex-shrink-0">
          <div class="disc flex justify-center items-center bg-[#2b2b2b] rounded-full w-[20rem] h-[20rem] flex-shrink-0">
            <h2 class="text-white">À propos</h2>
          </div>
        </div>
      </div>
      <div class="cards flex gap-5 items-stretch p-10">
        <div class="devilfirst w-52 h-auto rounded-md border-8 border-[#ffcd27] overflow-hidden"></div>

        <i class="pi pi-arrow-right arrow absolute content-center h-4/5" ref="arrowRef"></i>
        <div class="card bg-[#276bff] p-4 rounded-md flex-shrink-0">
          <h2 class="text-[#ffcd27] text-[5.5rem] uppercase leading-normal text-center font-bold">formations</h2>
          <ol class="p-4 mb-4 list-none flex flex-col gap-4">
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">😒</span><span class="text-[#ffcd27] font-bold">2014 - 2016</span><br>Brevet d'études professionnelles, Métiers de la Relation aux Clients et aux Usagers
            </li>
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">😶‍🌫️</span><span class="text-[#ffcd27] font-bold">2016 - 2019</span><br>404 Not Found
            </li>
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">🤓</span><span class="text-[#ffcd27] font-bold">2019 - 2020</span><br>Diplôme d'Accès aux Études Universitaires - Option Littérature
              <br>
              <small>mention Très Bien</small>
            </li>
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">🫠</span><span class="text-[#ffcd27] font-bold">2020 - 2021</span><br>Passerelle vers un Bachelor Univeristaire de Technologie
            </li>
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">🤩</span><span class="text-[#ffcd27] font-bold">2021 - 2024</span><br>Bachelor Universitaire de Technologie, Métiers du Multimédia et de l'Internet
            </li>
          </ol>
        </div>
        <div class="card bg-[#f127ff] rounded-md flex-shrink-0 flex flex-row gap-5 p-10">
          <h2 class="text-cornsilk text-[6.5rem] uppercase leading-none vertical-lr font-bold flex justify-center">expériences</h2>
          <ol class="list-none flex flex-col justify-center gap-4 w-72">
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">🧑‍💻</span><span class="text-black font-bold">depuis 2022</span><br>Deux ans d'alternance puis contrat de Développeuse web fullstack au <span class="text-black font-bold">service informatique de l'IUT de Troyes</span>
              <br>
              <small>Symfony - VueJs - Linux - Git</small>
            </li>
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">🧑‍💼</span><span class="text-black font-bold">2018</span><br>Conseillère clientèle pour Edf chez <span class="text-black font-bold">3Media</span>
              <br>
              <small>Relation client - Gestion de litiges</small>
            </li>
            <li class="whitespace-normal break-words leading-normal">
              <span class="icon mr-4 text-[2rem]">🧑‍💼</span><span class="text-black font-bold
              ">2014 - 2017</span><br>Différents stages dans le domaine de la vente <span class="text-black
              font-bold">Adidas, VictoriaKeys Immobilier, Alexandre Antoine immobilier, Sanelec, Canal32</span>
              <br>
              <small>Accueil - Conseil - Prospection</small>
            </li>
          </ol>
        </div>
        <div class="card bg-[#ffcd27] rounded-md flex-shrink-0 p-4">
          <h2 class="text-[#276bff] text-[5.5rem] uppercase leading-normal text-center font-bold">personnalité</h2>
        </div>

        <div class="devilsecond w-52 h-auto rounded-md border-8 border-[#276bff] overflow-hidden"></div>
      </div>

    </div>
  </main>
</template>

<style scoped>
main {
  background-color: cornsilk;
}

.pi-arrow-right {
  position: absolute;
  right: 15rem;
  color: black;
}

.vertical-lr {
  writing-mode: vertical-lr;
}

.devilfirst {
  background-image: url('@/assets/images/devilskeleton.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-color: #2b2b2b;
}

.devilsecond {
  background-image: url('@/assets/images/skeletonjump.webp');
  background-size: cover;
  background-position: center;
  background-color: #2b2b2b;
}
</style>
