// CREATION DE LA GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory('div', { class: 'gallery__media' }),
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
          role: 'button'
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
  const galleryMedia = gallery.querySelector('.gallery__media');
  console.log(galleryMedia); // ok

  if (media.image != undefined) {
    console.log(media.image); // recupere les images
    let mediaType = elmtFactory('img', {
      class: 'currentMedia',
      src: 'images/photos/' + `${media.image}`,
      alt: `${media.title}`,
      role: 'button',
    });
    console.log(mediaType); // cree l'element image
    galleryMedia.appendChild(mediaType);
  }

  if (media.video != undefined) {
    console.log(media.video); // recupere les videos
    let mediaType = elmtFactory('video', {
      class: 'currentMedia',
      src: 'images/videos/' + `${media.video}`,
      alt: `${media.title}`,
      role: 'button',
    });
    console.log(mediaType); // cree l'element video
    galleryMedia.appendChild(mediaType);
  }

  sectionGallery.appendChild(gallery);
};
