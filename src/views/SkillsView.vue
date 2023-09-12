<script setup>
import { reactive } from 'vue';

const skills = reactive([
  {
    title: 'Basics',
    name: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'JavaScript Framework',
    name: ['Vue.js'],
  },
  {
    title: 'Building tools',
    name: ['Vue CLI', 'Vite', 'Nuxt (know little about)'],
  },
  {
    title: 'Front-end Framework',
    name: ['Bootstrap', 'Tailwind'],
  },
  {
    title: 'Styling',
    name: ['Scss', 'hand-coding RWD'],
  },
  {
    title: 'Design',
    name: ['Figma', ],
  },
  {
    title: 'Version Control',
    name: ['Git', ],
  },
  {
    title: 'JavaScript Linter',
    name: ['ESLint airbnb', ],
  },
  {
    title: 'AJAX',
    name: ['axios', 'async await'],
  },
  {
    title: 'Adobe',
    name: ['Photoshop', 'Illustrator', 'Premiere Pro'],
  },
  {
    title: 'Operating System',
    name: ['macOS', 'Windows 7', 'Windows 10', 'Windows 11'],
  }
]);
</script>

<template>
    <section id="skills" class="w-100 py-20">
      <div class="flex flex-col mb-10"
        v-for="item in skills" :key="item.title">
        <h2 class="text-4xl py-8 border-b border-black">{{ item.title }}</h2>
          <p class="py-4 border-b border-black" 
            v-for="name in item.name" :key="name">
            {{ name }}
          </p>
      </div>
    </section>
</template>