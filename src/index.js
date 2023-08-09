const sliderEl = document.querySelector(".swift-glides");
const slideOne = document.querySelector(".swift-glide-slide");
const slides = document.querySelectorAll(".swift-glide-slide");
const sliderPrevBtn = document.querySelector(".glide-prev-btn");
const sliderNextBtn = document.querySelector(".glide-next-btn");


class Slider {
  constructor(sliderObj) {
    this.sliderObj = sliderObj;
    const { slides, slidesPerView, mobileSlidesPerView, tabletSlidesPerView, autoplay, autoplayInterval, slidesToScroll } =
    sliderObj;


    // Media Queries
    const tablet = window.matchMedia("(max-width: 768px)");
    const mobile = window.matchMedia("(max-width: 576px)");

    console.log(mobile)

    // Slides To Scroll
    this.slideWidth = (mobile.matches && window.innerWidth / mobileSlidesPerView) ||
    (tablet.matches && window.innerWidth / tabletSlidesPerView) ||
    (window.innerWidth / slidesPerView) * slidesToScroll;

    // Vertical Slider
    if (this.sliderObj.type === "mousewheel") {
      this.sliderObj.sliderMain.style.display = "grid";
      this.sliderObj.sliderMain.style.height = "50vh";
      this.sliderObj.sliderMain.style.scrollSnapType = "y mandatory";
    }

    // Autoplay
    autoplay && this.autoplay(autoplayInterval);


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
      left: this.sliderObj.sliderMain.scrollLeft + this.slideWidth,
      behavior: "smooth",
    };
    this.sliderObj.sliderMain.scroll(scrollLeftOptions);
  }

  // Previous Slide
  goToPrevSlide() {
    const scrollRightOptions = {
      left: this.sliderObj.sliderMain.scrollLeft - this.slideWidth,
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
  sliderMain: sliderEl,
  slides: slides,
  prevBtn: sliderPrevBtn,
  nextBtn: sliderNextBtn,
  slidesPerView: 4,
  mobileSlidesPerView: 1,
  tabletSlidesPerView: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplayInterval: 2500
  // type: 'mousewheel'
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
