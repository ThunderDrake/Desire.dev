const swiper = new Swiper('.hero__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletClass: 'hero__slider-bullets swiper-pagination-bullet'
  },
  effect: "fade",
  speed: 1,
  loop: true,
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
});