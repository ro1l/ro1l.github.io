<script setup>
import TopBar from '../components/TopBar.vue';
import BannerView from './BannerView.vue';
import AboutView from './AboutView.vue';
import SkillsView from './SkillsView.vue';
import PortfoliosView from './PortfoliosView.vue';
import ContactView from './ContactView.vue';
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
  <TopBar />

  <nav class="px-12 py-24
    flex flex-col
    fixed bottom-0 left-0">
    <router-link to="/#about" class="mb-3" :class="{ 'py-3 text-3xl': isAboutActive }">
      about
    </router-link>
    <router-link to="/#skills" class="mb-3" :class="{ 'py-3 text-3xl': isSkillsActive }">
      skills
    </router-link>
    <router-link to="/#portfolios" class="mb-3" :class="{ 'py-3 text-3xl': isPortfoliosActive }">
      portfolios
    </router-link>
    <router-link to="/#contact" class="" :class="{ 'py-3 text-3xl': isContactActive }">
      contact
    </router-link>
  </nav>

  <div class="container w-8/12 ml-auto mr-24">
    <BannerView />
    <AboutView />
    <SkillsView />
    <PortfoliosView />
    <ContactView />
  </div>
</template>
