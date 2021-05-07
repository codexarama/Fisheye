const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const selectedMedia = document.querySelector('.currentMedia.selected');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

// launch lightbox
openLightbox = () => {
  lightbox.style.display = 'flex';
  lightboxShow.classList.add('active');
};

// close lightbox
closeLightbox = () => {
  lightbox.style.display = 'none';
  lightboxShow.classList.remove('active');
  // selectedMedia.classList.remove('selected'); // ne fonctionne pas
  // Cannot read property 'classList' of null at closeLightbox
};
