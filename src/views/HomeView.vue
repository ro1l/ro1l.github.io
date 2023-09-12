<script setup>
import BannerView from './BannerView.vue';
import AboutView from './AboutView.vue';
import SkillsView from './SkillsView.vue';
import PortfoliosView from './PortfoliosView.vue';
import ContactView from './ContactView.vue';
import Navbar from '../components/Navbar.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';

function useElementVisibility(elementId) {
  const isActive = ref(false);

  function handleScroll() {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      isActive.value = rect.top <= 400 && rect.bottom >= 400;
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return isActive;
}

const isAboutActive = useElementVisibility('about');
const isSkillsActive = useElementVisibility('skills');
const isPortfoliosActive = useElementVisibility('portfolios');
const isContactActive = useElementVisibility('contact');


</script>

<template>
  <Navbar
  :isAboutActive = isAboutActive
  :isSkillsActive = isSkillsActive
  :isPortfoliosActive = isPortfoliosActive
  :isContactActive = isContactActive />

  <div class="container w-8/12 ml-auto mr-24">
    <BannerView />
    <AboutView />
    <SkillsView />
    <PortfoliosView />
    <ContactView />
  </div>
</template>
