<script setup>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ref, onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

const box = ref(null);
const photo = ref(null);

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: box.value,
      start: "bottom 71%",
      end: "+=790",
      scrub: true, 
      // markers: true,
      pin: true,
    }
  })
  tl.to(box.value , { yPercent: 0, duration: 1 })
  tl.to(box.value, { yPercent: -10, duration: 3 }) 
  tl.to(box.value, { yPercent: 10, duration: 3 }) 
  tl.to(box.value, { yPercent: -10, duration: 3 }) 
  tl.to(box.value, { yPercent: 10, duration: 3 }) 
  tl.to(box.value, { yPercent: -10, duration: 3 }) 
  tl.to(box.value, { yPercent: 10, duration: 3 }) 
  tl.to(box.value, { yPercent: -10, duration: 3 }) 
  tl.to(box.value, { yPercent: 10, duration: 3 }) 
  tl.to(box.value, { yPercent: -10, duration: 3 }) 
  tl.to(box.value, { yPercent: 10, duration: 3 }) 
  tl.to(box.value, { yPercent: -10, duration: 3 }) 
  tl.to(box.value, { yPercent: 10, duration: 3 }) 
});
</script>

<template>
  <section id="about" class="w-100 pt-60 pb-48 relative
    flex justify-center items-center">
    <div class="flex flex-col-reverse
      lg:flex-row"
      ref="about">
      <div class="
        flex flex-col
        lg:w-6/12">
        <p class="text-lg mb-8 leading-relaxed
          lg:text-base lg:leading-loose">
          你好，我是蔡潔儀，高中就讀商業資訊科，熟練多項資訊相關技能，高中時取得乙級電腦軟體應用及TQC等相關證照。但是在高中畢業之際時，我對未來感到迷惘。於是大學就讀國際貿易科，在就讀的同時，剛好有機會能在貿易公司工作。因為高中所學的技能都能應用在工作，並且對工作很拿手。所以在畢業後也持續在貿易公司工作，做了約六年的時間，並在這段期間積累了豐富的經驗。
        </p>
        <p class="text-lg mb-8 leading-relaxed
          lg:text-base lg:leading-loose">
          儘管工作順利，但是總覺得這個工作不是自己所追求的，於是開始思考自己最想要做什麼。在這個探索的過程中，想起自己對網頁設計有濃厚的興趣，這個興趣源於國小六年級。當時無名小站非常流行，因為喜歡帶有個人風格的版面，便開始自學了CSS，並製作出自己的CSS網頁。但是隨著時間推移，無名小站的消失，也逐漸忘記這段經歷，直到最近才重新回憶起來。
        </p>
        <p class="text-lg mb-8 leading-relaxed
          lg:text-base lg:leading-loose">
          有了這個明確的目標，我開始了學習之路。自學了CSS和HTML等等前端技術，並參加了Vue的課程。由於對UI/UX也有興趣，也學習了Figma。在最近的幾個月裡，利用待業的時間製作了Rolling電商網站，並製作了個人網站。於是有了版面設計、切版以及資料串接等經驗。未來，我將繼續學習不同的工具和技能，以提高工作效率，並為自己賦予更多的專業價值。
        </p>
      </div>

      <div class="h-100 mb-10
        lg:w-6/12">
        <div class="flex justify-center items-center">
          <img class="object-cover h-56 w-full mb-8
            lg:w-4/12" src="../assets/media/personal-photos2.jpg" alt="me"
            ref="photo">
        </div>
      </div>
    </div>
    <div class="text-6xl hidden
      absolute top-5 -left-56 z-50
      lg:inline-block" ref="box">me</div>
  </section>
</template>