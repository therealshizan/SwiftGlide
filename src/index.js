const sliderWrap = document.querySelector(".slider-wrap");
const sliderPrevBtn = document.querySelector(".slider-prev-btn");
const sliderNextBtn = document.querySelector(".slider-next-btn");

class Slider {
  constructor(sliderWrap, prevBtn, nextBtn) {
    this.sliderWrap = sliderWrap;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
  }

  goToNextSlide() {
    const scrollLeftOptions = {
      left: sliderWrap.scrollLeft + 640,
      behavior: "smooth"
    };
    this.sliderWrap.scroll(scrollLeftOptions);
    console.log("Next");
  }

  goToPrevSlide() {
    const scrollRightOptions = {
      left: sliderWrap.scrollLeft - 640,
      behavior: "smooth"
    };
    this.sliderWrap.scroll(scrollRightOptions);
    console.log("Next");
  }
}

const slider = new Slider(sliderWrap, sliderPrevBtn, sliderNextBtn);

sliderNextBtn?.addEventListener("click", () => {
  slider.goToNextSlide();
});

sliderPrevBtn?.addEventListener("click", () => {
  slider.goToPrevSlide();
});
