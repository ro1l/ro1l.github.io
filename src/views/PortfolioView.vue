<script setup>
  import NextPortfolioCard from '../components/NextPortfolioCard.vue';
  import Navbar from '../components/Navbar.vue';
  import { useDataStore } from '../stores/dataStore';

  const store = useDataStore();

  import { useRoute } from 'vue-router';

  const route = useRoute();
  const portfolioName = route.params.portfolioName;

  const item = store.portfolios.find(portfolio => portfolio.name === portfolioName);
</script>

<template>
  <Navbar />

  <div class="container w-full ml-auto py-36 px-10
    lg:w-8/12 lg:mr-24 lg:px-0 lg:py-28">
    <div class="text-center w-100
      flex flex-col items-center"
      v-if="item">
      <h1 class="text-8xl pb-32 font-Melodrama">{{ item.name }}</h1>
      <div class="mb-12">
        <h3 class="pb-2">skills:</h3>
        <p class="font-light text-gray-400 w-full
          lg:px-56">{{ item.skills.join('、').toString() }}</p>
      </div>
      <div class="mb-32">
        <h3 class="pb-2">tools:</h3>
        <p class="font-light text-gray-400 w-full
          lg:px-56">{{ item.tools.join('、').toString() }}</p>
      </div>
      <div class="mb-10 w-full
        flex justify-between
        lg:w-2/4">
        <template v-for="link in item.link" :key="link">
          <a class=" after:content-['_→']" :href="link.link">{{ link.title }}</a>
        </template>
      </div>
      <div class="w-full">
        <img class="w-full" :src="item.imgMain" alt="">
      </div>
      <div class="py-32 w-full
        lg:px-32">
        <h2 class="text-5xl mb-10">專案簡介</h2>
        <p class="font-light text-lg text-gray-400 leading-10 ">{{ item.info }}</p>
      </div>
      <div class="w-full">
        <img class="w-full mb-20" :src="item.imgSub" alt="專案圖片">
      </div>      
      <div class="py-32 w-full
        lg:px-32">
        <h2 class="text-5xl mb-10">設計理念</h2>
        <p class="font-light text-lg text-gray-400 leading-10 ">{{ item.idea }}</p>
      </div>
      <div class="w-full"
        v-for="img in item.imgOther" :key="img">
        <img class="w-full mb-20" :src="img" alt="專案圖片">
      </div>

      <NextPortfolioCard />
    </div>
  </div>
</template>