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

  let scrollPos = 0; // 現在のスクロール位置
  const scrollSpeed = 0.1; // スクロール速度
  const target = document.documentElement; // ドキュメント全体を対象にする
  let isCustomScrollActive = false; // カスタムスクロールの有効化フラグ

  // スクロールイベントをカスタムで制御
  function enableCustomScroll() {
    isCustomScrollActive = true;
    window.addEventListener(
      "wheel",
      (event) => {
        if (!isCustomScrollActive) return; // フラグが有効な場合のみ処理
        event.preventDefault(); // デフォルトのスクロールを無効化
        scrollPos += event.deltaY * scrollSpeed; // スクロール速度を調整
        scrollPos = Math.max(
          0,
          Math.min(scrollPos, target.scrollHeight - window.innerHeight)
        ); // 範囲制御
      },
      { passive: false }
    );

    function smoothScroll() {
      const currentScroll = window.scrollY;
      const difference = scrollPos - currentScroll;
      const move = difference * 0.1; // 滑らかさを調整
      if (Math.abs(move) > 0.5) {
        window.scrollBy(0, move);
      }
      if (isCustomScrollActive) {
        requestAnimationFrame(smoothScroll); // アニメーションを継続
      }
    }

    requestAnimationFrame(smoothScroll); // スムーズスクロール開始
  }

  function disableCustomScroll() {
    isCustomScrollActive = false; // カスタムスクロールを無効化
  }

  const createScrollTrigger = (data, index) => {
    const dataMiddleOffset = data.offsetHeight / 2;

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
        console.log(`Custom scroll enabled for section ${index + 1}`);
        enableCustomScroll(); // カスタムスクロールを有効化
      },
      onLeave: () => {
        console.log(`Custom scroll disabled for section ${index + 1}`);
        disableCustomScroll(); // カスタムスクロールを無効化
      },
      onLeaveBack: () => {
        console.log(`Custom scroll disabled (backwards) for section ${index + 1}`);
        disableCustomScroll(); // スクロールが戻った際にも無効化
      },
    });
  };

  // ScrollTriggersを作成
  const scrollTriggers = Array.from(dataElements).map((data, index) =>
    createScrollTrigger(data, index)
  );

  console.log(scrollTriggers);

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