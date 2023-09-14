<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function getPortfolio(name) {
    router.push(`/portfolio/${name}`);
  }

  import { useDataStore } from '../stores/dataStore';

  const store = useDataStore();


  import { ref, onMounted } from "vue";

  const portfolios = ref(null);

  let currentPos = window.pageYOffset;

  onMounted(() => {
    const callDistort = function () {
      const newPos = window.pageYOffset;
      const diff = newPos - currentPos;
      const speed = diff * 0.35;
  
      portfolios.value.style.transform = "skewY(" + speed + "deg)";
      currentPos = newPos;
      requestAnimationFrame(callDistort);
    };
  
    callDistort();
  })

</script>

<template>
  <section id="portfolios" class="w-100 py-60" ref="portfolios">
    <div class="columns-1 m-auto
      lg:w-3/12">
      <template v-for="portfolio in store.portfolios" :key="portfolio">
        <p class="text-sm mb-1.5 font-light">{{ portfolio.name }}</p>
        <img :src="portfolio.imgMain" class="h-72 object-cover mb-16 cursor-pointer" alt="專案圖片"
          @click.prevent="getPortfolio(portfolio.name)">
      </template>
    </div>
  </section>
</template>