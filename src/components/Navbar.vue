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
  <nav class="px-12 py-24
  flex flex-col
  fixed bottom-0 left-0">

    <router-link to="/#about" class="mb-3" :class="{ 'py-3 text-3xl': props.isAboutActive }">
      about
    </router-link>

    <router-link to="/#skills" class="mb-3 " :class="{ 'py-3 text-3xl': isSkillsActive }">
      skills
    </router-link>

    <router-link to="/#portfolios" class="mb-3 " :class="{ 'py-3 text-3xl': isPortfoliosActive }">
      portfolios
    </router-link>
  
    <router-link to="/#contact" class="" :class="{ 'py-3 text-3xl': isContactActive }">
      contact
    </router-link>

  </nav>
</template>