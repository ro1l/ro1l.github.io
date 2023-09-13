import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('data', () => {
  const count = ref(1000)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const portfolios = reactive([
    {
      name: "Rolling", // 專案名稱
      skills: [
        "HTML",
        "CSS",
        " JavaScript",
        "Vue.js",
        "Vue Cli",
        "Vue Router",
        "Eslint Airbnb",
        "Figma",
        "SCSS",
        "後台Bootstrap5",
        "前台手刻SCSS",
      ], // 專案技能
      tools: ["axios", "VeeValidate", "Mitt", "pinia", "TinyMCE"], // 專案使用工具
      link: [
        // 專案連結
        {
          title: "Github",
          link: "https://github.com/ro1l/rolling",
        },
        {
          title: "Figma",
          link: "https://www.figma.com/file/6CpszC7hWlZ1dzJpydwJYr/Rolling?type=design&node-id=0%3A1&mode=design&t=nIXK0V4wXX8D93wN-1",
        },
        {
          title: "Demo",
          link: "https://ro1l.github.io/rolling/#/",
        },
      ],
      info: "使用Vue 3 CLI開發的響應式 (RWD) 以及單頁應用程式 (SPA) 重機動態網站", // 專案簡介
      idea: "設計理念融合了質感和高度的功能性，以打造一個專為重機愛好者而設的網站。在網站的視覺設計和使用者體驗上，避免過度的視覺干擾，並注重清晰的資訊架構，使用者能夠輕鬆地找到所需的資訊，享受簡約而高級的網站體驗。", // 設計理念
      imgMain:
        "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU", // 專案主圖
      imgSub: "../assets/media/personal-photos2.jpg", // 專案次圖
      imgOther: [
        "../assets/media/personal-photos2.jpg",
        "../assets/media/rolling-main.jpg",
      ], // 專案其他圖片
    },
    {
      name: "台北捷運APP優化", // 專案名稱
      skills: ["figma"], // 專案技能
      tools: ["figma"], // 專案使用工具
      link: [
        // 專案連結
        {
          title: "Figma",
          link: "https://www.figma.com/file/AQKpU00M5yknP8NAX1IrfP/%E5%8F%B0%E5%8C%97%E6%8D%B7%E9%81%8BAPP%E5%84%AA%E5%8C%96?type=design&node-id=0%3A1&mode=design&t=kUxZeePrdtkoRf8Q-1",
        },
        {
          title: "Prototype",
          link: "https://www.figma.com/proto/AQKpU00M5yknP8NAX1IrfP/%E5%8F%B0%E5%8C%97%E6%8D%B7%E9%81%8BAPP%E5%84%AA%E5%8C%96?type=design&node-id=1605-23267&t=gFcxyA5TIy0SNqa8-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1605%3A23267",
        },
      ],
      info: "台北捷運APP優化專案旨在提升用戶體驗（UI/UX），使APP介面更簡潔清楚、易於導航，從而增強用戶對捷運系統的使用滿意度。該專案專注於重新設計和改進現有的台北捷運APP，以滿足現代用戶的需求，提供更便捷、流暢和吸引人的用戶界面。", // 專案簡介
      idea: "以簡約設計原則為核心，從使用者的角度出發，精心規劃並建立流程。我們同時參考了台北捷運GO的評論，以不斷改進，最大化使用實用性，讓使用者在APP操作時能夠毫不費力。這個專案的概要是專注於創造出最優質的使用者體驗，以確保使用者能夠無需費心地輕鬆使用。", // 設計理念
      imgMain: "/src/assets/media/rolling-main.jpg", // 專案主圖
      imgSub: "./src/assets/media/rolling-main.jpg", // 專案次圖
      imgOther: [
        "/media/rolling-main.jpg",
        "./media/assets/media/rolling-main.jpg",
      ], // 專案其他圖片
    },
  ]);

  return { count, doubleCount, increment, portfolios };
})
