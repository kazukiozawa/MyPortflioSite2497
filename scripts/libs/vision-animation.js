// // const DOM = [];
// // DOM.vision = document.querySelector('.vision');
// // DOM.head = document.querySelector('.data');
// // DOM.stickyContainer = document.querySelector(".sticky__container");
// // DOM.skillSection = document.querySelector(".skill");

// // GSAPとScrollTriggerを登録

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//   const stickyContainer = document.querySelector(".sticky__container");
//   const skillSection = document.querySelector(".skill");

//   // ScrollTriggerの設定
//   ScrollTrigger.create({
//     trigger: stickyContainer, // 監視対象要素
//     start: () => {
//       // skillセクションのbottomを計算
//       const skillBottom = skillSection.getBoundingClientRect().bottom + window.scrollY;
//       return `${skillBottom}px ${stickyContainer.offsetTop}px`; // sticky-containerのtopがskillのbottomを超えた時発火
//     },
//     end: "bottom bottom", // 必要に応じて終了位置を調整
//     markers: true, // デバッグ用マーカー
//     onEnter: () => {
//       console.log("sticky-container の top が skillセクションの bottom を超えた");
//     },
//     onLeaveBack: () => {
//       console.log("sticky-container の top が skillセクションの bottom を再び上回った");
//     },
//   });
// });