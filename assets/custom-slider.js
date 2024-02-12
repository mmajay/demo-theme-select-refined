class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    
    this.mountSplider();
    console.log("logging")
  }

  mountSplider() {
    new Splide(this.splideEl).mount();
  }
}

customElements.define("custom-slider", CustomSlider);