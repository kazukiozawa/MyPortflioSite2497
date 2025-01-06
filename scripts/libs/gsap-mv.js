class mvAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.titleFisrt = document.querySelector('.top-title-first');
        this.DOM.titleSecond = document.querySelector('.top-title-second');
        this.DOM.titleThird = document.querySelector('.top-title-third');
        this.DOM.catch = document.querySelector('.catch');
        this.DOM.slide = document.querySelector('.mv__slide');
        this.DOM.descript = document.querySelector('.mv__slide-descript');
        this.ta = new TextAnimation(this.DOM.titleSecond);
        
    }   

    animateMv() {
        this.DOM.titleSecond.classList.add('start');
        const chars = this.DOM.titleSecond.querySelectorAll('.char');
        chars.forEach((c, i) => {
            gsap.to(c, .6, {
                ease: "power3.out",
                // ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
    }
  
}

const ma = new mvAnimation();
ma.animateMv();

