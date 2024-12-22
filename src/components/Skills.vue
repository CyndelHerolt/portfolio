<script setup>

</script>

<template>
  <div class="container flex flex-col justify-start items-center mt-44 pt-6 w-screen h-screen" id="skills">

    <div class="font-narse text-teal-500 px-8 uppercase text-8xl h-1/4">skills</div>

    <div class="flex flex-col items-center gap-10 w-full h-3/4">
      <div class="cards">
        <div data-text="initiative" style="--r:-15;" class="card pt-10 bg-yellow-400 border-4 border-yellow-600">
          <img src="@/assets/images/dice.png" alt="illustration" class="w-24 rounded-full border-4 border-black bg-black">
        </div>
        <div data-text="perseverance" style="--r:5;" class="card pt-10 bg-violet-500 border-4 border-violet-700">
          <img src="@/assets/images/frogs.png" alt="illustration" class="w-24 rounded-full border-4 border-black bg-black">
        </div>
        <div data-text="polyvalence" style="--r:25;" class="card pt-10 bg-orange-500 border-4 border-orange-700">
          <img src="@/assets/images/ghost.png" alt="illustration" class="w-24 rounded-full border-4 border-black bg-black">
        </div>
      </div>

      <div class="flex justify-center gap-2 w-1/2 h-4/4 px-6 skills-grid">
        <div class="bg-orange-500 h-full w-1/2 rounded-tr-3xl rounded-bl-3xl px-8 py-4 flex flex-col gap-2">
          <div class="card-title uppercase font-black text-black text-2xl">dev stack</div>
          <ul class="text-black relative">
            <li class="sf">Symfony</li>
            <li>VueJs</li>
            <li>Apache</li>
            <li>Git</li>
            <li>Postman</li>
            <li>PhpStorm</li>
            <li>DataGrip</li>
            <li>Opquast <a href="https://directory.opquast.com/fr/certificat/HNSIZ1/" target="_blank" class="text-xs underline">Certification "avancé"
              <i class="pi pi-external-link" style="font-size: .5rem"></i></a></li>
          </ul>
        </div>
        <div class="flex flex-col h-full w-1/2 gap-2">
          <div class="bg-yellow-400 h-1/2 w-full rounded-tr-3xl rounded-bl-3xl px-8 py-4 flex flex-col gap-2">
            <div class="card-title uppercase font-black text-black text-2xl">graphisme</div>
            <ul class="text-black">
              <li>Suite Adobe Creative Cloud</li>
              <li>Figma</li>
            </ul>
          </div>
          <div class="bg-violet-500 h-1/2 w-full rounded-br-3xl rounded-tl-3xl px-8 py-4">
            <div class="card-title uppercase font-black text-white text-2xl">objectifs</div>
            <ul class="text-white">
              <li>Qualité</li>
              <li>Accessibilité</li>
              <li>Eco-conception</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Narse:wght@800&display=swap');

.font-narse {
  font-family: 'Narse', sans-serif;
}

.sf::before {
  content: '✨';
  position: absolute;
  top: -.5rem;
  left: -1rem;
}

.cards {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
}

.cards .card {
  position: relative;
  width: 160px;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: start;
  transition: ease-in-out 0.5s;
  border-radius: 10px;
  margin: 0 -45px;
  transform: rotate(calc(var(--r) * 1deg));
}

.cards:hover .card {
  transform: rotate(0deg);
  margin: 0 10px;
}

.cards .card::before {
  content: attr(data-text);
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
}

@media (max-width: 768px) {

  .cards .card {
    width: 120px;
    height: 180px;
    padding-top: 1rem;
  }

  .cards .card::before {
    bottom: .5rem;
  }

  .cards .card img {
    width: 100px;
  }

  .skills-grid {
    width: 100vw;
  }
}

@media (min-width: 768px) {
  .font-narse {
    font-size: 10rem;
    line-height: normal;
  }
}
</style>
