<script setup>
// import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function getPortfolio(id) {
    router.push(`${id}`);
  }

</script>

<template>
  <section id="portfolios" class="w-100 py-72">
    <div class="columns-1 w-3/12 m-auto">
      <img src="../assets/media/personal_photos.jpg" class=" h-72 object-cover mb-10" alt=""
        @click.prevent="getPortfolio(123)">
      <img src="../assets/media/personal_photos.jpg" class=" h-72 object-cover mb-10" alt="">
    </div>
  </section>
</template>