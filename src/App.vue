<script setup>
import { onMounted, ref } from 'vue'
import HomeView from '@/views/HomeView.vue'
import GlobalMenu from '@/components/GlobalMenu.vue'

onMounted(() => {
  let currentX = ref(0);
  let currentY = ref(0);
  let targetX = ref(0);
  let targetY = ref(0);
  let speed = 0.03;

  const trace = document.getElementById('trace');

  document.addEventListener('mousemove', (e) => {
    targetX.value = e.pageX;
    targetY.value = e.pageY;

    let distanceToEdge = Math.min(e.pageX, e.pageY, document.documentElement.scrollWidth - e.pageX, document.documentElement.scrollHeight - e.pageY);
    let size = Math.max(1, distanceToEdge / 5);

    trace.style.width = size + 'px';
    trace.style.height = size + 'px';
  });

  function animate() {
    currentX.value += (targetX.value - currentX.value) * speed;
    currentY.value += (targetY.value - currentY.value) * speed;

    trace.style.left = (currentX.value - trace.offsetWidth / 2) + 'px';
    trace.style.top = (currentY.value - trace.offsetHeight / 2) + 'px';

    requestAnimationFrame(animate);
  }

  animate();
});
</script>

<template>
  <div class="grain"></div>
  <div class="content-grid"></div>
  <div class="dev-banner text-black text-xl bg-yellow-400 px-24 py-2 rotate-45 fixed top-24 shadow-md uppercase">
    En cours de développement
  </div>
  <header>
    <GlobalMenu />
  </header>
  <div class="content flex flex-col justify-center items-center gap-[15rem]">
    <div id="home" class="h-screen">
      <HomeView />
    </div>
  </div>
  <div id="trace"></div>
</template>

<style scoped>
.dev-banner {
  z-index: 100;
  right: -6.5rem;
}

#trace {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  mix-blend-mode: difference;
  z-index: 10;
  pointer-events: none;
  backdrop-filter: blur(.05rem);
  border: solid 2px rgb(255, 205, 39);
  box-shadow: 0 0 500px 10px rgba(206, 206, 206, 0.46);
}

.grain {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: translateZ(0);
  pointer-events: none;
  z-index: 50;
}

.grain:before {
  content: "";
  top: -10rem;
  left: -10rem;
  width: calc(100% + 20rem);
  height: calc(100% + 20rem);
  z-index: 9999;
  position: fixed;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Image_gaussian_noise_example.png);
  opacity: 0.15;
  pointer-events: none;
}

/* From Uiverse.io by adamgiebl */
/*.content-grid {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  --color: rgba(114, 114, 114, 0.1);
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
  linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}*/
</style>
