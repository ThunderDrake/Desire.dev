const galleryContainer = document.querySelector('.gallery__wrapper')

if (galleryContainer) {
  const mixer = mixitup(galleryContainer, {
    load: {
      filter: '.category-bedroom'
  }
  });
}