class mvAnimation {
    constructor(el) {
        this.DOM = {};
        this.DOM.titleFisrt = document.querySelector('.top-title-first');
        this.DOM.titleSecond = document.querySelector('.top-title-second');
        this.DOM.titleThird = document.querySelector('.top-title-third');
        this.DOM.catch = document.querySelector('.catch');
        this.DOM.slide = document.querySelector('.mv__slide-gsap');
        this.DOM.descript = document.querySelector('.mv__slide-descript');
        new TextAnimation(this.DOM.titleSecond);
        new TextAnimation(this.DOM.catch);
        
    }   

    animateMv() {
        const tl = gsap.timeline();
        this.DOM.titleSecond.classList.add('start');
        this.DOM.chars = this.DOM.titleSecond.querySelectorAll('.char');
        this.DOM.chars.forEach((c, i) => {
            tl.to(c, .6, {
                ease: "power3.out",
                // ease: Back.easeOut,
                delay: i * .05,
                startAt: { y: '-50%', opacity: 0},
                y: '0%',
                opacity: 1
            },'0');
        });
        tl.fromTo(this.DOM.titleFisrt, .6, {
            x: '-10%',
            opacity: 0
        },{
            x: '0%', 
            opacity: 1,
            ease: "power3.out",
        })
        .fromTo(this.DOM.titleThird, .6, {
            x: '-10%',
            opacity: 0
        },{
            x: '0%', 
            opacity: 1,
            ease: "power3.out",

        }, '-=.6')
        .fromTo(this.DOM.slide, .5, {
            x: '-10%',
            opacity: 0
        },{
            x: '0%', 
            opacity: 1,
            ease: "power3.out",
            
        },)
        .fromTo(this.DOM.descript, .5, {
            x: '-10%',
            opacity: 0
        },{
            x: '0%', 
            opacity: 1,
            ease: "power3.out",

        }, '-=.5')
        .eventCallback("onComplete", () => {
            console.log('eventcallback');
            // timeline.fromTo の完了後に実行
            this.DOM.catch.classList.add('appear');
            this.DOM.catchChars = this.DOM.catch.querySelectorAll('.char');
            this.DOM.catchChars.forEach((c, i) => {
                // console.log('neko');
                gsap.to(c, .1, {
                    delay: i * .06,
                    startAt: { opacity: 0 },
                    display: 'inline-block',
                    opacity: 1,
                    onComplete: () => {
                        // console.log(this.DOM.catchChars.length);
                        if (i === this.DOM.catchChars.length - 1) {
                            setTimeout(() => {
                                this.DOM.catch.classList.remove('appear'); // クラスを追加して非表示制御
                            }, 700);
                        }
                    },
                });
            });
        });
    }
    border (){
        console.log('border');
    }

    // animateMv() {
    //     const tl = gsap.timeline();
    //     this.DOM.titleSecond.classList.add('start');
    //     const chars = this.DOM.titleSecond.querySelectorAll('.char');
    
    //     // charsのアニメーションをタイムラインに追加
    //     chars.forEach((c, i) => {
    //         tl.to(c, 0.6, {
    //             ease: "power3.out",
    //             delay: i * 0.05,
    //             startAt: { y: '-50%', opacity: 0 },
    //             y: '0%',
    //             opacity: 1
    //         }, 0);  // 0秒目で全て同時に開始
    //     });
    
    //     // charsのアニメーションが終わった後にtitleFirstとtitleThirdをアニメーション
    //     tl.fromTo(this.DOM.titleFisrt, 0.5, {
    //         x: '-20%',
    //         opacity: 0
    //     }, {
    //         x: '0%',
    //         opacity: 1
    //     }, '+=0')  // charsのアニメーションが終わった後に開始
    //     .fromTo(this.DOM.titleThird, 0.5, {
    //         x: '-20%',
    //         opacity: 0
    //     }, {
    //         x: '0%',
    //         opacity: 1
    //     }, '-=.5');  // 少し遅れてtitleThirdを開始
    // }
}

const ma = new mvAnimation();
ma.animateMv();

