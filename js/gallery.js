// CREATION GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');

// APPEL FONCTION elmtFactory ()
// INJECTION DONNEES ELEMENT CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory('div', {
      class: 'gallery__media',
    }),
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
            tabindex: '0',
          },
          `${media.title}`
        )
      ),
      elmtFactory(
        'div',
        {
          class: 'gallery__likes',
        },
        elmtFactory('input', {
          class: 'gallery__likes--count',
          type: 'text',
          readonly: 'true',
          value: `${media.likes}`,
        }),
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
  // console.log(galleryMedia);

  if (media.image != undefined) {
    // console.log(media.image); // recupere images
    let mediaType = elmtFactory('img', {
      class: 'currentMedia',
      src: 'images/photos/' + `${media.image}`,
      alt: `${media.title}`,
      tabindex: '0',
    });
    // console.log(mediaType); // cree element image
    galleryMedia.appendChild(mediaType);
  }

  if (media.video != undefined) {
    // console.log(media.video); // recupere videos
    let mediaType = elmtFactory('video', {
      class: 'currentMedia',
      src: 'images/videos/' + `${media.video}`,
      alt: `${media.title}`,
      tabindex: '0',
    });
    // console.log(mediaType); // cree element video
    galleryMedia.appendChild(mediaType);
  }

  sectionGallery.appendChild(gallery);
};
