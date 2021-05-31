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
  // ---------- console.log(medias);

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
      // ---------- console.log(selectedMedia);
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
      // ---------- console.log(medias[i].title);
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = medias[i].title + ', closeup view';
      lightboxTitle.textContent = medias[i].title;
      // affiche media type video
      // ---------- console.log(typeof selectMedia.alt === 'undefined');
      // true si media = video
      if (typeof selectedMedia.alt === 'undefined') {
        lightboxMedia.replaceWith(video);
        window.location.hash = medias[i].title + ', closeup view';
        video.src = selectedMedia.src;
        video.alt = medias[i].title + ', closeup view';
        lightboxTitle.textContent = medias[i].title;
      } else {
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
        // ---------- console.log(selectedMedia);
        // lui affecte index -1
        i--; // ---------- console.log(i);
        selectedMedia = medias[i].querySelector('.currentMedia');
        // ---------- console.log(selectedMedia);
        // ajoute 'selected' au media precedant celui choisi
        selectedMedia.classList.add('selected');
        // ---------- console.log(selectedMedia);
        // affiche fleches navigation previous / next (appel fonction)
        lightboxNav();
        // AFFICHE MEDIA PRECEDENT (appel fonction)
        showMedia();
      });

      // ---------- NE FONCTIONNE PAS ---------- //
      // fleche gauche > media precedent
      // document.addEventListener('keydown', (KeyboardEvent) => {
      //   if (KeyboardEvent === 37) prev.click;
      // });
    };

    // AFFICHE MEDIA SUIVANT
    const nextMedia = () => {
      // quand click sur fleche droite ("next")
      next.addEventListener('click', (event) => {
        event.preventDefault();
        // retire 'selected' du media choisi
        selectedMedia.classList.remove('selected');
        // ---------- console.log(selectedMedia);
        // lui affecte index +1
        i++;
        // ---------- console.log(i);
        selectedMedia = medias[i].querySelector('.currentMedia');
        // ---------- console.log(selectedMedia);
        // ajoute 'selected' au media precedant celui choisi
        selectedMedia.classList.add('selected');
        // ---------- console.log(selectedMedia);
        // affiche fleches navigation previous / next (appel fonction)
        lightboxNav();
        // AFFICHE MEDIA PRECEDENT (appel fonction)
        showMedia();
      });

      // ---------- NE FONCTIONNE PAS ---------- //
      // fleche droite > media suivant
      // document.addEventListener('keydown', (KeyboardEvent) => {
      //   if (KeyboardEvent === 39) next.click;
      // });
    };


    // FONCTION : GESTION NAVIGATION CLAVIER
    // ---------- NE FONCTIONNE PAS ---------- //
    // fleche gauche > media precedent
    // fleche droite > media suivant
    // document.addEventListener('keydown', (event) => {
    //   if (event.keyCode === 37) return previousMedia();
    //   if (event.keyCode === 39) return nextxMedia();
    // });

    // ---------- NE FONCTIONNE PAS ---------- //
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

    // ---------- NE FONCTIONNE PAS ---------- //
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
  }
};

// FONCTION : GESTION NAVIGATION CLAVIER
// "fleche doite" ou "gauche" = "entree"

// document.addEventListener('keydown', (KeyboardEvent) => {
//   console.log(KeyboardEvent.key);

//   // if (next.focus() && KeyboardEvent.keyCode === 39) {
//   if (next.focus()) {
//     console.log("next"); // ne fonctionne pas
//   }
// });

// -------------------------------------------------------------------------
// document.addEventListener('keydown', (KeyboardEvent) => {
//   console.log(KeyboardEvent.key);
//   if (KeyboardEvent.keyCode === 37) {
//     console.log('a');
//     prev.click;
//     console.log('b');
//   }
//   if (KeyboardEvent.keyCode === 39) {
//     console.log('c');
//     next.click;
//     console.log('d');
//   }
// });

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
  // focus sur bouton "contactez-moi"
  formOpenBtn.focus();

  const medias = document.querySelectorAll('.currentMedia');
  for (let i = 0; i < medias.length; i++) {
    let selectedMedia = medias[i];
    selectedMedia.classList.remove('selected');
  }
};

// CLOSE LIGHTBOX ("escape" event)
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) closeLightbox();
});
