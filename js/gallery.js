// CREATION GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');

// APPEL FONCTION elmtFactory ()
// INJECTION DONNEES ELEMENT CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory('a', {
      class: 'gallery__closeupview',
      href: `${media.title}` + ', closeup view',
    }),
    elmtFactory(
      'div',
      { class: 'gallery__content' },

      elmtFactory(
        'div',
        { class: 'gallery__infos' },
        elmtFactory('p', { class: 'gallery__title' }, `${media.title}`)
      ),
      elmtFactory(
        'button',
        {
          class: 'gallery__likes',
          role: 'button',
        },
        elmtFactory('input', {
          class: 'gallery__likes--count',
          type: 'number',
          readonly: 'true',
          value: `${media.likes}`,
        }),
        elmtFactory('i', {
          class: 'fas fa-heart gallery__likes--icon',
        })
      )
    )
  );

  // CREATION ELEMENT MEDIA SELON TYPE (image / video)
  const galleryMedia = gallery.querySelector('.gallery__closeupview');
  // console.log(galleryMedia);

  if (media.image != undefined) {
    // console.log(media.image); // recupere images
    let mediaType = elmtFactory(
      'div',
      {
        class: 'gallery__media',
      },
      elmtFactory('img', {
        class: 'currentMedia',
        src: 'images/photos/' + `${media.image}`,
        alt: `${media.title}`,
      })
    );
    // console.log(mediaType); // cree element image
    galleryMedia.appendChild(mediaType);
  }

  if (media.video != undefined) {
    // console.log(media.video); // recupere videos
    let mediaType = elmtFactory(
      'div',
      {
        class: 'gallery__media',
      },
      elmtFactory('video', {
        class: 'currentMedia',
        src: 'images/videos/' + `${media.video}`,
        alt: `${media.title}`,
      })
    );
    // console.log(mediaType); // cree element video
    galleryMedia.appendChild(mediaType);
  }

  sectionGallery.appendChild(gallery);
};
