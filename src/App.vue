<script setup>
import TopBar from './components/TopBar.vue';
import { RouterView } from 'vue-router';

</script>

<template
  :class="{ 'dark': toggle }">
  <RouterView />
  <TopBar />
</template>