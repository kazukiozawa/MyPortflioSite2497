const visionContainDom = document.querySelector('.vision__container');
const visionDom = document.querySelector('.vision');
console.log(visionDom);

const stickHeight = window.innerHeight / 5;
// console.log()

visionDom.style.top = `${stickHeight}px`;
visionContainDom.style.paddingTop = `${stickHeight}px`;

window.addEventListener('resize', ()=> {
    const stickHeight = window.innerHeight / 5;
    console.log(`Updated stickHeight: ${stickHeight}`);
})



// const element = document.getElementById('myElement');
// element.style.color = 'red'; // テキストの色を赤に変更
// element.style.fontSize = '20px'; // フォントサイズを20pxに変更