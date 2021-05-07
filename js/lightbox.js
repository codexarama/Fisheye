// import mediasToLightbox from "./gallery" // ne fonctionne pas
// màj HTML link before !

// ELEMENTS DE LA LIGHTBOX
// const mediasToLightbox = Array.from(document.getElementsByClassName('currentMedia')); // length:0
const mediasToLightbox = document.getElementsByClassName('currentMedia'); // HTML collection [] => ok MAIS forEach IMPOSSIBLE
// console.log(mediasToLightbox);
// HTMLCollection.item()
// Retourne le nœud spécifique à l'index basé sur zéro donné dans la liste.
// Retourne null si l'index est hors de portée.

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

// forEach NE PEUT PAS S'UTILISER SUR UNE COLLECTION HTML
// => LA TRANSFORMER EN AJOUTANT Array.from(...) A L'EGALITE DE LA CONSTANTE
// PB : length:0

//   mediasToLightbox.forEach((selectedMedia) => {
//     selectedMedia.addEventListener('click', openLightbox = (e) => {
//       e.preventDefault();
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

// // AUTRE METHODE
// // ne fonctionne pas
//   const mediasToLightbox = document.getElementsByClassName('currentMedia');
//   // console.log([mediasToLightbox]);
//   console.log(mediasToLightbox); // undefined
//   // let currentMedia = 0;
//   for (let i = 0; i < mediasToLightbox.length; i++) {
//   mediasToLightbox[i].addEventListener('click', (e) => {
//     e.preventDefault();
//     openLightbox();
//   });
// }

// for (let i = 0; i < mediasToLightbox.length; i++) {}