// FONCTION : CREATION DE LA GALERIE VIRTUELLE
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT

const sectionGallery = document.querySelector('.gallery');
const lightboxMedia = document.querySelector('.lightbox__media');
const img = document.querySelector('.lightbox__img');
const lightboxTitle = document.querySelector('.lightbox__title');

const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory(
      'div',
      { class: 'gallery__media' },
      elmtFactory(
        'a',
        {
          class: 'currentMedia',
          href: '#currentMedia=' + `${media.title}`,
        },
        elmtFactory('img', {
          src: 'images/photos/' + `${media.image}`,
          alt: `${media.title}`,
        })
      )

      // // GESTION DES TYPES DE MEDIA
      // // --------- pas d'erreur console ---------- //
      // // --------- ne fonctionne pas ---------- //
      //   elmtFactory('img' || "video", {
      //   src: 'images/photos/' || 'images/videos/' + `${media.image}` || `${media.video}`,
      //   alt: `${media.title}`,
      //   onclick: 'openLightbox();currentSlide(1)',
      // })
    ),
    elmtFactory(
      'div',
      { class: 'gallery__content' },

      elmtFactory(
        'div',
        { class: 'gallery__infos' },
        elmtFactory('p', { class: 'gallery__title' }, `${media.title}`)
        // elmtFactory('p', { class: 'gallery__price' }, `${media.price}` + '€')
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

  ///////////////////////////////////////////////////////////
  //   const links = document.querySelectorAll('.currentMedia');
  //   links.forEach((link) => {
  //     link.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       openLightbox();
  //     });
  //   });
  //   const images = document.querySelectorAll('img');
  //   images.forEach((image) => {
  //     image.addEventListener('click', () => {
  //       lightboxMedia.classList.add('active');
  //       img.src = image.src;
  //       lightboxTitle.textContent = `${media.title}`; // affiche le titre de la dernière image pour chacune
  //       for (let i = 0; i < media.title.length; i++) {
  //         lightboxTitle.textContent = `${media.title}`[i]; // affiche "f" pour toutes les images
  //       }
  //     });
  //   });
  // };

  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    image.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox();
      lightboxMedia.classList.add('active');
      img.src = image.src;
      // for (let i = 0; i < media.title.length; i++) {
      //   lightboxTitle.textContent = `${media.title}`[i]; // affiche "e" pour toutes les images
      // }
    // lightboxTitle.textContent = `${media.title}`;
    });
  });
  // for (let i = 0; i < media.title.length; i++) {
  //   lightboxTitle.textContent = `${media.title}`[i]; // affiche "e" pour toutes les images
  // }
};

// exemple
// const tagsList = id.getElementsByClassName('tags')[0];
// for (let j = 0; j < photographer.tags.length; j++) {
//   const tags = elmtFactory(
//     'li',
//     { class: 'tag' },
//     elmtFactory(
//       'a',
//       { href: `index.html?tag=${photographer.tags[j]}`,
//         class: `${photographer.tags[j]}`
//       },
//       '#' + `${photographer.tags[j]}`
//     )
//   );

