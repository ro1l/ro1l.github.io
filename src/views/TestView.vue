<script setup>
import { gsap, ScrollTrigger } from "gsap/all";

import { ref, onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

const box = ref(null);

onMounted(() => {
  gsap.to(box.value, {
    x: 200,
    scrollTrigger: {
      trigger: box.value, // 正确指定触发器元素
      start: "top center", // 触发器起始位置
      end: "bottom center", // 触发器结束位置
      scrub: true // 是否随着滚动缓动
    }
  });
});

import SimplePlane from "../components/SimplePlane.vue";
import { Curtains } from "vue-curtains";

const curtainsParams = {
  pixelRatio: Math.min(1.5, window.devicePixelRatio),
};


// me
const clamper = gsap.utils.clamp(-100, 100);
const proxy = { yPercent: 0 };
const yPercentSetter = gsap.quickSetter('#text-secondary', 'yPercent');


onMounted(() => {
  gsap.to(box.value, {
    x: 200,
    scrollTrigger: {
      trigger: box.value, // 正确指定触发器元素
      start: "top center", // 触发器起始位置
      end: "bottom center", // 触发器结束位置
      scrub: true // 是否随着滚动缓动
    }
  });
  ScrollTrigger.create({
    end: () => `+=${window.innerHeight * 2}`,
    onUpdate: ({ getVelocity }) => {
      const yPercent = clamper(getVelocity() / 50);
      if (Math.abs(yPercent) > Math.abs(proxy.yPercent)) {
        proxy.yPercent = yPercent;
        gsap.to(proxy, {
          duration: 1,
          ease: 'power3',
          onUpdate: () => { yPercentSetter(proxy.yPercent); },
          overwrite: true, 
          yPercent: 0,
        });
      }
    },
    pin: true,
    trigger: '#wrapper',
  })
})


</script>

<template>
  <Curtains id="CurtainsCanvas" :params="curtainsParams">
    <SimplePlane />
  </Curtains>  
  <div class="w-full h-screen bg-yellow-300">
    <div class="w-full h-screen bg-gray-500 flex justify-center items-center">
      <div id="wrapper">
        <div id="text-container">
          <p class="text" id="text-base">Get to know us</p>
          <p class="text" id="text-secondary">Get to know us</p>
        </div>
      </div>
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
      <div class="w-20 h-20 bg-green-500 block" ref="box">test</div>
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
  </div>
</template>


<style>
a {
  color: currentColor;
}

body {
  background: #0F0F0F;
  margin: 0;
}

#credit {
  bottom: 1rem;
  color: gray;
  position: absolute;
  left: 1rem;
}

#text-base {
  color: #2E352A;
}

#text-container {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

#text-secondary {
  color: #758C69;
  position: absolute;
  top: 0;
}

#wrapper {
  height: 100vh;
  position: relative;
}

.text {
  font-size: 2rem;
  font-weight: 700;
}
</style>