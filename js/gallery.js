// RECUPERATON URL PAGE
const urlPhotographer = window.location.search;
let searchParams = new URLSearchParams(urlPhotographer);

// CREATION DE LA GALERIE VIRTUELLE
const sectionGallery = document.querySelector('.gallery');
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
const setGallery = (media) => {
  const gallery = elmtFactory(
    'article',
    { class: 'gallery__card' },
    elmtFactory(
      'div',
      { class: 'gallery__media' },
      elmtFactory('img', {
        class: 'currentMedia',
        src: 'images/photos/' + `${media.image}`,
        alt: `${media.title}`,
        role: 'button',
      })

      // // GESTION DES TYPES DE MEDIA
      // // --------- pas d'erreur console ---------- //
      // // --------- ne fonctionne pas ---------- //
      //   elmtFactory('img' || "video",
      // {
      //   src: 'images/photos/'  + `${media.image}` || 'images/videos/' + `${media.video}`,
      //   alt: `${media.title}`,
      // })
    ),
    elmtFactory(
      'div',
      { class: 'gallery__content' },

      elmtFactory(
        'div',
        { class: 'gallery__infos' },
        elmtFactory('p', { class: 'gallery__title' }, `${media.title}`)
      ),
      elmtFactory(
        'div',
        { class: 'gallery__likes' },
        elmtFactory('input', {
          class: 'gallery__likes--count',
          type: 'number',
          value: `${media.likes}`,
        }),
        elmtFactory('i', {
          class: 'fas fa-heart gallery__likes--icon',
          role: 'button',
          // onclick: 'addLike()',
        })
      )
    )
  );

  sectionGallery.appendChild(gallery);

  // export const mediasToLightbox // ne fonctionne pas

  // AFFICHAGE DU MEDIA CHOISI DANS LA LIGHTBOX
  // // OK MAIS L'ITERATION EST EXPONENTIELLE
  // // SI JE NE FAIS PAS DE BOUCLE => ERREUR "... n'est pas une fonction"
  // // PROBLEME : setGallery est appelée via une boucle dans "propage.js"
  // // PROBLEME : AILLEURS QU'ICI JE NE PEUX SELECTIONNER LES ELEMENTS QUE VIA ElementsByClassNAme
  // // RETOURNE COLLECTION HTML ET EVENTLISTENER 'click' INACTIF

  const mediasToLightbox = document.querySelectorAll('.currentMedia');
  // console.log(mediasToLightbox); // L'ITERATION EST EXPONENTIELLE
  mediasToLightbox.forEach((selectedMedia) => {
    selectedMedia.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox();
      // searchParams.set('title', `${media.title}`); // ne fonctionne pas
      // searchParams.set('title', selectedMedia.alt); // ne fonctionne pas
      selectedMedia.classList.add('selected');
      selectedMedia.selected = 0;
      lightboxMedia.src = selectedMedia.src;
      lightboxMedia.alt = selectedMedia.alt;
      lightboxTitle.textContent = selectedMedia.alt;
      // console.log([selectedMedia.selected]);
    });

    // A FAIRE // PREV - NEXT DIAPO
    // next.addEventListener('click', function () {
    //   selectedMedia.selected += 1;
    // });
  });

  // INCREMENTATION DE DU COMPTEUR DE LIKES AU CLICK SUR l'ICONE LIKE

  // // OK MAIS INCREMENTE CHAQUE COMPTEUR DE 1 + index (8;7;6;5;4;3;2;1;0)
  // // PROBLEME : setGallery() est appelée via une boucle dans "propage.js"
  // // RESULTAT : L'ITERATION EST EXPONENTIELLE
  // // PROBLEME : AILLEURS QU'ICI JE NE PEUX SELECTIONNER LES ELEMENTS QUE VIA ElementsByClassNAme
  // // RETOURNE COLLECTION HTML MAIS EVENTLISTENER 'click' INACTIF
  // // positionner un onclick: addLike () sur l'icone ds la elmtFactory ne fonctionne pas non plus
  // let likes = document.getElementsByClassName('gallery__likes--icon');
  //   // console.log(likes); // L'ITERATION EST EXPONENTIELLE
  //   // for (let i = 0; i < likes.length; i++) { // +1 (+8; +7; +6; +5; +4; +3; +2; +1; +0)
  //   // for (let i = 0; i+8 < likes.length; i++) { // +1 (photo 1); rien
  //   for (let i = 0; i < likes.length; i++) { // +1 (x9; x8; x7; x6 (...)) à toutes les images mais ne s'affiche pas
  //     let like = likes[i];
  //     like.addEventListener('click', function (event) {
  //       let like = event.target;
  //       console.log(like);
  //       let input = like.parentElement.children[0];
  //       console.log(input); // au click sur l'icone "like", l'input "count" prend le focus
  //       likesCount = parseInt(input.value) +1;
  //       console.log(likesCount);
  //       input.value[0] = likesCount;
  //     });
  //   }

  // // AUTRE METHODE : STOP LA BOUCLE QUAND i === 1
  // let likes = document.getElementsByClassName('gallery__likes--icon');
  // for (let i = 0; i < likes.length; i++) {
  //   let like = likes[i];
  //   while (i < likes.length) {
  //     // if (i === 1) { // cette ligne fait tout bugger !
  //       break; // ne stop pas la boucle
  //     // }
  //   }
  //   like.addEventListener('click', function (event) {
  //     let like = event.target;
  //     console.log(like);
  //     let input = like.parentElement.children[0];
  //     console.log(input); // au click sur l'icone "like", l'input "count" prend le focus
  //     likesCount = parseInt(input.value) + 1;
  //     console.log(likesCount);
  //     input.value[0] = likesCount;
  //   });
  // }

  // // AUTRE METHODE : AJOUTE SELECTED AU CLICK > LANCE LA FONCTION UNIQUEMENT SUR CET ELEMENT
  // // PROBLEME : setGallery() est appelée via une boucle dans "propage.js"
  // // RESULTAT : L'ITERATION EST EXPONENTIELLE
  // let likes = document.querySelectorAll('.gallery__likes--icon');
  // for (const like of likes) {
  //   like.addEventListener('click', function () {
  //     like.classList.add('selected');
  //     if (like.classList.contains('selected')) {
  //       like
  //         .querySelector('.gallery__likes--icon.selected')
  //         .classList.remove('selected'); // Cannot read property 'classList' of null
  //       // at HTMLElement.<anonymous>
  //       // likes.classList.remove('selected') // Cannot read property 'classList' of undefined
  //       // at HTMLElement.<anonymous>
  //       console.log(like);
  //       // }
  //     }
  //   });
  // }
};
