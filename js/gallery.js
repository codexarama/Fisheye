// SECTION GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');

// APPEL FONCTION elmtFactory ()
// CREATION D'UNE CARTE MEDIA TYPE
// INJECTION DONNEES DANS ELEMENT CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory('div', {
      tabindex: '0',
      class: 'gallery__media',
    },
      elmtFactory('a', {
        href: "#",
        title: `${media.title}` + ', closeup view',
        class: 'gallery__link'
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
  const galleryMedia = gallery.querySelector('.gallery__link');
  // console.log(galleryMedia);

  // creation media IMAGE
  if (media.image != undefined) {
    // console.log(media.image); // recupere images
    let mediaType = elmtFactory('img', {
      tabindex: "0",
      class: 'currentMedia',
      src: 'images/photos/' + `${media.image}`,
      alt: `${media.title}`,
    });
    // console.log(mediaType); // cree element image
    galleryMedia.appendChild(mediaType);
  }

  // creation media VIDEO
    if (media.video != undefined) {
    // console.log(media.video); // recupere videos
    let mediaType = elmtFactory('video', {
      tabindex: "0",
      class: 'currentMedia',
      src: 'images/videos/' + `${media.video}`,
      alt: `${media.title}`,
    });
    // console.log(mediaType); // cree element video
    galleryMedia.appendChild(mediaType);
  }

  // elmts galerie inseres dans section html
  sectionGallery.appendChild(gallery);
};
