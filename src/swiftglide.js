const sliderEl = document.querySelector(".swift-glides");
const slideOne = document.querySelector(".swift-glide-slide");
const slides = document.querySelectorAll(".swift-glide-slide");
const sliderPrevBtn = document.querySelector(".glide-prev-btn");
const sliderNextBtn = document.querySelector(".glide-next-btn");


class Slider {
  constructor(sliderObj) {
    this.sliderObj = sliderObj;
    this.isDragging = false; // Track drag state
    const { slides, slidesPerView, mobileSlidesPerView, tabletSlidesPerView, autoplay, autoplayInterval, slidesToScroll } =
      sliderObj;


    // Media Queries
    const tablet = window.matchMedia("(max-width: 768px)");
    const mobile = window.matchMedia("(max-width: 576px)");


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


    // Event listeners for drag
    this.sliderObj.sliderMain.addEventListener("mousedown", (e) => this.handleMouseDown(e));
    window.addEventListener("mousemove", (e) => this.handleMouseMove(e));
    window.addEventListener("mouseup", () => this.handleMouseUp());
  }

  // Handle mouse down event
  handleMouseDown(e) {
    this.isDragging = true;
    this.startX = e.clientX;
    this.scrollLeft = this.sliderObj.sliderMain.scrollLeft;
  }

  // Handle mouse move event
  handleMouseMove(e) {
    if (!this.isDragging) return;
    const x = e.clientX;
    const sliderWidth = this.sliderObj.sliderMain.offsetWidth;

    // Calculate the drag distance relative to the slider width
    const dragDistance = (this.startX - x) / sliderWidth;

    // Determine the threshold for switching slides (e.g., 0.2)
    const switchThreshold = 0.2;

    if (dragDistance > switchThreshold) {
      this.goToNextSlide(); // Dragged from right to left
    } else if (dragDistance < -switchThreshold) {
      this.goToPrevSlide(); // Dragged from left to right
    }

    requestAnimationFrame(() => this.handleMouseMove(e));
  }


  // Handle mouse up event
  handleMouseUp() {
    this.isDragging = false;
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
    setInterval(() => {
      this.goToNextSlide();
    }, interval);
  }
}