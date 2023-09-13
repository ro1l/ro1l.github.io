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
      start: "10% left", // 触发器起始位置
      end: "start right", // 触发器结束位置
      scrub: true // 是否随着滚动缓动
    }
  });
});
</script>

<template>
  <section id="about" class="w-100 h-screen
    flex justify-center items-center">
    <div class="flex">
      <div class="w-6/12
        flex flex-col">
        <p class="mb-10 text-lg leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur totam saepe adipisci ex expedita at laudantium perspiciatis, ipsum ad tempora amet rem quo iure a ratione accusamus sit perferendis?</p>
        <p class="mb-10 text-lg leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur totam saepe adipisci ex expedita at laudantium perspiciatis, ipsum ad tempora amet rem quo iure a ratione accusamus sit perferendis?</p>
        <p class="mb-10 text-lg leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi consequuntur totam saepe adipisci ex expedita at laudantium perspiciatis, ipsum ad tempora amet rem quo iure a ratione accusamus sit perferendis?</p>
      </div>

      <div class="w-6/12 h-100">
        <div class="flex justify-center items-center">
          <img class="object-cover h-56 w-4/12" src="../assets/media/personal-photos2.jpg" alt="">
        </div>
      </div>
    </div>
  </section>
  <div class="w-10 h-10 bg-green-500" ref="box"></div>

</template>