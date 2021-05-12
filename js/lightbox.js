// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

// LAUNCH LIGHTBOX
const setLightbox = () => {
  const medias = document.querySelectorAll('.currentMedia');
  // console.log(medias);

  for (let i = 0; i < medias.length; i++) {
    let selectMedia = medias[i];
    let selectedMediaIndex = i;

    // quand click sur image
    selectMedia.addEventListener('click', (e) => {
      e.preventDefault();
      selectMedia.classList.add('selected');
      // console.log(selectedMediaIndex); // index media choisi
      // console.log(selectMedia); // infos media choisi

      // OUVRE LA LIGHTBOX
      lightbox.style.display = 'flex';
      lightboxShow.classList.add('active');

      // AFFICHE LE MEDIA CHOISI
      showMedia();

      // quand click sur prev
      prev.addEventListener('click', (e) => {
        e.preventDefault();
        selectMedia.classList.remove('selected');

        // index -1
        selectedMediaIndex--;
        selectMedia = medias[selectedMediaIndex];
        selectMedia.classList.add('selected');
        // console.log(selectedMediaIndex); // index media precedent
        // console.log(selectMedia); // infos media precedent

        // AFFICHE LE MEDIA PRECEDENT
        showMedia();

        // gestion visibilite prev + next btn pour 1e et derniere image
        if (selectedMediaIndex == 0) prev.style.display = 'none';
        if (selectedMediaIndex < medias.length) next.style.display = 'block';
      });

      // quand click sur next
      next.addEventListener('click', (e) => {
        e.preventDefault();
        selectMedia.classList.remove('selected');

        // index +1
        selectedMediaIndex++;
        selectMedia = medias[selectedMediaIndex];
        selectMedia.classList.add('selected');
        // console.log(selectedMediaIndex); // index media suivant
        // console.log(selectMedia); // infos media suivant

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
      window.location.hash = selectMedia.alt + ', closeup view';
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectMedia.src;
      lightboxMedia.alt = selectMedia.alt;
      lightboxTitle.textContent = selectMedia.alt;
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
