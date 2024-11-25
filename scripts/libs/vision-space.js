
// let viewHeight = window.innerHeight;
// // console.log(view);
// const visionSection = document.querySelector('.vision');

// if(viewHeight > 1086){
//     const styles = window.getComputedStyle(visionSection);
//     // const visionBottom = styles.getPropertyValue('padding-bottom');
//     const bottomSpace = viewHeight - 886;
//     console.log(bottomSpace);
//     visionSection.style.paddingBottom = `${bottomSpace}px`;

// };


function adjustVisionPadding() {
    const viewHeight = window.innerHeight;
    const visionSection = document.querySelector('.vision');

    if (viewHeight > 1086) {
        const bottomSpace = viewHeight - 882;
        visionSection.style.paddingBottom = `${bottomSpace}px`;
    } else {
        visionSection.style.paddingBottom = ''; // 初期値に戻す
    }
}

// 初回実行
adjustVisionPadding();

// ウィンドウリサイズ時に処理を実行
window.addEventListener('resize', () => {
    adjustVisionPadding();
});