// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

const setLightbox = () => {
  const medias = document.querySelectorAll('.currentMedia');
  // console.log(medias);

  for (let j = 0; j < medias.length; j++) {
    let selectMedia = medias[j];
    let selectedMediaIndex = j;

    // IDENTIFIE LE MEDIA CHOISI
    // quand click sur media
    selectMedia.addEventListener('click', (event) => {
      event.preventDefault();

      // ACCESSIBILITE
      // navigation clavier sur image : "entree" = "click"
      if (event.keycode == 13) selectMedia.click(); // NE FONCTIONNE PAS

      // OUVRE LA LIGHTBOX
      lightbox.style.display = 'flex';
      lightboxShow.classList.add('active');

      // affecte 'selected' au media choisi
      selectMedia.classList.add('selected');
      // console.log(selectedMediaIndex); // index media choisi
      // console.log(selectMedia); // infos media choisi

      // AFFICHE LE MEDIA CHOISI
      showMedia();

      // IDENTIFIE LE MEDIA PRECEDENT
      // quand click sur prev
      prev.addEventListener('click', (e) => {
        e.preventDefault();

        // retire 'selected' du media choisi
        selectMedia.classList.remove('selected');

        // lui affecte index -1
        selectedMediaIndex--;
        selectMedia = medias[selectedMediaIndex];
        // console.log(selectedMediaIndex); // index media precedent
        // console.log(selectMedia); // infos media precedent

        // ajoute 'selected' au nouveau media choisi
        selectMedia.classList.add('selected');

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
        selectMedia.classList.remove('selected');

        // lui affecte index -1
        selectedMediaIndex++;
        selectMedia = medias[selectedMediaIndex];
        // console.log(selectedMediaIndex); // index media suivant
        // console.log(selectMedia); // infos media suivant

        // ajoute 'selected' au nouveau media choisi
        selectMedia.classList.add('selected');

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
