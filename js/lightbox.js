// import mediasToLightbox from "./gallery" // ne fonctionne pas
// màj HTML link before !

// ELEMENTS DE LA LIGHTBOX
const mediasToLightbox = document.getElementsByClassName('currentMedia');
console.log(mediasToLightbox);
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
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
};

// SEPARE setLightbox() DE setGallery() // ne fonctionne pas

// const setLightbox = () => {
//   setGallery();
//   mediasToLightbox.forEach((selectedMedia) => {
//     selectedMedia.addEventListener('click', (e) => {
//       e.preventDefault();
//       openLightbox();
//       lightboxShow.classList.add('active');
//       // searchParams.set('title', `${media.title}`); // ne fonctionne pas
//       // searchParams.set('title', selectedMedia.alt); // ne fonctionne pas
//       selectedMedia.classList.add('selected');
//       selectedMedia.selected = 0;
//       lightboxMedia.src = selectedMedia.src;
//       lightboxMedia.alt = selectedMedia.alt;
//       lightboxTitle.textContent = selectedMedia.alt;
//       // console.log([selectedMedia.selected]);
//     });

//     // //   next.addEventListener('click', function () {
//     // //     selectedMedia.selected += 1;
//     // //   });
//   });
// };
// setLightbox();

// // AUTRE METHODE
// // ne fonctionne pas
//   const mediasToLightbox = document.getElementsByClassName('currentMedia');
//   // console.log([mediasToLightbox]);
//   console.log(mediasToLightbox); // undefined
//   // let currentMedia = 0;
//   for (let i = 0; i < mediasToLightbox.length; i++) {
//   mediasToLightbox.addEventListener('click', (e) => {
//     e.preventDefault();
//     openLightbox();
//   });
// }

// for (let i = 0; i < mediasToLightbox.length; i++) {}

// // AUTRE METHODE
// // ne fonctionne pas
// openLightbox = () => {
//   mediasToLightbox.forEach((selectedMedia) => {
//     selectedMedia.addEventListener('click', (e) => {
//       e.preventDefault();
//       lightbox.style.display = 'flex';
//       lightboxShow.classList.add('active');
//       selectedMedia.classList.add('selected');
//       selectedMedia.selected = 0;
//       lightboxMedia.src = selectedMedia.src;
//       lightboxMedia.alt = selectedMedia.alt;
//       lightboxTitle.textContent = selectedMedia.alt;
//       // console.log([selectedMedia.selected]);
//     });
//   });
// };
