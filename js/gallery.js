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
      elmtFactory('img', {
        class: 'currentMedia',
        // selectionne le media par son index (photo / video indifferent)
        // ---------- NE FONCTIONNE PAS ---------- //
        // src: 'images/photos/' + `${media[2]}`,
        src: 'images/photos/' + `${media.image}`,
        alt: `${media.title}`,
        role: 'button',
      })

      // // GESTION DES TYPES DE MEDIA
      // // --------- pas d'erreur console ---------- //
      // // --------- ne fonctionne pas ---------- //
      //   elmtFactory('img' || "video",
      // {
      //   src: 'images/photos/'  + `${media.image}` || 'images/videos/' + `${media.video}`,
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
        elmtFactory('input', {
          class: 'gallery__likes--count',
          type: 'number',
          readonly: "true",
          value: `${media.likes}`,
        }),
        elmtFactory('i', {
          class: 'fas fa-heart gallery__likes--icon',
          role: 'button',
        })
      )
    )
  );

  sectionGallery.appendChild(gallery);
};
