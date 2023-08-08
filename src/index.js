const sliderEl = document.querySelector(".swift-glides");
const slides = document.querySelectorAll(".swift-glide-slide");
const sliderPrevBtn = document.querySelector(".glide-prev-btn");
const sliderNextBtn = document.querySelector(".glide-next-btn");

class Slider {
  constructor(sliderObj) {
    this.sliderObj = sliderObj;
    const { slides, slidesPerView, mobileSlidesPerView, tabletSlidesPerView, autoplay, autoplayInterval } =
      sliderObj;

    // Vertical Slider
    if (this.sliderObj.type === "mousewheel") {
      this.sliderObj.sliderMain.style.display = "grid";
      this.sliderObj.sliderMain.style.height = "50vh";
      this.sliderObj.sliderMain.style.scrollSnapType = "y mandatory";
    }

    // Autoplay
    autoplay && this.autoplay(autoplayInterval);

    // Media Queries
    const tablet = window.matchMedia("(max-width: 768px)");
    const mobile = window.matchMedia("(max-width: 576px)");

    // Slides Per View
    slides.forEach((slide) => {
      let slideSize =
        (mobile.matches && 100 / mobileSlidesPerView) ||
        (tablet.matches && 100 / tabletSlidesPerView) ||
        100 / slidesPerView;
      slide.style.flex = `0 0 ${slideSize}%`;
    });
  }

  // Next Slide
  goToNextSlide() {
    const scrollLeftOptions = {
      left: this.sliderObj.sliderMain.scrollLeft + 640,
      behavior: "smooth",
    };
    this.sliderObj.sliderMain.scroll(scrollLeftOptions);
  }

  // Previous Slide
  goToPrevSlide() {
    const scrollRightOptions = {
      left: this.sliderObj.sliderMain.scrollLeft - 640,
      behavior: "smooth",
    };
    this.sliderObj.sliderMain.scroll(scrollRightOptions);
  }

  autoplay(interval) {
    console.log("Autoplay");
    window.addEventListener("load", () => {
      setInterval(()=>{
        this.goToNextSlide()
      }, interval)
    });
  }
}

// Slider Options You Can Also Direct Pass It As Argument
const slideOptions = {
  sliderMain: sliderEl, // Parent Slider Div
  slides: slides, // Slider Children Div
  prevBtn: sliderPrevBtn, // Previous Button
  nextBtn: sliderNextBtn, // Next Button
  slidesPerView: 2, // Slides To Show Per View
  mobileSlidesPerView: 1, // Slides To Show Per View Mobile
  tabletSlidesPerView: 2, // Slides To Show Per View Tablet
  autoplay: true, // Autoplay
  autoplayInterval: 2500 // Autoplay Interval In Milliseconds
  // type: 'mousewheel' // Slider Position (Horizontal Or Vertical)
};

// Slider Instance
const slider = new Slider(slideOptions);

// Next Button Event
slider.sliderObj.nextBtn?.addEventListener("click", () => {
  slider.goToNextSlide();
});

// Previous Button Event
slider.sliderObj.prevBtn?.addEventListener("click", () => {
  slider.goToPrevSlide();
});
