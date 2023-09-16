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

  import { onMounted } from "vue";

  onMounted(() => {
    if (window.innerWidth >= 768) {
      let elements = document.querySelectorAll(".text");
    
      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";
    
        let textContainer = document.createElement("div");
        textContainer.classList.add("block");
    
        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }
    
        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      })
    
      elements.forEach((element) => {
        element.addEventListener("mouseover", () => {
          element.classList.remove("play");
        });
      });
    }
  });
</script>

<template>
  <nav class="w-full py-4 z-50 fixed bottom-0 left-0 bg-white bg-opacity-70 backdrop-blur-sm
  flex justify-evenly items-center
  dark:bg-[#0b0b0b] dark:bg-opacity-10
  lg:px-12 lg:py-24 lg:w-auto
  lg:flex-col lg:justify-normal lg:items-start">

  <router-link to="/#about" class="overflow-hidden text h-8 leading-8
      lg:mb-3" 
      :class="{
      'py-1 text-2xl lg:text-3xl lg:py-3 lg:leading-[50px] lg:h-14 transition-all	': props.isAboutActive}">
    about
  </router-link>

    <router-link to="/#skills" class="overflow-hidden text h-8 leading-8
      lg:mb-3"
      :class="{ 'py-1 text-2xl lg:text-3xl lg:leading-[45px] lg:h-14 transition-all	': props.isSkillsActive }">
      skills
    </router-link>

    <router-link to="/#portfolios" class="overflow-hidden text h-8 leading-8
      lg:mb-3"
      :class="{ 'py-1 text-2xl lg:text-3xl lg:leading-[45px] lg:h-14 transition-all	': props.isPortfoliosActive }">
      portfolios
    </router-link>
  
    <router-link to="/#contact" class="overflow-hidden text h-8 leading-8
      lg:mb-0"
      :class="{ 'py-1 text-2xl lg:text-3xl lg:leading-[45px] lg:h-14 transition-all	': props.isContactActive }">
      contact
    </router-link>

  </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
.text:hover .letter,
.text.play .letter {
  transform: translateY(-100%);
}

.text .block:last-child {
  font-family: 'Playfair Display', serif;
}

.text .letter {
  display: inline-block;
  transition: transform .6s cubic-bezier(.76, 0, .024, 1);
}

.letter:nth-child(1) {
  transition-delay: 0s;
}

.letter:nth-child(2) {
  transition-delay: .03s;
}

.letter:nth-child(3) {
  transition-delay: .06s;
}

.letter:nth-child(4) {
  transition-delay: .09s;
}

.letter:nth-child(5) {
  transition-delay: .12s;
}

.letter:nth-child(6) {
  transition-delay: .15s;
}

.letter:nth-child(7) {
  transition-delay: .18s;
}

.letter:nth-child(8) {
  transition-delay: .21s;
}

.letter:nth-child(9) {
  transition-delay: .24s;
}

.letter:nth-child(10) {
  transition-delay: .27s;
}

.letter:nth-child(11) {
  transition-delay: .3s;
}

.letter:nth-child(12) {
  transition-delay: .33s;
}
</style>