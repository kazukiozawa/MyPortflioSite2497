// // GSAPとScrollTriggerを登録
// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//   const stickyContainer = document.querySelector(".sticky__container");
//   const dataElements = document.querySelectorAll(".vision__data");
//   const stickyMiddleOffset = stickyContainer.offsetHeight / 2;
//   const stickyTopValue = stickyContainer.getBoundingClientRect().top;


//   const createScrollTrigger = (data, index) => {
//     const dataMiddleOffset = data.offsetHeight / 2;

//     // ScrollTrigger設定
//     return ScrollTrigger.create({
//       trigger: stickyContainer,
//       start: () =>
//         `${data.getBoundingClientRect().top +
//           window.scrollY - 
//           data.offsetHeight +
//           dataMiddleOffset -
//           stickyMiddleOffset}px ${stickyTopValue + 200}px`, // sticky__container と vision__data の中間地点が一致
//       end: () =>
//         `${data.getBoundingClientRect().top +
//           window.scrollY -
//           data.offsetHeight +
//           dataMiddleOffset -
//           stickyMiddleOffset +
//           data.offsetHeight}px`, // 必要に応じて終了点
//       markers: true,
//       onEnter: () => {
//         console.log(`Trigger activated for section ${index + 1}`);
//       },
//       once: true, // 各セクション1回のみ発火
//     });
//   };

//   // ScrollTriggersを作成
//   const scrollTriggers = Array.from(dataElements).map((data, index) =>
//     createScrollTrigger(data, index)
//   );

//   console.log(scrollTriggers);
  
//   // リサイズ時にScrollTriggerをリフレッシュ
//   const onResize = () => {
//       // トリガーを全て削除して再作成
//       scrollTriggers.forEach((trigger) => trigger.kill());
//       scrollTriggers.length = 0; // 配列を空にする
      
//       dataElements.forEach((data, index) => {
//           scrollTriggers.push(createScrollTrigger(data, index));
//         });
        
//         ScrollTrigger.refresh();
//         console.log(scrollTriggers);    
//     };
    
//     // リサイズイベントリスナー
//     window.addEventListener("resize", onResize);
// });


// GSAPとScrollTriggerを登録
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const stickyContainer = document.querySelector(".sticky__container");
  const dataElements = document.querySelectorAll(".vision__data");
  const stickyMiddleOffset = stickyContainer.offsetHeight / 2;
  const stickyTopValue = stickyContainer.getBoundingClientRect().top;

  const createScrollTrigger = (data, index) => {
    const dataMiddleOffset = data.offsetHeight / 2;
    

    let isScrollDisabled = false;

    // preventDefault を実行する関数
    function preventDefaultScroll(event) {
      event.preventDefault();
    }
    
    // スクロール位置を強制的に固定
    function lockScrollPosition() {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
    
      // 繰り返し現在位置に固定
      const lock = () => {
        if (isScrollDisabled) {
          window.scrollTo(currentScrollX, currentScrollY);
          requestAnimationFrame(lock);
        }
      };
      lock();
    }
    
    // スクロールを無効化する関数
    function disableScroll() {
      isScrollDisabled = true;
    
      // イベントを無効化
      window.addEventListener("wheel", preventDefaultScroll, { passive: false });
      window.addEventListener("touchmove", preventDefaultScroll, { passive: false });
      window.addEventListener("keydown", preventDefaultScroll, { passive: false });
    
      // 慣性を制御
      lockScrollPosition();
    }



    // ScrollTrigger設定
    return ScrollTrigger.create({
      trigger: stickyContainer,
      start: () =>
        `${data.getBoundingClientRect().top +
          window.scrollY -
          data.offsetHeight +
          dataMiddleOffset -
          stickyMiddleOffset}px ${stickyTopValue + 200}px`,
      end: () =>
        `${data.getBoundingClientRect().top +
          window.scrollY -
          data.offsetHeight +
          dataMiddleOffset -
          stickyMiddleOffset +
          data.offsetHeight}px`,
      markers: true,
      onEnter: () => {
        disableScroll();
        console.log(`OnEnterCustom scroll enabled for section ${index + 1}下から入ってきた！`);
       
      },
     
      // onLeave: () => console.log("Onleave下へ抜けた！"),
      onLeaveBack: () => console.log("onLeaceBack上へ戻った！"),
      // onEnterBack: () => console.log("onEnterback上から戻ってきた！")
    });
  };

  // ScrollTriggersを作成
  const scrollTriggers = Array.from(dataElements).map((data, index) =>
    createScrollTrigger(data, index)
  );

  // リサイズ時にScrollTriggerをリフレッシュ
  const onResize = () => {
    scrollTriggers.forEach((trigger) => trigger.kill());
    scrollTriggers.length = 0;

    dataElements.forEach((data, index) => {
      scrollTriggers.push(createScrollTrigger(data, index));
    });

    ScrollTrigger.refresh();
    console.log(scrollTriggers);
  };

  // リサイズイベントリスナー
  window.addEventListener("resize", onResize);
});