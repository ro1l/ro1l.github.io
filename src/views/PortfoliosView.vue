<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function getPortfolio(name) {
    router.push(`/portfolio/${name}`);
  }

  import { useDataStore } from '../stores/dataStore';

  const store = useDataStore();
</script>

<template>
  <section id="portfolios" class="w-100 py-72">
    <div class="columns-1 w-3/12 m-auto">
      <template v-for="portfolio in store.portfolios" :key="portfolio">
        <p class="text-sm mb-1.5 font-light">{{ portfolio.name }}</p>
        <img :src="portfolio.imgMain" class="h-72 object-cover mb-16 cursor-pointer" alt=""
          @click.prevent="getPortfolio(portfolio.name)">
      </template>
    </div>
  </section>
</template>