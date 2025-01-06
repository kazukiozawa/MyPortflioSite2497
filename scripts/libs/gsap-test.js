document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const spans = menuBtn.querySelectorAll('span');
    let isOpen = false;
  
    menuBtn.addEventListener('click', () => {
      console.log('on');
      if (!isOpen) {
        gsap.to(spans[0], { y: 3, rotation: 45, duration: 0.4 });
        gsap.to(spans[1], { opacity: 0, duration: 0.4 });
        gsap.to(spans[2], { y: -3, rotation: -45, duration: 0.4 });
        gsap.to(menuBtn, { backgroundColor: '#1565e', duration: 0.4 });
    } else {
        gsap.to(spans[0], { y: 0, rotation: 0, duration: 0.1 });
        gsap.to(spans[1], { opacity: 1, duration: 0.1 });
        gsap.to(spans[2], { y: 0, rotation: 0, duration: 0.1 });
        gsap.to(menuBtn, { backgroundColor: '#ffffff', duration: 0.1 });
    }
      isOpen = !isOpen;
    });
  });
