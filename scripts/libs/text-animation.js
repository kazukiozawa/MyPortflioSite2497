class TextAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.chars = this.DOM.el.innerHTML.trim().split("");
        this.DOM.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.DOM.el.classList.toggle('inview');
    }
}
class TweenTextAnimation extends TextAnimation {
    constructor(el) {
        super(el);
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');
        // this.DOM.typeCursor = this.DOM.el.querySelectorAll('.char:after');
    }
    
    animate() {
        this.DOM.el.classList.add('inview');
        this.DOM.chars.forEach((c, i) => {
            gsap.to(c, .6, {
                ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            });
        });
    }
    
    typeAnimate() {
        // console.log(this.DOM.typeCursor);
        this.DOM.chars.forEach((c, i) => {
            gsap.to(c, .1, {
                delay: i * .05,
                startAt: { opacity: 0},
                display: 'inline-block',
                opacity: 1,
                onComplete: () => {
                    if (i === this.DOM.chars.length - 1) {
                        setTimeout(() => {
                            this.DOM.el.classList.add('hide-after'); // クラスを追加して非表示制御
                        }, 700);
                    }
                },
            })
        })
    }
}

// class TestTextAnimation extends TextAnimation {
//     constructor(el){
//         this.DOM.chars = this.;
//     }
// }