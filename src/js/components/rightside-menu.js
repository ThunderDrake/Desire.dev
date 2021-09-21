const closeBtn = document.querySelector('.rightside-menu__close'),
      menuBtn = document.querySelector('.header__burger'),
      menu = document.querySelector('.rightside-menu'),
      mobileMenuBtn = document.querySelector('.header__burger-menu'),
      mobileMenu = document.querySelectorAll('.header__menu');

const animationDuration = getComputedStyle(menu).getPropertyValue('--animation-duration');
const animationDurationTime = animationDuration.substring(0, animationDuration.length - 2);

menuBtn.addEventListener('click', () => {
  menu.classList.add('rightside-menu--active');
  document.body.style.overflowX = 'hidden';
});

closeBtn.addEventListener('click', () => {
  if (menu.classList.contains('rightside-menu--active')) {
    menu.classList.add('rightside-menu--fadeOut');
    setTimeout(() => {
      menu.classList.remove('rightside-menu--active', 'rightside-menu--fadeOut');
      document.body.style.overflowX = '';
    }, animationDurationTime);
  }
});

mobileMenuBtn.addEventListener('click', ()=> {
  mobileMenu.forEach(el => {
    el.classList.toggle('menu--open');
  });
});
