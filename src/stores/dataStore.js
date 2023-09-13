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
        "https://lh3.googleusercontent.com/pw/AIL4fc-hg8K_rcVx-RaHNYPF3lWW8Ym8UANDhW0NALzB_sZAYDYED47g-rDV4DubtP265HTpWjRWlygtS5U-JNRbjZYQ3Be3XKWm5JBV4l13avxa3YNIe9WVK4Q_yoHWZXJMaMA6c21o9Gu_BJRzZNnzZUzoLqF1eJZLhiDmYDKG4ToAvPf-d_sGe8MnhcM5W4bUFU2cCkmJqMm-9r2cIivhcskixJpLZ4ymlAOJDIqV4ApVZW4HTpnwRZnKCVoDaRP22rOamNIjCeoj-ZnW9rybxqltfivetXeodfZU6vvqLXTt_lKScItJir4CFycRRq40wfmrC53qoEHyq87XdFhR5oo2bFKB0z44snG-SMi5hgp2ZTXOY0hary7w2tkTc3vFtGvFBxRSDxi3hYjTJz6TvoOAqysOAsuONvqc20JCqbjOvKz3Bg248dfATVZlblSwo12LoCI8ckWE79UiDP8CtOjn0YnOHwC61vlvcdSvlK5DXnEQzWuNHfqSunP5EHx7PfTkHdnP8wFX8fCdIii0VF8Wtr1mi80Kevvc4yN2_dZkq3QgfTCS6qK5fNH-DulQDfvoPXjJw_ynj1cr0GPOTnyB0ccS2fsrr1lyPEfUcNfAZvH__23XlZlWYj7KytVFfzps6xYuQtDzsM891aFgM8sTcLOgadu-II0_M2Rrv0e5jjRIQPnpTm6JWKoeCCHLlrcwrwYJhbKOpEtZQNEmcPasL2SM3SK3fo3Q3H8Xs2NzOb74syHI6ZD9kz8zr75X_evLuh45zLVEZTwXwTucyJ5dU8cJgt-UdwBwvqepJyJV0TclmU3siD5HG1NorfdCiw82EYCbci-5lTitasgEFGKarmia2EGwXr7wqnuctqMUoyr7qe7dHKhjqVrDw16l0f3CfUAMrhJu5hKpypeQXpyffXkiNEuf4IhOiH7BvDP_iGxvh24MewXGLHnLKEdkJTVgNamZcsmm6Fjbp38GtEfLXfajBrq__sa4_AitOS1AMPXKvMt3qBSVf9TNKoA3otL1JavAGSlJS9_P1jpTN2bkSztuZoyCMcSGC2m2YhRUUiw1IXTpjWvjKiMc6-54vYcCwt8JveA=w2164-h1514-s-no?authuser=5", // 專案主圖
      imgSub:
        "https://lh3.googleusercontent.com/pw/AIL4fc_yweyv-SYwhp_xSCcIineKaWSsubvo74Smy68jSM27uPuJK8NycsqjKTA5FfM7yO7DSNsmP9rKx9k-GxybMXsVOp7rjRa86SmZTkO-KDJHYl-v4S8_9Y203vCacgIqBy52PYTRdKbQZUjqSmhGGHW40idZGc2dRSa2n0blqQnnbq2a1RRuvJpZTTfFTZHPh4Y8SBmV8VZWwJ1RvAu7HwKQ6oHCJqSrrht6wt_B0UR3w_5ZrwEUvxlvk5SVBD0JnPffjAUzyExb5BrAdmNCo8omT3HnfCj3cZX5yP7-DVOiQJrdYSYxA7ZO-L-sBgCwESAOdfkXF5a8MnVfLwHnz6lknhSeaNTk0rORCNxO6rXQK4b0WDbmyxQaSKfyaMF95TNSw63DO35ppq_vurI58_kMtxQ5yTEyqWKx7L_8MnDUYUanQso7VlJwxDWCKk_Evo1pvmrX8CfO5vVPdFzXpsSF_7eVn0ReAHPWr7YO6PddFBbaGli3neBRoFJuqVcC3UXULMHkNEukBgk4ZpWcA73nGGHgWTwXRDyZoJk52fjAROyEF2zk9J43l0hqMyu3IM23yEkXQBzlpQBcivdYzQg5hZmgafmONl8wJI-toJbdEXB3dn6SFGfa7-4TQSRdsEBkDNjP1-krVBdqCF6P9WID81qD4XY2bdrY6ThW8cFOb5p7bNyEjcjj7ZccxkAf86UTPFWcuLdvH4S-6h75pw_6Yko3MEIJzSR2FyNaLAlP9zxSOPrBn9oASFBBnts08VhZ9PxtgfD_X6P3UpvennJAlTMHgnsRL06GwFPNsacuOwOcA9h34vmLMcNbW4GZqd12jvRMMpJ0BfovLqhNJ25izUc1j4TAwpgkviwNzRWmBR05P3b4bV_zcQ5CHs8cMOawSXkiaRKo5eLEhQ6u4taoGxAhpvy3gnFxND4BJBiOQj5d8Kv0ENcwcDS5UGeaPLAFRRWV-Pli2NVJa07UDgORPkw9wLOsNiSZ26yG3s-BwmqlgW-8SptMKnOCvIJ1MOEOLecM080wjbtIanDLMZOYpFr45bFK_sv5W6Az5QKkgfXtaudMonln-xB8RC1L7wQxR8gFaUg=w1416-h1514-s-no?authuser=5", // 專案次圖
      imgOther: [
        "https://lh3.googleusercontent.com/pw/AIL4fc_QMDUHa_fP0J6I_SlqQe-SGzT5ZDpRTZ8vOeK8E73REYYhVazBpQMgpaGRVZob7pHycAgogAICOwI1xv0VQYobxliI4i6gBJVt9gY4LtmcJK17yKS9Q0Rre6I_wgPkTPbSlK8v_H39dyTGZwak01IIou-5t6BxzBAnfeLnzxcxAth8lh1ZBmyjTod29hzMymXMU_KmSTWOVmcEo50lPqPIjqEIuGemQAFUVPlpCyaw49b3rpVV8bSlh172iMv_xbfm925JHxXsj9yVSZIOja3nQBhjYvYWrivt12XCdMd31u5ai-qF7CIDCKWliq78CjHzRHxqZLE9AHnS2Z6Jyh9Ft_RcbPYktGpPnUqQdt5Dq1pFlbINS4eqw9Y-DyRw7uZ9jjf9xhZW7Fojqf32XL_BU1cocm8s0EOaaoc7FU6sAweIe7QdTsSJAx1J-gCE6-LSprl9ty3PO4zkrJXlnPA9WEnKzON-fSR32Y9bjKPAf0IwBbfQKgw35vYIGpunIW0UOtiuNb6QVCS8aiYjcCtuuF9zRSiiRqrY-qqeAbMYYLBS1AIUSPc1vuKcJ1kjZ4S6J0bm7FDlVkY03WDTJZYFAgcUO44cEhunaKejOfy51JL32df077POX8JsUvxViwCBLniDVO2rBthMq3PrT0bz97qxMNZ7254hqO3-184ZNXfrRJf-YVkeGhAUnvGG_rIigDd0RHdP30J4qPFnbRRAIq4sLoutNqOLVayx923mzIum_WAcJs67_K_8_CrlWt2FH6tfo3aqRz09WEeAzzzs61vTguVgGSaQx2ZSKLZlapRMtSBKcyqUpvoMBTFtmACDt2omKgWiPjVESFetPERW1L4bpzyGAbiJqPeSOr0OS1LrBTdunfZSYIhoXX1rsWMBnS-KOEUzDqnuNiKhLY2__RoSseanRSM6IDbQG6MN64lXKvloejLBAgnJdaxz_-0wzFs0KjZsFAUHl21BERFHaTGXlJSGTR9uRqBU4ktrcPhqMIrPjoRv5NABn5sVQqgt8QRCtepKNTZFaRKYHluenUllcvzABKJ86eDuRMuB0_0cLuclB_YrR1qmWzGtQ-M0xd61Yjg=w1416-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc9T40woWN9ADGji8h5p-FwmG0dcau7zJgjXIkLpiLOmjiEUEJpyWXW8KnXDX6GqkooFtesTtT03j1QCZwZzNjjTQ4W6FDmy7EOzIKWq0uL3Y_lhfyQN3UOzITwSz0wRP8B61z8LcMqeNXP_ZUascyD87hKfPt-9ODDgQsKpGPKzCz-AePAgrinOMeHVgjEYHUXONULc_x4UpGAderHgOcqyCcOFZ5WjbcXelmiDUddbyKbCLbxH45bTaTubHCGo89OgkIx8WOT3CSrtOE-fT4Ux6ZQoJs-8miP3LefOcYYSB4sAJnn2LTDHyxuxanVX0pB1PkqAKHJU7Io1kylHF9nI9_2a4y-XE0enJSx1a3NIoJtnSusllNvjaYba30TdiPH5be3v2eeMquE-C3GTVi4DNpDWG65DXzRxgh8s5wdbbMTKc3LC2KwygnTW71L6dY1p3x9HSyOOO2jdaFehdd6QdHFBPzdyaA-8vCx4JjY6tEthpMQbqEiiz3nEnxxhjQO1WVFD_dljvrCjPxkcSAp-LCHklmfA-BpjM62MUXQ8bVjBRNxhgFpBzZE-kbLkcyFpzAZysij77pryNc5PcmLDssUxo4YUAXKH9dqHiX02bV5wkw32qGrnTGgXzSxuwAkgN8TzAHfwZWZBCmVoZM8KnNd_fU3MPMRGrR1SD1sQCvqJFngsBtGjJ8U4u-Y88haKV-HHW6KTwDkI-fUuRrQto_hhzoq2A-1nJIj_Pn5d8ek7FWAqJuGFJCTPaCiSUKew-YuSaxfvn7JuVdpwzFXt874O-gajIHvgX0hLxNj6RAGzY-eIJ-oCMK_2U5GTyxkVUMH3yblrUrlu8QSoRiFplWbFtuloLQrDernB0SykgJx8E9FqwSx9NFYeyiBfzqFFzQ7FrvpaxEMmG1zixQAsHt9ZKMzCqBdNznfqovQ4SMHLEZ4sIc78DvCBQh-3aI3gUh22SY7eS6s35fFw9NsIGYaVb7ZL04FxxZu1NbFAbsWpm76sP-cJcVzq1Df9iUmkZjZiCNxqpgN7bSq3HKQJIDIwjcw7RpGKyPB_4yKXjjj0xm_xJqzddH8Qukh9aALhurRcwTc=w2574-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc8yOhNm5UtGs1e2Fj20hnbb15KHEUqPnl5Oes84rwjbPuhs2ypLrVH-k1ViG7MWzn-rDb1Qy707XkhlR44PMmA22mMF1Atx36MLgUyFOov1aU0zm0EAkVD97Pa4IXK6oc34rk2vsAdWNLu0N86kzU5E67SfsP6QbOpKI0762saUaqT8E-pP2LRC331Rw14sUgaY9-6WTYYMmX0o1WoZky03MEAF6HO1KkhikX71O0DOXa3mYzYsufZiRV86PP9TqRPioN6T3vACutPR--r_GH5Am0UltFIyIPjMaO_haQr3kJQ70EcBSAoVIJ0aEu9nmJ_Uv3U73_JrQakLmGqVRMsGBsK-FpBrO-_-F1vkpkwAnvn3ek1P4fMGyvtX1Tothe4M5JPd891srZa-aqKYibMFaz2YpgX92qmr3266SX78gPUkUxHOfkaXFb7f_pUIefi9-DnJ0Jd9w2J70rWTdnzHMwWbPe2luKzAgXgvH1E1fTP58oDNlkc2mcgekJYaRUdrledFR90LgIrynImnz1FgQvC44BDbePx6mLBNhk1seqr6hu3fESFZyHrGZC0I8I6rW_SnjUfOww1rB7TwwOHEiHvxaUseUy2o_J2PwJYN64le73lw1Opuexlvl07kHAY4p5XvP00oC7mDK6xPmCBwrfl8w3Xi3gAQ0xbd6GeQsiyC1wPYXWJOLE3-TZV58PaVP-Mq0904M4avvM9QJYh9lkgTUYlM1hlUk84y8ifH5iCDzJTiWS19kS_E1OFVRVIwSP6vFjFq467JptiKBR6yKy5rd2I8NCsfROXJwBtlS9X68SJzsQYVpyrdVc1DiIz9bBWoHFXWjeSDi5z8qRLfbrGmrZMxRS_OX7-1ChKabXZooiN1QHHyoew-eoqQsPfPwHot3qs_O961icby5PXQj4YwZv1mfzMlIR6BcZmJIjZHKy3kKZAZ17rH6g_o1wCwgW31kUlfR7kXtPlmU25Ui5e9UU4TTOgmZQG4hppy87GPjoX46Oa-Hf9iithtrsQHk0MOKFKAvfavImuBUTnKCcJO2op148OwCL4EjsWFDeG1fgCwxvlDdT4cmIG0R6irOg-PVn4=w2574-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc90uJnGBAjyYrlexupvNVhd2Ab4As3_V9HvrrhE0SgZ0n8-HiB1_H3VAjM2nyDraoDj9zIw3UlZa1sZL7_ZQh6IA2FbeJ-h9zXNx_4LJOUM41GbKEi9b4Bj21JWd6_VtkuIEJ6v1p3Yu4p7PYj0nt0rDKXeQ1G5Q7NOcB2cJZ-KCbrFy-UOtznSrwi1M1tHipNcaa2J6BEmjFUNAQ4dKeyY5tQlWJ8bXpkhEtKV1PxUYKnryFXpiEWYlARLDfUuvflR_cwJIzoMf11gNSXAjD9nCr0ruV5LGo92rImg0RRgbSL-6YvGopvDxHK12bIgtaDY_K6Qx4b89uhNa64m2xio-db9UePgx9ArKSVObpm0ih2JzViZIbsAmew1mDgrLd4ulKKKdt4EcQb5bKi9lFRyM06BszKrKeIl6w6dIXdjNlylOPBowlr34xQqPyrplLN_JbnbVSSz4gjN-2f7O3qGIwy4wQx8lKOtNmxvf-izoI0jrSGvwNMSLKPh1WGwXWeuOq1UKKc4aPbKh9EpONVVIXENo4yE3XAYOteoFP1-A-m6SQ3kLlMc0eKMJb7hYnEtWN4gTEsPhIJ1GADTH_7pTaE4oez7gTUTeDlMVVQhlQNgHXYUUhwJpKFfpWOAoQmt6jNNVRfVIAn4WGbgwWLEy7RQHdd07_mrze99h4WWcAa6jkgnXpUo78JPWxvPdvkB6AleKQ-b2SLHyxIQUZu2aw--RjYRh5tP52ULdYa_NoMVlnp2lt0_E6nZkl7Wl4NIWUU3-o33kis7Dq5HInwlyuEy1caI-swC-Dsae1GdEBZAqiTAOrZY8WJq1mDRoq1pPd5VZJmwSYt1sEvrstfpVXuJwYZ6Q7rD7fSLsFt70cWbSw3iXldqt9IFvzzUy7JEX39Wmtw2Ljsi_cniuGjBOLDA0gVdiMIJCqiqVXszRoRSL6zMf_0sKqGm274JNw2QFKmhjMvFe01KlXHXpjw7vEuEoZm-o6umevs37HCh7an3-vVDCFuxp5236wrv3ydtfsCRrvoTDcqVAdVLgYC2IZGsX_RLmEZ1dnCxjDzTi9hHdei5avEuzCkqjmSYfEImuN2SOeY=w2574-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc9dApxkeiRQQjJbqwn5WdxuuGfcrqRvhpkITFtjMkCR-DJ7mlAu7AODx9SNA8twE8wn-iAdTtlTg7cE8aFbbpoa7ds7LJKuUcFdEpHBF2Vnlwx67dzkgsOrG3KX83qrJDdXfYrU2mMpfAxSVHCXfl3ob65kAw7-VgAYrjOApH3nGzDtroT8_uxUUxEVVoRd0qX9gZlsVp_WO60qe8it8p1Nr1HyzsJa7WIoRfNOaUWt-E9ekl9T2YKiZpRwAsxnVOxaxXwd12B-lbKYveff03Ee7Z2BG_FWLKPI_PoGl1uF9RIBwFFkjC10eGkbXe3MHtGzFuyial7lyx-sjIjkLWgynhjdXSOCCc360CArKybR9Ly5eF3BhUupxmvsaIRxasVYI-R_6CI0_7mpzIg9uvnnCOWjsWx-srOKI6WEzuAIhIApKKlSeYY7HUgmbflMxU9-C9R5aQrLieMUCWWI1wIIOB0TdSLC9MEa-LlO1V6q9MhVE-WsBGEnCDbhYHfjJpdd6MbygDHC09ZuOkhh-ZEJuFxoh9Arg_GWpRq8ifyW34C7z0dJ8mO3d2-4cNa4K9QXyn7bigM5oeYmSXvtS47PtKA57e8af1nySGkpQhntc0WwcVgbhLy1Wbiyn2R9yr8UnOWzxCyKR-oEPkuFtg2oE9PiaA_7AxN37_VxuYH9GOmB_px0WLWxpsi7IiJyZLmLEnXeA1i8ALmV52-N7hevbfymo6vumf9SC8eOUPxmOCFUqkYmRd1WWCIhMPKpXqPYmSj2cHfl2OeVTXYwrtfxSoVG_Xh48Ny9GQ7YspS1TsHXpRa_cUdzf-XKUmfbZsT7wgAcwbKXTOWuGvHv3yQakIXgSecpEKNCyHntwNFT5dTDS4TcTh7vGW3hznkV1D2zh2y6OBdlNLjdxl8VZd8PdFxhKdGE-jgtPrc0KlqmtSiqddlLeCkMgHmOQhkpjJikOKmtEftHFoONQ598DwDix5shoz2qLVklvwSxWgwRxQWRbG7K56Oo9oN5Gavz97UgjkVyybw8gRIbxEdBVu7lkG10cRtkxJGwXC_lMRT-qV5cKS1uEXvG7VDrnZG2vHL6zDiHioY=w1260-h1514-s-no?authuser=5",
        "https://lh3.googleusercontent.com/pw/AIL4fc-ZGk9ww-z9oz02Di7z0copmnyiNWCRjRPKuDA8-y6mdEZQdZsJiqHq22vCjKM0-806OEmz4SN20Tp7Zx4kl_MwJZm1E930ifngdbDMyBX18idYuc49pgrJyCOiMNOafsbepYwlfhsw2-bnQl_qnP4-rPKl3AF1bH3LRwVRtImttZGBUEDbJnzI9l3wOnh-9X30okydVvJpyt4_w0Py0WoQpkT44oagkrBEHoK7yhGlshPvPG3a43s5AAnnvCywOhsEDqP2nCFBUKeLSuwiDESlzTGBRfQMHOfP55AoeF229oPneuVZnPQatoGNv3tWcu9mVj86j-cOFocUKhJ7vpO3fPYDqybNzQ1HvTycWpPV3Y7XtyfBfveskh1F336NwJpsTlXuBbuvE-j_wMt1I3ksRfFfaKEoMoHV_Apa8cAd-HcE8KUfp5HqoFCcvDNvmZWl38GGLMhkX06gWMkDY_UNThZEBf_DyOK026n6kJLSi2oxE_RUWwBXxu7oKS2TETTLwRmzvbkMXSqI7E8olyX8wQWUhE8alhijpDjgxtP7qeeo8Bz90AJhGP9KM6BuTYm8b_D0jIEuZ2N74wJZeYNFcrKAf_sLKJ_Jfmr1ff18IhQG4VSOAFaa-vLDJnXaEZQOzxbHooLL768-GCsCXRqTfx6FB-rjGgs1el--tRw7LBLqraraw4cSFhkhbJMs9B2rXTAqGWFx2Wp-qmFn_AQBchSiB57RrLwJxEKMGgtv3FGvv8zIKJmqnP8pc6g0pfPTldSBjGBMshFdijJUZxcBLnbQZm9A_YmRvq7PcGj9WOr9i3bVw6KVkJ8VfAUndZzpBIHgxLDD7Jyu_J-i8MRP2AOEL0Lo0UrgCXq1PcTdaqCQqIMJT4PCqEPGZlj2oZ-DQ_kJzj_G_GmmkOplFuGQkr6yMnOe44JSvVmp-t4BldmG_peaq6TjTQfaF4f60k0zU3GQTuXdKr3HBDwgiLCjJWmE4iuQtarg-8tWgc0qysUmf0n2mlJd0CM2KYCKAOlVUJebbai4oYnl0x1U5gma38NT_rTWNUzWEITqBSNUKgKVxq3sfUekXbB1TwxfoZvphKwm67Q=w2574-h1514-s-no?authuser=5",
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
