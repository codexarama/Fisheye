// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
let lightboxShow = document.querySelector('.lightbox__show');
// const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

// const typeImage = document.querySelectorAll('img')
// const typeImage = document.querySelector('.currentMedia img')
// console.log(typeImage);

const setLightbox = () => {
  const medias = document.querySelectorAll('.gallery__link');
  // console.log(medias);

  for (let j = 0; j < medias.length; j++) {
    let selectMedia = medias[j];
    // console.log(selectMedia);
    let selectedMedia = selectMedia.querySelector('.currentMedia');
    // console.log(selectedMedia);
    let selectMediaIndex = j;
    let selectedMediaIndex = selectMediaIndex;
    // console.log(selectedMediaIndex);

    // IDENTIFIE LE MEDIA CHOISI
    // quand click sur media
    selectMedia.addEventListener('click', (event) => {
      event.preventDefault();
      // OUVRE LA LIGHTBOX
      lightboxShow.classList.add('active');
      lightbox.style.display = 'flex';

      // affecte 'selected' au media choisi
      selectedMedia.classList.add('selected');

      // // RESET LA LIGHTBOX
      // // ----------- NE FONCTIONNE PAS ---------- //
      // const lightboxMedia = document.querySelectorAll('lightbox__media');
      // for (let i = 0; i < lightboxMedia.length; i++) {
      //   if (lightboxMedia.length > 0) lightboxShow.removeChild(img);
      //   // if (lightboxMedia.length > 0) lightboxShow.removeChild(lightboxMedia);
      // }

      // AFFICHE LE MEDIA CHOISI
      showMedia();

      // IDENTIFIE LE MEDIA PRECEDENT
      // quand click sur prev
      prev.addEventListener('click', (e) => {
        e.preventDefault();

        // retire 'selected' du media choisi
        selectedMedia.classList.remove('selected');

        // lui affecte index -1
        selectedMediaIndex--;
        // console.log(selectedMediaIndex); // index media precedent

        // ajoute 'selected' au media precedent celui choisi
        selectedMedia.classList.add('selected');

        selectedMedia =
          medias[selectedMediaIndex].querySelector('.currentMedia');
        // console.log(selectedMedia); // infos media precedent

        // AFFICHE LE MEDIA PRECEDENT
        showMedia();

        // gestion visibilite prev + next btn pour 1e et derniere image
        if (selectedMediaIndex == 0) prev.style.display = 'none';
        if (selectedMediaIndex < medias.length) next.style.display = 'block';
      });

      // IDENTIFIE LE MEDIA SUIVANT
      // quand click sur next
      next.addEventListener('click', (e) => {
        e.preventDefault();

        // retire 'selected' du media choisi
        selectedMedia.classList.remove('selected');

        // lui affecte index -1
        selectedMediaIndex++;
        // console.log(selectedMediaIndex); // index media suivant

        // ajoute 'selected' au media suivant celui choisi
        selectedMedia.classList.add('selected');

        selectedMedia =
          medias[selectedMediaIndex].querySelector('.currentMedia');
        // console.log(selectedMedia); // infos media suivant

        // AFFICHE LE MEDIA SUIVANT
        showMedia();

        // gestion visibilite prev + next btn pour 1e et derniere image
        if (selectedMediaIndex == medias.length - 1)
          next.style.display = 'none';
        if (selectedMediaIndex > 0) prev.style.display = 'block';
      });
    });

    // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX
    const showMedia = () => {
      // // RESET LA LIGHTBOX
      // // ----------- NE FONCTIONNE PAS ---------- //
      // // Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'
      // const lightboxMedia = document.querySelectorAll('.lightbox__media');
      // for (let i = 0; i < lightboxMedia.length; i++) {
      //   if (lightboxMedia.length > 0) lightboxShow.removeChild(lightboxMedia);
      // }

      // SELON SON TYPE
      // image
      const imageType = selectMedia.querySelector('img.currentMedia');
      console.log(imageType);
      if (imageType) {
        showImage();
      }

      // video
      const videoType = selectMedia.querySelector('video.currentMedia');
      console.log(videoType);
      if (videoType) {
        showVideo();
        // showVideo() && lightboxShow.removeChild(img); // NE REMOVE PAS
      }
    };

    // lightboxShow.removeChild(video); // BUG
    // lightboxShow.removeChild(img); // BUG

    const showImage = (image, title) => {
      // RESET LA LIGHTBOX
      // ----------- NE FONCTIONNE PAS ---------- //
      // Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'
      const lightboxMedia = document.querySelectorAll('.lightbox__media');
      console.log(lightboxMedia);
      // lightboxShow = lightboxMedia.parentNode;
      // console.log(lightboxShow); // ok

      for (let i = 0; i < lightboxMedia.length; i++) {
        console.log(lightboxShow); // ok // apparait quand length > 0
        // if (lightboxMedia.length > 0) image.replaceWith(lightboxMedia);
        // if (lightboxMedia.length > 0) lightboxMedia.replaceWith(image); // lightboxMedia.replaceWith is not a function
        // if (lightboxMedia.length > 0) image.replaceWith(image); // Cannot read property 'replaceWith' of undefined
        // if (lightboxMedia.length > 0) lightboxShow.removeChild(lightboxMedia);
        // if (lightboxMedia.length > 0) lightboxShow.parentNode.removeChild(lightboxMedia);
        // while (lightboxMedia.length > 0) image.replaceWith(lightboxMedia);
        // while (lightboxMedia.length > 0) lightboxShow.removeChild(lightboxMedia);
        // while (lightboxMedia.length > 0) lightboxShow.parentNode.removeChild(lightboxMedia);
        // Failed to execute 'removeChild' on 'Node': parameter 1 is not of type 'Node'
      }

      // CREATION elmt IMAGE
      image = document.createElement('img');
      image.setAttribute('id', 'lightbox__img');
      image.setAttribute('class', 'lightbox__media');
      lightboxShow.appendChild(image);

      // image.replaceWith(image) // NE FONCTIONNE PAS

      // AFFICHE image
      image.src = selectedMedia.src;
      image.alt = selectedMedia.alt;

      // CREATION elmt TITRE
      title = document.createElement('p');
      title.setAttribute('id', 'media__title');
      title.setAttribute('class', 'lightbox__title');
      lightboxShow.appendChild(title);
      title.textContent = selectedMedia.alt;
    };

    const showVideo = (video, title) => {
      // CREATION elmt VIDEO
      video = document.createElement('video');
      video.setAttribute('id', 'lightbox__video');
      video.setAttribute('class', 'lightbox__media');
      lightboxShow.appendChild(video);

      // AFFICHE video
      video.src = selectedMedia.src;
      video.alt = selectedMedia.alt;

      // CREATION elmt TITRE
      title = document.createElement('p');
      title.setAttribute('id', 'media__title');
      title.setAttribute('class', 'lightbox__title');
      lightboxShow.appendChild(title);
      title.textContent = selectedMedia.alt;
    };
  }
};

// CLOSE LIGHTBOX
const closeLightbox = () => {
  lightbox.style.display = 'none';
  lightboxShow.classList.remove('active');
  const medias = document.querySelectorAll('.currentMedia');
  for (let i = 0; i < medias.length; i++) {
    let selectedMedia = medias[i];
    selectedMedia.classList.remove('selected');
  }
};
