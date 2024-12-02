
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
        const bottomSpace = viewHeight - 874;
        visionSection.style.paddingBottom = `${bottomSpace}px`;
    } else {
        visionSection.style.paddingBottom = ''; 
    }
}

adjustVisionPadding();

window.addEventListener('resize', () => {
    adjustVisionPadding();
});