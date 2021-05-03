// importer la constante "medias" from "gallery.js"
// import medias from "./gallery"

const lightbox = document.querySelector('.lightbox__modal');

// launch lightbox
openLightbox = () => {
  lightbox.style.display = 'flex';
};

// close lightbox
closeLightbox = () => {
  lightbox.style.display = 'none';
  lightboxShow.classList.remove('active');
};

