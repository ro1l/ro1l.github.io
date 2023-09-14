<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <header class="w-full px-12 py-8 z-50
    flex justify-between items-center
    fixed top-0 left-0">
    <div class="text-xl">
      <router-link to="/">ʝɛ</router-link>
    </div>
    <div class="w-3 h-3 bg-[#0b0b0b] cursor-pointer dark:bg-white" 
      @click="toggleDark()">
    </div>
  </header>
</template>