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
        "https://lh3.googleusercontent.com/pw/AIL4fc-y-GN1ym8n3Im8-x-s7kSqQL2_FWgrvrBWBZLtSzDueZuhnVVsQNTfC44P5zG3WMvBz70AZRZ_DR6mAf3O22US2rWa4OjyivwxlW9PSupPQWnisQaZoYXjAO-hNCPkoqL5vr09yofzn-v7ORLeS0w=w2164-h1514-s-no?authuser=5", // 專案主圖
      imgSub:
        "https://lh3.googleusercontent.com/pw/AIL4fc-gqWWLu1x18eIApWf2vPYH2lgdKSlgwa6LGeKSqw0MzVXfNe97cUqW___qZfvFY_BKkxGfNGIa8zJbKYlF-Q7gkMsQWVTeC4-IbSlYYA6K9WretjGyfpaguRh1EsLuTKDz0ZuqZjKPgVSTgWssyn4=w1416-h1514-s-no?authuser=5", // 專案次圖
      imgOther: [
        "https://lh3.googleusercontent.com/pw/AIL4fc_wImcoYN-Nzdin63-ASlGJDdRuwOvpYg9bb9rdnxsDMzrX32F6diODzVCvAwVrwLcjOlnZGoM-qPrMlu1aHu8cexKS8jkowhApAWHrrIO7wu4tAoc42KC0o9Q2aHPZnsUtLNoW814RBvZyixq2iwQ=w1416-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc-KiOARErh-auA1AjXuf__IWL-AK97o-N3j29HDzW61eBiURLg-bx6aPVmThMcs5b0X9JKCX--UMKZJ2FTMMuLyLa5UauObcZW8H2ndeG_yPUUb1ajE6qGQRtB3Y95FPKsAcZ2jV8vRLtBctloJm1s=w2574-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc9BeCKAKDgUWRNb4MhI9KnyGTi0I93CnKNVoX0x96-piv_FW7-QGAf_K3GSCx0IOBtu1exsdelYe3-5Wjvze-mk1Krfzkkg3FfLqWsw-nszSoLnG1FU3Rj5YbcJvh0tAxDn1A3G8qdqEm8qBVAvAyw=w2574-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc-D3n59tZYIezWu-J1nkfmxG1-KsjzF3R5gp924TgN2F-t98Kfxv4bnDgB4XMjzhVa7DbdzsnbiL4zcnqG0IJZ0VftxUyd424lpXNMO_WSQBycmL7srjV2EjlpvHalx8RW4Fv5pYjEVq68sM4ABR2E=w2574-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc-5aHtCj8CvW1GOEsSNhFJbTrM3d3sEMS3ELIeui2GuBXq2tkfE2KPple57svBIKJ7PKq-o46IPccQYzQv86VJp3Og9jZp7afucEiIKLJSqz4i8Y9tHPX_HT6FDiwKhi2l5nMfaZvfsPB-r21NYNxg=w1260-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc8Wgn8ohVLq0FYENxvcOSZxOyI0hMlV1Avgb2GUgnHZN0IFFuOcT1qhZefwBlGIlAESk8U-3eRDWKOYsea7xyC7gCyesBs_Hc_3cAGRQaOvsGDHOUD-VfuP1QPpcVCKorlgO3_6cykmykvBAK1tGqE=w2574-h1514-s-no?authuser=5",
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
      imgMain:
        "https://lh3.googleusercontent.com/pw/AIL4fc_uYoYxOtcd2qJOIUv4VubYQ0zYsYrExp0ihCOXY5mOvsFL1IRT8byaYIVhHtckSZmBoBRBmPBI4jwjcJD3h-WgAOBnZSWSCSPuaf7xloGH1StTYjt4uDDlIn6F7_6fXbv7wJl8CRVm8e0d9lEqygc=w2272-h1514-s-no?authuser=5", // 專案主圖
      imgSub:
        "https://lh3.googleusercontent.com/pw/AIL4fc_jFnM2H1ay1l6NNBHhU_up7ox_X_O2oHsEVnmkIoWenGO36P63_et3sh29DnJ3kEtnbC5ZLqHwfE7tsKI67MdVJs4I-2-efbDeEmrL_bqr8JiKUOq5UBk4WnlUyfK20f2O4HtF-E3kqxSWd2kkJBI=w2272-h1514-s-no?authuser=5", // 專案次圖
      imgOther: [
        "https://lh3.googleusercontent.com/pw/AIL4fc_twsjilXyOZCGWbkClieGGu7xaJJvadtIZBzWzDcHefiAQtwkCrlVobgQxKkU5Sm__FSQ5Xex9DRVtlh-m_0tB4nqa7obuqDkA4iDX7ucTutyuPaofaOXHrcUW420WY8nE3LPehkpYHxdiInXALEo=w2048-h1174-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc9hocbZA58gOd0zXI45JDPGVCxSg_8ljtugI3QyQGGA23DDXckTcpT2lyXAy3xQO7_O30krkeYSKUQr58QrJMP91QlPFMh_BRajhbxQqOVt8IobWTFD9T8MS1lr97xhs7kbDA-stO1sYSmZpDxz_Rg=w2048-h1174-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc-4PNoGMdcNHqPNMHWVBeazJIuPWST_9YTEKjZrdJwuZs545TfSOX2r89L0fbt6tEBQohB9Zx1w5ia5hriwx2YKVbY6TECrnj9K0WUIj1Ih4aNg2dMZMj_rZ6L5SvguYmYp3_gEjmtk6AvW4Ob1S5I=w2048-h1174-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc8zJRA1cx--vKHj-FK1OHvuqNaWh9e7TJvSng9PrcJGNeg2n3uaE_mUscjlGrcb8B7XBJXuHVlBmTYaBOE_VI4NyeO-NSQk8yeMaqDRBt4SjnSY6K9Sqk5SaU_Dg77Nu6rpnIpaGiKCtpeGNUrOKpI=w2048-h1174-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc9tNjvAtRNA4F1TYPXCwWVmVNJRChP3g4FLOdrnnsJMiU2BQsqvuepYpyp4ij4vvG7PTancEBysBy4RZoq7ZnGD_J54a5uq6LddhF-Y_s6xqWKhIJLBirmuj_KAYmQDhIjt_RO_eNQ9cxD5auhc0hU=w2048-h1174-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc-i5W6eGwCNrFS3kiOwA3abqJacOou6fa1eX3FCp28pCTyMMQgwjRvN60W6FP6oh-joEBQvZDs3l080x6OHzLW_mbkwqM0iLrbn_Ai_1pXzJ8hFUuW3GZhWWpl_vDqjbfSWaXQJxhe0wXBGtDQ3d2k=w2048-h1174-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc8fpZthWKsYIAD5gsRD-4EAZRVb9gSC95LyyCoXAri9F1aOkFf58_9rSSv-XjB-9WGtBDPal0iIBpzLs60qEBct96YozO_tV5arGl0vybZYvvRoVNpBfj0utExcRnyO1qOLz7QrxBDuxG_yEJnt0Qw=w2048-h1001-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc86S479umRKwmy7b6wKMqVSKoWzuytzwwUpK6IrRlwdNGcWOhAyamf57pjuMSaF1holZLJ5Phy54xaSwqyFJjEC2Dc--oX8TOsFRLZtEcXcPZItEyutSAzvzajDgCAHJojKoXdAV4pOdAraah2v7S8=w2048-h999-s-no?authuser=5",
      ], // 專案其他圖片
    },
  ]);

  return { count, doubleCount, increment, portfolios };
})
