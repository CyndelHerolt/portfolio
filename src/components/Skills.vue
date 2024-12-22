<template>
  <div class="container flex flex-col items-center mt-44 pt-6" id="skills">
    <div class="font-narse text-teal-500 px-8 uppercase text-7xl h-1/4 flex items-center">skills</div>
    <div class="flex flex-col items-center gap-10 w-full h-3/4">
      <div class="cards flex justify-center items-center w-full">
        <div data-text="initiative" style="--r:-15;" class="card pt-8 bg-yellow-400 border-4 border-yellow-600 flex-1 flex justify-center items-start transition-transform duration-500 rounded-lg">
          <img src="@/assets/images/dice.png" alt="illustration" class="w-24 rounded-full border-4 border-black bg-black">
        </div>
        <div data-text="perseverance" style="--r:5;" class="card pt-8 bg-violet-500 border-4 border-violet-700 flex-1 flex justify-center items-start transition-transform duration-500 rounded-lg">
          <img src="@/assets/images/frogs.png" alt="illustration" class="w-24 rounded-full border-4 border-black bg-black">
        </div>
        <div data-text="polyvalence" style="--r:25;" class="card pt-8 bg-orange-500 border-4 border-orange-700 flex-1 flex justify-center items-start transition-transform duration-500 rounded-lg">
          <img src="@/assets/images/ghost.png" alt="illustration" class="w-24 rounded-full border-4 border-black bg-black">
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-center gap-2 w-full h-4/4 skills-grid px-4">
        <div class="hardskill bg-orange-500 w-full md:w-1/2 rounded-tr-3xl rounded-bl-3xl px-6 py-4 flex flex-col gap-2">
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
        <div class="flex flex-col w-full md:w-1/2 gap-2">
          <div class="hardskill bg-yellow-400 h-1/2 rounded-tr-3xl rounded-bl-3xl px-6 py-4 flex flex-col gap-2">
            <div class="card-title uppercase font-black text-black text-2xl">graphisme</div>
            <ul class="text-black">
              <li>Suite Adobe Creative Cloud</li>
              <li>Figma</li>
            </ul>
          </div>
          <div class="hardskill bg-violet-500 h-1/2 rounded-br-3xl rounded-tl-3xl px-6 py-4">
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

.cards .card {
  transition: 0.5s;
  transform: rotate(calc(var(--r) * -1deg));
}

.cards:hover .card {
  transform: rotate(0deg);
}

.cards .card::before {
  content: attr(data-text);
  position: absolute;
  bottom: 2rem;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
}

@media (max-width: 768px) {
  .cards {
    flex-direction: column-reverse;
    position: relative;
  }

  .cards .card {
    width: 80%;
    margin: -3rem 0;
    padding: 1rem 0 2rem 0;
  }

  .cards .card::before {
    bottom: .5rem;
  }

  .cards:hover .card {
    margin: 5px 0;
  }

  .cards .card img {
    width: 100px;
  }

  .hardskill {
    padding: 1rem;
  }
}

@media (min-width: 768px) {
  .font-narse {
    font-size: 10rem;
  }

  #skills {
    width: 50%;
  }

  .cards {
    flex-direction: row;
    position: relative;
    width: auto;
  }

  .cards .card {
    width: 160px; /* Fixed width */
    height: 200px; /* Fixed height to make them taller */
    margin: 0 -45px; /* Negative margin for overlap */
    padding: 2rem 0 0 0;
    transition: all 0.5s ease; /* Smooth transition */
  }

  .cards .card::before {
    bottom: .5rem;
  }

  .cards:hover .card {
    margin: 0 10px; /* Adjust margin on hover to separate cards */
  }
}
</style>
