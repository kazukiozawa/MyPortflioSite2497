class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    // this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  // 2023/10/02更新: _getEventTypeの内容に動画との差異がありますが、こちらの内容で進めてください。
  _getEventType() {
    // 2023/10/02時点ではwindowにontouchstartがあれば大丈夫です。
    const isTouchCapable = "ontouchstart" in window;

    return isTouchCapable ? "touchstart" : "click";
  }
  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    // this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY; // スクロール位置を取得
  const bgInside = document.querySelector('.aboutMv__bg-inside');
  
  // 背景を動かす速度を調整（スクロール量の0.5倍で遅くする）
  const speed = 0.5;
  const offset = scrollPosition * speed;

  // transformで背景の位置を変更
 
});

class BgSlow {
  constructor (el){
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    // this.DOM.bgInside = document.querySelector('.aboutMv__bg-inside') || document.querySelector('.workMv__bg-inside');
    // this.DOM.bgInside = document.querySelector(el);
    console.log(1);
    this.speed = .4;
    this._EventSlow = this._EventSlow.bind(this);
    
  }

  addSlow() {
    window.addEventListener('scroll', this._EventSlow);
    this.DOM.el.style.willChange ='transform';
  }
  removeSlow() {
    window.removeEventListener('scroll', this._EventSlow);
    this.DOM.el.style.willChange ='';
  }
  
  _EventSlow() {
    if(!this.DOM.el){
      return;
    }
    const scrollPosition = window.scrollY;
    const offset = scrollPosition * this.speed;
    // console.log(`offset${offset.toFixed(1)} = ${scrollPosition} * ${this.speed}`);
    this.DOM.el.style.transform = `translateY(${offset}px)`;
  }
}
