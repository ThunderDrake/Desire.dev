const modalAbout = new GraphModal({
  isOpen: () => {
    modalVideo.setAttribute('src', playButton.dataset.src);
  },
  isClose: () => {
    modalVideo.setAttribute('src', "");
  }
});

const playButton = document.querySelector(".popup-play");
const modalVideo = document.querySelector('.modal-video');
