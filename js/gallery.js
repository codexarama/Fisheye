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
      { class: 'gallery__image' },
      elmtFactory('img', {
        src: '/images/photos/' + `${media.image}`,
          alt: `${media.name}`,
      })
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
