let pageURL = document.URL;
const pageLinks = document.querySelectorAll("[data-page]");

pageLinks.forEach((el) => {
  if (pageURL.includes(el.dataset.page)) {
    el.classList.add('menu__list-link--active');
  } else {
    el.classList.remove('menu__list-link--active');
  }
});