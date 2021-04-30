// RECUPERATON URL PAGE
const urlPhotographer = window.location.search;

// CREATION DE LA GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');
const lightboxMedia = document.querySelector('.lightbox__media');
const img = document.querySelector('.lightbox__img');
const lightboxTitle = document.querySelector('.lightbox__title');

// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
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
          // complete url page avec titre media
          href: urlPhotographer + '&currentMedia=' + `${media.title}`,
        },
        elmtFactory('img', {
          class: 'currentMedia',
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

  const images = document.querySelectorAll('.currentMedia');
  images.forEach((image) => {
    image.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox();
      lightboxMedia.classList.add('active');
      img.src = image.src;
      // A FAIRE : RECUPERER L'INDEX DE L'IMAGE CHOISIE
      img.alt = lightboxTitle.textContent; // ne fonctionne pas
    });
  });

  lightboxTitle.textContent = `${media.title}`; // affiche le dernier titre des medias pour chacun

  // // ---------- NE FONCTIONNE PAS ---------- //
  // const titles = document.querySelectorAll('.gallery__title');
  // titles.forEach((title) => {
  //   title.addEventListener('click', (e) => {
  //     e.preventDefault();
  //     p.textContent = lightboxTitle.textContent;
  //     // p.textContent = lightboxTitle.innerHTML; // ne fonctionne pas
  //   // lightboxTitle.textContent = `${media.title}`; // affiche systématiquement le dernier titre de la liste des media
  //   });
  // });
};
