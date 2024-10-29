// const textSpans = document.querySelectorAll(".circle-text span");
// const radius = 100; // 円の半径
// const angleIncrement = (2 * Math.PI) / textSpans.length; // 各文字の間隔

// textSpans.forEach((span, index) => {
//   const angle = angleIncrement * index;
//   const x = radius * Math.cos(angle) + radius;
//   const y = radius * Math.sin(angle) + radius;
//   span.style.left = `${x}px`;
//   span.style.top = `${y}px`;
// });

const textSpans = document.querySelectorAll(".circle-text span");
const radius = 80; // 半径を調整

textSpans.forEach((span, index) => {
  const angle = (360 / textSpans.length) * index;
  span.style.transform = `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`;
});