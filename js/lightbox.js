// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__btn--prev');
const next = document.querySelector('.lightbox__btn--next');
const video = document.createElement('video');
video.classList.add('lightbox__media');
video.id = 'videoType';

// OUVRE LA LIGHTBOX
const openLightbox = () => {
  lightbox.focus();
  lightbox.style.display = 'flex';
  lightboxShow.classList.add('active');
};

const displayLightbox = () => {
  const medias = document.querySelectorAll('.gallery__link');
  // ---------- console.log(medias);

  for (let i = 0; i < medias.length; i++) {
    mediaLink = medias[i];

    // quand click sur lien
    mediaLink.addEventListener('click', (event) => {
      event.preventDefault();
      // OUVRE LA LIGHTBOX (appel fonction)
      openLightbox();
      // recupere image correspondante
      selectedMedia = medias[i].querySelector('.currentMedia');
      // affecte 'selected' au media choisi
      selectedMedia.classList.add('selected');
      // ---------- console.log(selectedMedia);
      // recupere index media choisi
      selectedMediaIndex = i;
      // ---------- console.log(selectedMediaIndex);
      // affiche fleches navigation previous / next (appel fonction)
      lightboxNav();
      // AFFICHE MEDIA CHOISI DANS LIGHTBOX (appel fonction)
      showMedia();

      // quand click sur fleche gauche ("previous")
      prev.addEventListener('click', (event) => {
        event.preventDefault();
        // -------------------------------------------------------------------------
        // "fleche gauche" au clavier = "click" sur btn
        // if (event.keycode == 37) prev.click(); // NE FONCTIONNE PAS
        // retire 'selected' du media choisi
        // -------------------------------------------------------------------------
        selectedMedia.classList.remove('selected');
        // ---------- console.log(selectedMedia);
        // lui affecte index -1
        selectedMediaIndex--;
        // ---------- console.log(selectedMediaIndex);
        selectedMedia =
          medias[selectedMediaIndex].querySelector('.currentMedia');
        // ---------- console.log(selectedMedia);
        // ajoute 'selected' au media precedant celui choisi
        selectedMedia.classList.add('selected');
        // ---------- console.log(selectedMedia);
        // affiche fleches navigation previous / next (appel fonction)
        lightboxNav();
        // AFFICHE LE MEDIA PRECEDENT (appel fonction)
        showMedia();
      });

      // quand click sur fleche droite ("next")
      next.addEventListener('click', (event) => {
        event.preventDefault();
        // -------------------------------------------------------------------------
        // "fleche droite" au clavier = "click" sur btn
        // if (event.keycode == 39) next.click(); // NE FONCTIONNE PAS
        // if(event.keycode == 13) event.keycode == 39; // NE FONCTIONNE PAS
        // -------------------------------------------------------------------------
        selectedMedia.classList.remove('selected');
        // ---------- console.log(selectedMedia);
        // lui affecte index +1
        selectedMediaIndex++;
        // ---------- console.log(selectedMediaIndex);
        selectedMedia =
          medias[selectedMediaIndex].querySelector('.currentMedia');
        // ---------- console.log(selectedMedia);
        // ajoute 'selected' au media precedant celui choisi
        selectedMedia.classList.add('selected');
        // ---------- console.log(selectedMedia);
        // affiche fleches navigation previous / next (appel fonction)
        lightboxNav();
        // AFFICHE LE MEDIA PRECEDENT (appel fonction)
        showMedia();
      });
    });

    // AFFICHE fleches NAVIGATION (previous / next)
    const lightboxNav = () => {
      // btn "previous" invisible si 1er media choisi
      if (selectedMediaIndex == 0) prev.style.display = 'none';
      // btn "previous" visible quand index media > 0
      if (selectedMediaIndex > 0) prev.style.display = 'block';
      // btn "next" visible quand index media < nb total medias
      if (selectedMediaIndex < medias.length) next.style.display = 'block';
      // btn "next" invisible si dernier media choisi
      if (selectedMediaIndex == medias.length - 1)
        // if (selectedMediaIndex == mediaLink.length - 1)
        next.style.display = 'none';
    };

    // AFFICHE MEDIA CHOISI DANS LIGHTBOX
    const showMedia = () => {
      // affiche titre media dans url
      window.location.hash =
        medias[selectedMediaIndex].title + ', closeup view';
      // ---------- console.log(medias[selectedMediaIndex].title);
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = medias[selectedMediaIndex].title + ', closeup view';
      lightboxTitle.textContent = medias[selectedMediaIndex].title;
      // affiche media type video
      // ---------- console.log(typeof selectMedia.alt === 'undefined'); // true si media = video
      if (typeof selectedMedia.alt === 'undefined') {
        lightboxMedia.replaceWith(video);
        window.location.hash =
          medias[selectedMediaIndex].title + ', closeup view';
        video.src = selectedMedia.src;
        video.alt = medias[selectedMediaIndex].title + ', closeup view';
        lightboxTitle.textContent = medias[selectedMediaIndex].title;
      } else {
        video.replaceWith(lightboxMedia);
      }
    };
  }
};

// CLOSE LIGHTBOX
const closeLightbox = () => {
  // const closeLightbox = (event) => {
  // if (event.keycode == 27) closeLightbox.onclick(); // NE FONCTIONNE PAS
  lightbox.style.display = 'none';
  lightboxShow.classList.remove('active');
  const medias = document.querySelectorAll('.currentMedia');
  for (let i = 0; i < medias.length; i++) {
    let selectedMedia = medias[i];
    selectedMedia.classList.remove('selected');
  }
};
