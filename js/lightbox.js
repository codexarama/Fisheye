// **************************************** //
// ---------- TEST 1E METHODE ---------- //

const lightbox = document.querySelector('.lightbox__modal');
const mediaTitle = document.querySelector('.lightbox__title');

const lightboxElmt = document.querySelector('.lightbox__media');
const setLightbox = (media) => {
  ((lightboxMedia = elmtFactory('img', {
    src: '/images/photos/' + `${media.image}`,
    alt: `${media.name}`,
  })),
  elmtFactory('p', { class: 'lightbox__title' }, `${media.name}`)),
    lightboxElmt.appendChild(lightboxMedia);
};

// launch lightbox
openLightbox = () => {
  lightbox.style.display = 'block';
};

// close lightbox
closeLightbox = () => {
  lightbox.style.display = 'none';
};

let slideIndex = 1;
showSlides(slideIndex);

// next - previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
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

// // **************************************** //
// // ---------- TEST AUTRE METHODE ---------- //

// // Refused to load the image '<URL>' because it violates
// // the following Content Security Policy directive: "default-src 'self'".
// // Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.

// class Lightbox {
//   static init() {
//     const links = document
//       .querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
//       .forEach((link) =>
//         link.addEventListener('click', (e) => {
//           e.preventDefault();
//           new Lightbox(e.currentTarget.getAttribute('href'));
//         })
//       );
//   }

//   // recupere URL image
//   constructor(url) {
//     const element = this.buildDOM(url);
//     const sectionLightbox = document.querySelector('.lightbox');
//     sectionLightbox.appendChild(element);
//   }
//   // recupere URL image
//   // return HTML element
//   buildDOM(url) {
//     const lightboxModal = elmtFactory(
//       'div',
//       { class: 'lightbox__modal' },
//       elmtFactory(
//         'div',
//         { class: 'lightbox__content' },
//         elmtFactory('span', {
//           class: 'close',
//         }),
//         elmtFactory(
//           'div',
//           { class: 'lightbox__media' },
//           elmtFactory('img', {
//             src: `${url}`,
//             alt: `${media.name}`,
//           }),
//           elmtFactory('p', { class: 'lightbox__title' }, `${media.name}`)
//         ),
//         elmtFactory('i', {
//           class: 'fas fa-chevron-left lightbox__prev',
//         }),
//         elmtFactory('i', {
//           class: 'fas fa-chevron-left lightbox__next',
//         })
//       )
//     );
//     return lightboxModal;

//     // cf. tuto 23:35 POUR SA METHODE DE CREATION D'ELEMENTS SI RECHERCHE ERREUR
//   }
// }

// **************************************** //
// FONCTION : CREATION DE LA LIGHTBOX

// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT

// const sectionLightbox = document.querySelector('.lightbox');

// const setLightbox = (media) => {
//   const lightboxModal = elmtFactory(
//     'div',
//     { class: 'lightbox__modal' },
//     elmtFactory(
//       'div',
//       { class: 'lightbox__content' },
//       elmtFactory('span', {
//         class: 'close',
//         onclick: 'closeLightbox()',
//       }),
//       elmtFactory(
//         'div',
//         { class: 'lightbox__media' },
//         elmtFactory('img', {
//           src: '/images/photos/' + `${media.image}`,
//           alt: `${media.name}`,
//         }),
//         elmtFactory('p', { class: 'lightbox__title' }, `${media.name}`)
//       ),
//       elmtFactory('i', {
//         class: 'fas fa-chevron-left lightbox__prev',
//         onclick: 'plusSlides(-1)',
//       }),
//       elmtFactory('i', {
//         class: 'fas fa-chevron-left lightbox__next',
//         onclick: 'plusSlides(1)',
//       })
//     )
//   );
//   sectionLightbox.appendChild(lightboxModal);

//   const lightbox = lightboxModal.querySelector('.lightbox__modal');

//   // launch lightbox
//   // --------- impossible car réf dans le fichier "gallery.js" ---------- //
//   openLightbox = () => {
//     lightbox.style.display = 'block';
//   };

//   // close lightbox
//   closeLightbox = () => {
//     lightbox.style.display = 'none';
//   };

//   let slideIndex = 1;
//   showSlides(slideIndex);

//   // next - previous controls
//   function plusSlides(n) {
//     showSlides((slideIndex += n));
//   }

//   function showSlides(n) {
//     let slides = document.getElementsByClassName('lightbox__media');
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = 'none';
//     }
//     slides[slideIndex - 1].style.display = 'flex';
//   }
// };
