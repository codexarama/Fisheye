// SECTION GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');

// APPEL FONCTION elmtFactory ()
// CREATION D'UNE CARTE MEDIA TYPE
// INJECTION DONNEES DANS ELEMENT CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory(
      'a',
      {
        href: '#',
        title: 'close-up view',
        class: 'gallery__link',
      },

      elmtFactory('div', {
        class: 'gallery__media',
      })
    ),
    elmtFactory(
      'div',
      { class: 'gallery__content' },

      elmtFactory(
        'div',
        { class: 'gallery__infos' },
        elmtFactory(
          'p',
          {
            class: 'gallery__title',
          },
          `${media.title}`
        )
      ),
      elmtFactory(
        'div',
        {
          class: 'gallery__likes',
          onfocus: 'return  false',
        },
        elmtFactory('label', {
          class: 'gallery__likes--label',
        }),
        elmtFactory('input', {
          tabindex: '-1',
          class: 'gallery__likes--count',
          type: 'text',
          readonly: 'true',
          value: `${media.likes}`,
        }),
        elmtFactory('span', {
          tabindex: '-1',
          id: 'content-reader',
          class: 'visually-hidden',
        },
        `${media.likes} likes`
        ),
        elmtFactory(
          'button',
          { class: 'gallery__likes--btn', role: 'button' },
          elmtFactory('i', {
            class: 'fas fa-heart gallery__likes--icon',
          })
        )
      )
    )
  );

  // CREATION ELEMENT MEDIA SELON TYPE (image / video)
  const galleryMedia = gallery.querySelector('.gallery__media');

  // creation media IMAGE
  // recupere images
  if (media.image != undefined) {
    // cree element image via factory method
    let mediaType = elmtFactory('img', {
      tabindex: '0',
      class: 'currentMedia',
      src: `images/photos/${media.image}`,
      alt: `${media.title}`,
    });
    // insere elmt image dans carte type galerie
    galleryMedia.appendChild(mediaType);
  }

  // creation media VIDEO
  if (media.video != undefined) {
    // cree element video via factory method
    let mediaType = elmtFactory('video', {
      tabindex: '0',
      class: 'currentMedia',
      src: `images/videos/${media.video}`,
      alt: `${media.title}`,
    });
    // insere elmt video dans carte type galerie
    galleryMedia.appendChild(mediaType);
  }

  // elmts galerie inseres dans section html
  sectionGallery.appendChild(gallery);
};
