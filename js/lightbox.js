const lightbox = document.querySelector('.lightbox__modal');

// launch lightbox
openLightbox = () => {
  lightbox.style.display = 'block';
};

// close lightbox
closeLightbox = () => {
  lightbox.style.display = 'none';
};

// ---------- ne fonctionne pas --------- // A REVOIR
let slideIndex = 1;
showSlides(slideIndex);

// next - previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName('lightbox__media');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'flex';
}
