const contactSlider = new Swiper('.contact-slider', {
  slidesPerView: 10,
  breakpoints: {
    1800: {
      slidesPerView: 10
    },
    550: {
      slidesPerView: 5
    },
    0: {
      slidesPerView: 3
    }
  }
});