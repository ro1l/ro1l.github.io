<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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
</script>

<template>
  <div class="w-full h-screen bg-yellow-300">
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
      <div class="w-20 h-20 bg-green-500 block" ref="box">test</div>
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
    </div>
  </div>
</template>
