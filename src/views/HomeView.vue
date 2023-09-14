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


const container = ref(null);
const original = ref(null);


onMounted(() => {
  const cloned = original.value.cloneNode(true);
  container.value.appendChild(cloned)
  
  const threshold = 120
  window.scrollTo(0, threshold)
  
  window.addEventListener('scroll', () => {
    const halfHeight = original.value.clientHeight
  
    if (window.scrollY > halfHeight + threshold) {
      window.scrollTo(0, window.scrollY - halfHeight)
    } else if (window.scrollY < threshold) {
      window.scrollTo(0, halfHeight + window.scrollY)
    }
  })
});
</script>

<template>
  <Navbar
  :isAboutActive = isAboutActive
  :isSkillsActive = isSkillsActive
  :isPortfoliosActive = isPortfoliosActive
  :isContactActive = isContactActive />


  <div class="container w-full ml-auto px-10 
    lg:w-8/12 lg:mr-24 lg:px-0" ref="container">
    <div ref="original">
      <BannerView />
      <AboutView />
      <SkillsView />
      <PortfoliosView />
      <ContactView />
    </div>
  </div>
</template>
