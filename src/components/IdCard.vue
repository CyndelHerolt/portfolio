<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cardRef = ref(null);
const glossaireRef = ref(null);

const handleMouseMove = (e) => {
  const card = cardRef.value;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  if (Math.abs(y) > window.innerHeight / 2) {
    card.style.transform = 'rotateX(0) rotateY(0)';
    card.style.boxShadow = 'none';
    return;
  }

  const rotateX = (y / rect.height) * -20;
  const rotateY = (x / rect.width) * 20;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.2)`;
};

const handleMouseLeave = () => {
  const card = cardRef.value;
  card.style.transform = 'rotateX(0) rotateY(0)';
  card.style.boxShadow = 'none';
};

const handleScroll = () => {
  const glossaire = glossaireRef.value;
  const scrollPosition = window.scrollY;
  const containerHeight = window.innerHeight;
  const glossairePosition = glossaire.getBoundingClientRect().top + scrollPosition;

  if (scrollPosition > glossairePosition - containerHeight) {
    const opacity = .7 - (scrollPosition - (glossairePosition - containerHeight)) / containerHeight;
    glossaire.style.opacity = Math.max(opacity, 0);
  } else {
    glossaire.style.opacity = .7;
  }
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseleave', handleMouseLeave);
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div id="about" class="container flex flex-col justify-center items-center mt-12">
    <div
      ref="cardRef"
      class="card rounded-xl bg-yellow-400 h-60 flex flex-col justify-between gap-4 shadow-md p-4"
    >
        <div class="card-header flex justify-between px-4 text-black">
          <div class="uppercase"> 🇫🇷 troyes</div>
          <p class="text-md font-thin">*B.U.T M.M.I</p>
        </div>
        <div class="card-body flex justify-between items-center text-black">
          <div class="px-4 flex flex-col gap-4">
            <ul class="infos text-xs mt-2">
              <li><span>🛹</span> Skateboarding</li>
              <li><span>🏓</span> Tennis de table</li>
              <li><span>🎵</span> Post-punk</li>
            </ul>
            <svg version="1.1" class="chip ml-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
            </svg>
          </div>
        </div>
      <img src="@/assets/images/devil1.png" alt="profil" class="h-52 absolute right-0 bottom-0">

        <div class="card-footer flex justify-between px-4 text-black">
          <div class="font-bold uppercase">Cyndel Herolt</div>
        </div>
    </div>
    <small ref="glossaireRef" class="opacity-60 mt-4 absolute bottom-0 glossaire">*Bachelor Univerisitaire de Technologie des Métiers du Multimédia et de l'Internet</small>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
  perspective: 1000px;
}

.card {
  transition: transform 1s ease-out, box-shadow 0.3s ease-out;
  transform-style: preserve-3d;
  width: 375px;
}
</style>
