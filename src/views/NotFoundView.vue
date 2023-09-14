<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const countdown = ref(8);
const timer = ref(null);

function startCountdown(){
  timer.value = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
    } else {
      clearInterval(timer.value);
      router.push('/');
    }
  }, 1000);
}

onMounted(() => {
  startCountdown();
})

onBeforeUnmount(() => {
  clearInterval(timer.value);
})

</script>

<template>
  <div class="w-full h-screen px-5
    flex justify-center items-center
    ">
    <div class="flex flex-col justify-center items-center">
      <p class="text-[10rem] font-Melodrama
        lg:text-[30rem] lg:leading-[36rem]">404</p>
      <p class="text-center">Sorry, this page has disappeared and will redirect to the home page in {{ countdown }} seconds.</p>
    </div>
  </div>
</template>