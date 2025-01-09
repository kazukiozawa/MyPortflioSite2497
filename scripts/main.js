class Main {

    #observers = [];

    constructor() {
        this.header = document.querySelector('.header');
        // this.hero = new HeroSlider('.swiper');
        this.sides = document.querySelectorAll('.side');
        this.#init();
        // this.#scrollInit();
    }

    #init() {
        new MobileMenu;
        Pace.on('done', this.#scrollInit.bind(this));
    }

    destroy() {
        this.#observers.forEach(so => so.destroy());
    }

    #scrollInit() {
        this.#observers.push(
            // new ScrollObserver('#main-content', this.#sideAnimation.bind(this), { once: false, rootMargin: "-300px 0px" }),
            // new ScrollObserver('.nav-trigger', this.#navAnimation.bind(this), { once: false }),
            // new ScrollObserver('.swiper', this.#toggleSlideAnimation.bind(this), { once: false }),
            // new ScrollObserver('.cover-slide', this.#inviewAnimation),
            // new ScrollObserver('.appear', this.#inviewAnimation),
            new ScrollObserver('.about', this.#inviewAnimation, {rootMargin: "-15%"}),
            new ScrollObserver('.main-title', this.#textAnimation, {rootMargin: "-20%"}),
            new ScrollObserver('.vision__row', this.#visionAnimation , {rootMargin: "-20%", once: true}),
        )
    }

    #toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        } else {
            this.hero.stop();
        }
    }

    

    #textAnimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }
    #visionAnimation(el, inview) {
        if(inview) {
             const va = new TestTextAnimation(el);
            // ta.typeAnimate();
            // ta.typeAnimate();
            va.animate();
        }
    }

    #navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        } else {
            this.header.classList.add('triggered');
        }
    }

    #sideAnimation(el, inview) {
        if(inview) {
            this.sides.forEach(side => side.classList.add('inview'));
        } else {
            this.sides.forEach(side => side.classList.remove('inview'));
        }
    }

    #inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        } else {
            el.classList.remove('inview');
        }
    }
}
const main = new Main;