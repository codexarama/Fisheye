// FONCTION : CREATION DE LA GALERIE VIRTUELLE
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT

const sectionGallery = document.querySelector('.gallery');

const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory(
      'div',
      { class: 'gallery__media' },
      elmtFactory('img', {
        src: '/images/photos/' + `${media.image}`,
        alt: `${media.name}`,
        onclick: 'openLightbox();currentSlide(1)',
      })

      // // GESTION DES TYPES DE MEDIA
      // // --------- pas d'erreur console ---------- //
      // // --------- ne fonctionne pas ---------- //
      //   elmtFactory('img' || "video", {
      //   src: '/images/photos/' || '/images/videos/' + `${media.image}` || `${media.video}`,
      //   alt: `${media.name}`,
      //   onclick: 'openLightbox();currentSlide(1)',
      // })
    ),
    elmtFactory(
      'div',
      { class: 'gallery__content' },

      elmtFactory(
        'div',
        { class: 'gallery__infos' },
        elmtFactory('p', { class: 'gallery__title' }, `${media.name}`),

        elmtFactory('p', { class: 'gallery__price' }, `${media.price}` + '€')
      ),
      elmtFactory(
        'div',
        { class: 'gallery__likes' },
        elmtFactory(
          'p',
          { class: 'gallery__likes--count' },
          '',
          `${media.likes}`
        ),
        elmtFactory('i', { class: 'fas fa-heart' })
      )
    )
  );

  sectionGallery.appendChild(gallery);
};

// // **************************************** //
// // ---------- TEST AUTRE METHODE ---------- //

// const sectionGallery = document.querySelector('.gallery');

// const setGallery = (media) => {
//   const gallery = elmtFactory(
//     'article',
//     { class: 'gallery__card' },
//     elmtFactory(
//       'div',
//       { class: 'gallery__media' },
//       elmtFactory(
//         'a',
//         // supprimer ligne en dessous et rétablir la suivant quand media.name ok ds json
//         { href: `${media.image}`,
//           class: "imgLink" },
//         // { href: `url += &currentMedia=${media.name}` },
//         // Refused to load the image '<URL>' because it violates the following
//         // Content Security Policy directive: "default-src 'self'".
//         // Note that 'img-src' was not explicitly set, so 'default-src' is used as a fallback.
//         elmtFactory('img', {
//           src: '/images/photos/' + `${media.image}`,
//           alt: `${media.name}`,
//         })
//       )
//     ),
//     elmtFactory(
//       'div',
//       { class: 'gallery__content' },

//       elmtFactory(
//         'div',
//         { class: 'gallery__infos' },
//         elmtFactory('p', { class: 'gallery__title' }, `${media.name}`),

//         elmtFactory('p', { class: 'gallery__price' }, `${media.price}` + '€')
//       ),
//       elmtFactory(
//         'div',
//         { class: 'gallery__likes' },
//         elmtFactory(
//           'p',
//           { class: 'gallery__likes--count' },
//           '',
//           `${media.likes}`
//         ),
//         elmtFactory('i', { class: 'fas fa-heart' })
//       )
//     )
//   );

//   sectionGallery.appendChild(gallery);
// };
