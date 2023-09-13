<script setup>
  import NextPortfolioCard from '../components/NextPortfolioCard.vue';
  import Navbar from '../components/Navbar.vue';
  import { useDataStore } from '../stores/dataStore';

  const store = useDataStore();

  import { useRoute } from 'vue-router';

  const route = useRoute();
  const portfolioName = route.params.portfolioName;

  // 根据路由参数匹配相应的数据项
  const item = store.portfolios.find(portfolio => portfolio.name === portfolioName);
</script>

<template>
  <Navbar />

  <div class="container w-8/12 ml-auto mr-24 py-28">
    <div class="text-center w-100
      flex flex-col items-center"
      v-if="item">
      <h1 class="text-8xl pb-32 font-Melodrama">{{ item.name }}</h1>
      <div class="mb-12">
        <h3 class="pb-2">skills:</h3>
        <p class="font-light text-gray-400 px-56 w-full">{{ item.skills.join('、').toString() }}</p>
      </div>
      <div class="mb-32">
        <h3 class="pb-2">tools:</h3>
        <p class="font-light text-gray-400 px-56 w-full">{{ item.tools.join('、').toString() }}</p>
      </div>
      <div class="w-2/4 mb-10
        flex justify-between">
        <template v-for="link in item.link" :key="link">
          <a class=" after:content-['_→']" :href="link.link">{{ link.title }}</a>
        </template>
      </div>
      <div class="w-full">
        <img class="w-full" :src="item.imgMain" alt="">
      </div>
      <div class="py-32 px-32 w-full">
        <h2 class="text-5xl mb-10">專案簡介</h2>
        <p class="font-light text-lg text-gray-400 leading-10 ">{{ item.info }}</p>
      </div>
      <div class="w-full">
        <img class="w-full" :src="`../assets/media/media/${item.imgSub}`" alt="">
      </div>      
      <div class="py-32 px-32 w-full">
        <h2 class="text-5xl mb-10">設計理念</h2>
        <p class="font-light text-lg text-gray-400 leading-10 ">{{ item.idea }}</p>
      </div>
      <div class="w-full"
        v-for="img in item.imgOther" :key="img">
        <img class="w-full mb-20" :src="img" alt="">
      </div>

      <img src="../assets/media/rolling-main.jpg" class="w-56 h-72 object-cover mb-10" alt="">    
      <NextPortfolioCard />
    </div>
  </div>
</template>