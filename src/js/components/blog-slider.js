const blogSlider = new Swiper('.slider-post__box', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider-post__box-arrow--next',
    prevEl: '.slider-post__box-arrow--next',
  },
});