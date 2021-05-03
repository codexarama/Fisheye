// RECUPERATON URL PAGE
const urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);

// ELEMENT DE LA LIGHTBOX
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

// CREATION DE LA GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory(
      'div',
      { class: 'gallery__media' },
      // elmtFactory(
      //         'a',
      // {
      // complete url page avec titre media
      // href: urlPhotographer + '&currentMedia=' + `${media.title}`,
      // class: 'currentMedia'
      // },
      elmtFactory('img', {
        class: 'currentMedia',
        src: 'images/photos/' + `${media.image}`,
        alt: `${media.title}`,
      })
      // )

      // // GESTION DES TYPES DE MEDIA
      // // --------- pas d'erreur console ---------- //
      // // --------- ne fonctionne pas ---------- //
      //   elmtFactory('img' || "video", {
      //   src: 'images/photos/' || 'images/videos/' + `${media.image}` || `${media.video}`,
      //   alt: `${media.title}`,
      // })
    ),
    elmtFactory(
      'div',
      { class: 'gallery__content' },

      elmtFactory(
        'div',
        { class: 'gallery__infos' },
        elmtFactory('p', { class: 'gallery__title' }, `${media.title}`)
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

  // export const medias = document.querySelectorAll('.currentMedia'); // ne fonctionne pas
  const medias = document.querySelectorAll('.currentMedia');
  // let currentMedia = 0;
  console.log([medias]);
  medias.forEach((selectedMedia) => {
    selectedMedia.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox();
      lightboxShow.classList.add('active');
      // searchParams.set('title', `${media.title}`); // ne fonctionne pas
      // searchParams.set('title', selectedMedia.alt); // ne fonctionne pas
      selectedMedia.classList.add('selected');
      selectedMedia.selected = 0
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = selectedMedia.alt;
      lightboxTitle.textContent = selectedMedia.alt;
      console.log([selectedMedia.selected]);

    });

    next.addEventListener('click', function () {
      selectedMedia.selected += 1;
      // lightboxMedia.src = selectedMedia.src
    });
  });
};
