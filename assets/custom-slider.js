class CustomSlider extends HTMLElement {
  constructor() {
    super();
    this.splideEl = this.querySelector(".splide");
    this.options = JSON.parse(this.querySelector(['dataset.sliderOptions']))
    this.mountSplider();
    console.log("log")
  }

  mountSplider() {
    new Splide(this.splideEl).mount();
  }
}

customElements.define("custom-slider", CustomSlider);