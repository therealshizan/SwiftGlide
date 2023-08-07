# SwiftGlide - Simple Slider Library
SwiftGlide is a lightweight and easy-to-use JavaScript library for creating simple sliders with minimal setup. It provides smooth sliding transitions between multiple slides, perfect for showcasing content in a dynamic and engaging manner.
## Features
* Smooth sliding transitions between slides.
* Customizable number of slides per view for different screen sizes.
* Support for both horizontal and vertical sliders.
* Previous and next buttons for easy navigation.
## Demo
Check out the live demo
[here](https://therealshizan.github.io/SwiftGlide/)
## Getting Started
#### Installation
You can include SwiftGlide in your project by including the necessary HTML, CSS, and JavaScript files.
1. Download or clone the SwiftGlide repository.
2. Include the styles.css and index.js files in your HTML:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Swift Glide</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="path/to/src/styles.css">
</head>
<body>
    <!-- Your HTML content here -->

    <script src="path/to/src/index.js"></script>
</body>
</html>
```
## Usage
1. Add the necessary HTML structure to create the slider:
```html
<div class="swift-glide-container">
    <div class="swift-glides">
        <div class="swift-glide-slide">Slide 1</div>
        <div class="swift-glide-slide">Slide 2</div>
            <!-- Add more slides here -->
        </div>
    <div class="swift-glide-btns">
        <div class="swift-glide-btn glide-prev-btn">Prev</div>
        <div class="swift-glide-btn glide-next-btn">Next</div>
    </div>
</div>
```
2. Customize the slider options in the JavaScript:
```javascript
const sliderEl = document.querySelector(".swift-glides");
const slides = document.querySelectorAll(".swift-glide-slide");
const sliderPrevBtn = document.querySelector(".glide-prev-btn");
const sliderNextBtn = document.querySelector(".glide-next-btn");

const slideOptions = {
  sliderMain: sliderEl,
  slides: slides,
  prevBtn: sliderPrevBtn,
  nextBtn: sliderNextBtn,
  slidesPerView: 2, // Number of slides per view
  mobileSlidesPerView: 1, // Number of slides per view on mobile
  tabletSlidesPerView: 2, // Number of slides per view on tablet
  // type: 'mousewheel' // Uncomment to enable vertical slider
};

const slider = new Slider(slideOptions);

// Next Button Event
slider.sliderObj.nextBtn?.addEventListener("click", () => {
  slider.goToNextSlide();
});

// Previous Button Event
slider.sliderObj.prevBtn?.addEventListener("click", () => {
  slider.goToPrevSlide();
});
```
## Customization
You can customize the appearance and behavior of SwiftGlide by modifying the provided CSS styles and JavaScript options.
* Adjust the styles in styles.css to match your design preferences.
* Modify the slideOptions object in index.js to control the number of slides per view and other settings.

###### Enjoy creating simple and elegant sliders with SwiftGlide! If you have any questions or need assistance, don't hesitate to reach out.
Shizan Vasim
shaikhshizan9833@gmail.com
