// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

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
      // affiche titre media dans url
      window.location.hash = selectedMedia.alt;
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = selectedMedia.alt;
      lightboxTitle.textContent = selectedMedia.alt;
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
