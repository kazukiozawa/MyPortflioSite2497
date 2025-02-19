// class HeroSlider {
//     constructor(el) {
//         this.el = el;
//         this.swiper = this._initSwiper();
//     }

//     _initSwiper() {
//         return new Swiper(this.el, {
//             // Optional parameters
//             // direction: 'vertical',
//             loop: true,
//             grabCursor: true,
//             effect: 'coverflow',
//             centeredSlides: true,
//             slidesPerView: 1,
//             speed: 1000,
//             breakpoints: {
//                 1024: {
//                     slidesPerView: 2,
//                 }
//             },
//         });
//     }

//     start(options = {}) {
//         options = Object.assign({
//             delay: 4000,
//             disableOnInteraction: false
//         }, options);

//         this.swiper.params.autoplay = options;
//         this.swiper.autoplay.start();
//     }
//     stop() {
//         this.swiper.autoplay.stop();
//     }
// }

const swiper = new Swiper(".swiper", {
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  loop: false,
  
  // centeredSlides: true,
  slidesPerView: 'auto',
  // slidesPerGroup: 3,
  spaceBetween: 16,
  speed: 1000,

});
