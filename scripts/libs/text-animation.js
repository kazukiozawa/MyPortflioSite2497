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
        // this.DOM.heads = this.DOM.el.querySelectorAll('.vision__head');
        // this.DOM.year = this.DOM.el.querySelectorAll('.vision__head-year');
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
                display: 'inline-block' ,
                opacity: 1,
                onComplete: () => {
                    if (i === this.DOM.chars.length - 1) {
                        setTimeout(() => {
                            this.DOM.el.classList.add('hide'); // クラスを追加して非表示制御
                        }, 700);
                    }
                },
            })
        })
    }
}

class TestTextAnimation  {
    constructor(el){
        this.DOM = {};
        this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
        this.DOM.head = this.DOM.el.querySelector('.vision__head');
        this.DOM.yearPre = this.DOM.el.querySelector('.vision__year-pre');
        this.DOM.yearHigh = this.DOM.el.querySelector('.vision__year-highlight');
        this.DOM.data = this.DOM.el.querySelector('.vision__data');
        this.DOM.border = this.DOM.el.querySelector('.vision__border');
        this.DOM.borderBottom = this.DOM.el.querySelector('.vision__border-bottom');
        this.DOM.dataInner = this.DOM.el.querySelector('.vision__data-inner');
        this.chars = this.DOM.dataInner.innerHTML.trim().split("");
        this.DOM.dataInner.innerHTML = this._splitText();
        this.DOM.chars = this.DOM.el.querySelectorAll('.char');

        // console.log(this.DOM.el);
    }

    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }

    animate () {
        const timeline = gsap.timeline(); 
        this.DOM.el.classList.add('inview');
        
        timeline.fromTo(this.DOM.head, .9,
            {
                opacity: 0,
                x: '-40%',
            },
            {
                x: '0%',
                opacity: 1,
                ease: 'power2.inOut'
            },
            ).fromTo(this.DOM.border, .5,
                {
                    opacity: 0,
                    x: '-40%',
                },
                {
                    x: '0%',
                    opacity: 1,
                    ease: 'power2.inOut'
                },
                );
                
                if (this.DOM.borderBottom) {
                    console.log(this.DOM.borderBottom);
                    timeline.fromTo(this.DOM.borderBottom, .5,
                        {
                            opacity: 0,
                            x: '-40%',
                        },
                        {
                            x: '0%',
                            opacity: 1,
                            ease: 'power2.inOut'
                        },
                        "-=0.2"
                        
                        );
                    }
                    if (this.DOM.borderBottom){
                        timeline.fromTo(this.DOM.yearPre, .3,
                            {
                                opacity: 0,
                                y: '100%',
                            },
                            {
                                y: '0%',
                                opacity: 1,
                                ease: 'power2.inOut'
                            },
                            "-=0.5"
                        
                        ).fromTo(this.DOM.yearHigh, .3,
                            {
                                opacity: 0,
                                y: '100%',
                            },
                            {
                                y: '0%',
                                opacity: 1,
                                ease: 'power2.inOut'
                            },
                            "-=0.5"
                        ).eventCallback("onComplete", () => {
                            // timeline.fromTo の完了後に実行
                            this.DOM.dataInner.classList.add('appear');
                            this.DOM.chars.forEach((c, i) => {
                                console.log('neko');
                                gsap.to(c, .1, {
                                    delay: i * .05,
                                    startAt: { opacity: 0 },
                                    display: 'inline-block',
                                    opacity: 1,
                                    onComplete: () => {
                                        if (i === this.DOM.chars.length - 1) {
                                            setTimeout(() => {
                                                this.DOM.dataInner.classList.remove('appear'); // クラスを追加して非表示制御
                                            }, 700);
                                        }
                                    },
                                });
                            });
                        });
                        
                    }else{
                        timeline.fromTo(this.DOM.yearPre, .3,
                            {
                                opacity: 0,
                                y: '100%',
                            },
                            {
                                y: '0%',
                                opacity: 1,
                                ease: 'power2.inOut'
                            },
                            "-=0.2"
                        
                        ).fromTo(this.DOM.yearHigh, .3,
                            {
                                opacity: 0,
                                y: '100%',
                            },
                            {
                                y: '0%',
                                opacity: 1,
                                ease: 'power2.inOut'
                            },
                            "-=0.3"
                            
                            


                        ).eventCallback("onComplete", () => {
                            // timeline.fromTo の完了後に実行
                            this.DOM.dataInner.classList.add('appear');
                            this.DOM.chars.forEach((c, i) => {
                                console.log('neko');
                                gsap.to(c, .1, {
                                    delay: i * .05,
                                    startAt: { opacity: 0 },
                                    display: 'inline-block',
                                    opacity: 1,
                                    onComplete: () => {
                                        if (i === this.DOM.chars.length - 1) {
                                            setTimeout(() => {
                                                this.DOM.dataInner.classList.remove('appear'); // クラスを追加して非表示制御
                                            }, 700);
                                        }
                                    },
                                });
                            });
                        });

                    }ｓ
    }
}