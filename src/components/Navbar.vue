<script setup>
  const props = defineProps({
    isAboutActive: {
      type: Boolean,
      default: false
    },
    isSkillsActive: {
      type: Boolean,
      default: false
    },
    isPortfoliosActive: {
      type: Boolean,
      default: false
    },
    isContactActive: {
      type: Boolean,
      default: false
    },
  });
</script>

<template>
  <nav class="w-full py-4 fixed bottom-0 left-0 bg-white bg-opacity-60 backdrop-blur-sm
  flex justify-evenly items-center
  lg:px-12 lg:py-24 lg:w-auto
  lg:flex-col lg:justify-normal lg:items-start">

    <router-link to="/#about" class="lg:mb-3" :class="{ 'py-1 text-xl lg:text-3xl lg:py-3': props.isAboutActive }">
      about
    </router-link>

    <router-link to="/#skills" class="lg:mb-3 " :class="{ 'py-1 text-xl lg:text-3xl lg:py-3': isSkillsActive }">
      skills
    </router-link>

    <router-link to="/#portfolios" class="lg:mb-3 " :class="{ 'py-1 text-xl lg:text-3xl lg:py-3': isPortfoliosActive }">
      portfolios
    </router-link>
  
    <router-link to="/#contact" class="lg:mb-0" :class="{ 'py-1 text-xl lg:text-3xl lg:py-3': isContactActive }">
      contact
    </router-link>

  </nav>
</template>