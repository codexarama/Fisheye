// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__btn--prev');
const next = document.querySelector('.lightbox__btn--next');
const lightboxCloseBtn = document.querySelector('.lightbox__btn--close');

// CREATION ELEMENT VIDEO
const video = document.createElement('video');
video.classList.add('lightbox__media');
video.id = 'videoType';

// FONCTION : OUVRE LIGHTBOX
const openLightbox = () => {
  // desactive "main"
  mainContent.setAttribute('arias-hidden', 'true');
  // active modal
  lightbox.setAttribute('aria-hidden', 'false');
  // stop scroll arriere plan
  body.classList.add('no-scroll');
  // affiche contenu modal
  lightbox.style.display = 'flex';
  // ajoute "active" au block qui affiche les elements
  lightboxShow.classList.add('active');
};

// FONCTION : AFFICHE MEDIA CHOISI
const displayLightbox = () => {
  const medias = document.querySelectorAll('.gallery__link');

  for (let i = 0; i < medias.length; i++) {
    mediaLink = medias[i];

    // quand click sur lien
    mediaLink.addEventListener('click', (event) => {
      event.preventDefault();
      // OUVRE LA LIGHTBOX (appel fonction)
      openLightbox();
      // focus dans lightbox (bouton "fermer")
      lightboxCloseBtn.focus();
      // recupere image correspondante
      selectedMedia = medias[i].querySelector('.currentMedia');
      // affecte 'selected' au media choisi
      selectedMedia.classList.add('selected');
      // affiche fleches navigation previous / next (appel fonction)
      lightboxNav();
      // AFFICHE MEDIA CHOISI DANS LIGHTBOX (appel fonction)
      showMedia();
      // AFFICHE MEDIA PRECEDENT (appel fonction)
      previousMedia();
      // AFFICHE MEDIA SUIVANT (appel fonction)
      nextMedia();
    });

    // AFFICHE fleches NAVIGATION (previous / next)
    const lightboxNav = () => {
      // btn "previous" invisible si 1er media choisi
      if (i == 0) {
        prev.style.display = 'none';
        next.focus();
      }
      // btn "previous" visible quand index media > 0
      if (i > 0) {
        prev.style.display = 'block';
      }
      // btn "next" visible quand index media < nb total medias
      if (i < medias.length) {
        next.style.display = 'block';
      }
      // btn "next" invisible si dernier media choisi
      if (i == medias.length - 1) {
        next.style.display = 'none';
        prev.focus();
      }
    };

    // AFFICHE MEDIA CHOISI DANS LIGHTBOX
    const showMedia = () => {
      // affiche titre media dans url
      window.location.hash = medias[i].title + ', closeup view';
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = medias[i].title + ', closeup view';
      lightboxTitle.textContent = medias[i].title;
      // si media type img undefined, affiche media type video
      if (typeof selectedMedia.alt === 'undefined') {
        // remplace img elmt par video elmt
        lightboxMedia.replaceWith(video);
        // affiche titre media dans url
        window.location.hash = medias[i].title + ', closeup view';
        // affiche media + titre dans lightbox
        video.src = selectedMedia.src;
        video.alt = medias[i].title + ', closeup view';
        lightboxTitle.textContent = medias[i].title;
      } else {
        // remplace video elmt par img elemt
        video.replaceWith(lightboxMedia);
      }
    };

    // AFFICHE MEDIA PRECEDENT
    const previousMedia = () => {
      // quand click sur fleche gauche ("previous")
      prev.addEventListener('click', (event) => {
        event.preventDefault();
        // retire 'selected' du media choisi
        selectedMedia.classList.remove('selected');
        // lui affecte index -1
        i--;
        selectedMedia = medias[i].querySelector('.currentMedia');
        // ajoute 'selected' au media precedant celui choisi
        selectedMedia.classList.add('selected');
        // affiche fleches navigation previous / next (appel fonction)
        lightboxNav();
        // AFFICHE MEDIA PRECEDENT (appel fonction)
        showMedia();
      });
    };

    // AFFICHE MEDIA SUIVANT
    const nextMedia = () => {
      // quand click sur fleche droite ("next")
      next.addEventListener('click', (event) => {
        event.preventDefault();
        // retire 'selected' du media choisi
        selectedMedia.classList.remove('selected');
        // lui affecte index +1
        i++;
        selectedMedia = medias[i].querySelector('.currentMedia');
        // ajoute 'selected' au media precedant celui choisi
        selectedMedia.classList.add('selected');
        // affiche fleches navigation previous / next (appel fonction)
        lightboxNav();
        // AFFICHE MEDIA PRECEDENT (appel fonction)
        showMedia();
      });
    };

    // FONCTION : GESTION NAVIGATION CLAVIER
    // ---------- NE FONCTIONNE PAS ---------- //
    const arrowNav = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          previousMedia();
          break;
        case 'ArrowRight':
          nextMedia();
          break;
        default:
          return;
      }
      event.preventDefault();
    };

    window.addEventListener('keydown', arrowNav);

    // ---------- NE FONCTIONNE PAS ---------- //

    // -------------------------------------------------------------------------
    // fleche gauche > media precedent
    // fleche droite > media suivant
    // document.addEventListener('keydown', (event) => {
    //   if (event.keyCode === 37) return previousMedia();
    //   if (event.keyCode === 39) return nextxMedia();
    // });

    // -------------------------------------------------------------------------
    // const keybordPrevNExt = {
    //   ArrowLeft: previousMedia,
    //   ArrowRigt: nextMedia,
    // };
    // const handleKeyDown = ({ key, value }) => {
    //   if (keybordPrevNExt[key]) {
    //     keybordPrevNExt[value]();
    //   }
    // };
    // document.addEventListener('keydown', handleKeyDown);

    // -------------------------------------------------------------------------
    // const keybordPrevNExt = () => {
    //   document.addEventListener('keydown', (event) => {
    //     switch (event.key) {
    //       case 'ArrowLeft':
    //         previousMedia();
    //         break;
    //       case 'ArrowRight':
    //         nextMedia();
    //         break;
    //       default:
    //         return;
    //     }
    //     event.preventDefault();
    //   });
    // };
    // keybordPrevNExt()

    // -------------------------------------------------------------------------
    //     window.addEventListener('keydown', (KeyboardEvent) => {
    //       console.log(KeyboardEvent.key);
    //       if (KeyboardEvent.keyCode === 37) {
    //         console.log('a');
    //         previousMedia();
    //         // previousMedia.click;
    //         console.log('b');
    //       }
    //       if (KeyboardEvent.keyCode === 39) {
    //         console.log('c');
    //         nextMedia();
    //         // nextMedia.click;
    //         console.log('d');
    //       }
    //     });

    // -------------------------------------------------------------------------
    // const keybordPrevNExt = (event) => {
    //   console.log(event.key);
    //   let enter = event.keyCode === 13;
    //   if (event.keyCode === 39) {
    //     event.preventDefault();
    //     enter;
    //   }
    // };

    // -------------------------------------------------------------------------
    // const keybordPrevNExt = (event) => {
    //   console.log(event.key);
    //   let enter = event.keyCode === 13;
    //   let arrowRight = event.keyCode === 39;
    //   arrowRight = enter;
    // };
  }
};

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// CLOSE LIGHTBOX ("clik" event)
const closeLightbox = () => {
  // active main
  mainContent.setAttribute('arias-hidden', 'false');
  // dasactive modal
  lightbox.setAttribute('aria-hidden', 'true');
  // annule stop scroll
  body.classList.remove('no-scroll');
  // masque modal
  lightbox.style.display = 'none';
  // retire "active" du block qui affiche les elements
  lightboxShow.classList.remove('active');
  // focus sur dernier media choisi
  const lastMedia = document.querySelector('.currentMedia.selected');
  lastMedia.focus();
  // retire "selected" de ce media
  lastMedia.classList.remove('selected');
};

// CLOSE LIGHTBOX ("escape" event)
window.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    closeLightbox();
  }
});
