// DOM ELEMENTS
const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');
const video = document.createElement('video');
video.classList.add('lightbox__media');
video.id = 'videoType';

// LAUNCH LIGHTBOX
const setLightbox = () => {
  const medias = document.querySelectorAll('.currentMedia');
  // console.log(medias);

  for (let i = 0; i < medias.length; i++) {
    let selectMedia = medias[i];
    let selectedMediaIndex = i;

    // quand click sur media
    selectMedia.addEventListener('click', (event) => {
      event.preventDefault();

      // ---------- NE FONCTIONNE PAS ---------- //
      // "click" sur btn = "entree" au clavier
      // if (event.keycode == 13) selectMedia.click(); // NE FONCTIONNE PAS

      // affecte 'selected' au media choisi
      selectMedia.classList.add('selected');
      // console.log(selectedMediaIndex); // index media choisi
      // console.log(selectMedia); // infos media choisi

      // OUVRE LA LIGHTBOX
      lightbox.style.display = 'flex';
      // lui affecte 'active'
      lightboxShow.classList.add('active');

      // GERE BTNS NAVIGATION ENTRE MEDIAS PRECEDENTS ET SUIVANTS
      // btn "previous" invisible si 1er media choisi
      if (selectedMediaIndex == 0) prev.style.display = 'none';
      // btn "next" visible quand index media < nb total medias
      if (selectedMediaIndex < medias.length) next.style.display = 'block';
      // btn "next" invisible si dernier media choisi
      if (selectedMediaIndex == medias.length - 1) next.style.display = 'none';
      // btn "previous" visible quand index media > 0
      if (selectedMediaIndex > 0) prev.style.display = 'block';

      // AFFICHE MEDIA CHOISI
      showMedia();

      // IDENTIFIE MEDIA PRECEDENT
      // quand click sur prev
      prev.addEventListener('click', (event) => {
        event.preventDefault();

        // ---------- NE FONCTIONNE PAS ---------- //
        // "fleche droite" au clavier = "click" sur btn
        // if (event.keycode == 37) prev.click(); // NE FONCTIONNE PAS

        // retire 'selected' du media choisi
        selectMedia.classList.remove('selected');

        // lui affecte index -1
        selectedMediaIndex--;
        // console.log(selectedMediaIndex); // index media precedent
        selectMedia = medias[selectedMediaIndex];
        // console.log(selectMedia); // infos media precedent

        // ajoute 'selected' au media precedant celui choisi
        selectMedia.classList.add('selected');

        // AFFICHE LE MEDIA PRECEDENT
        showMedia();

        // GERE BTNS NAVIGATION ENTRE MEDIAS PRECEDENTS ET SUIVANTS
        // btn "previous" invisible si arrive au 1er media
        if (selectedMediaIndex == 0) prev.style.display = 'none';
        // btn "next" visible quand index media < nb total medias
        if (selectedMediaIndex < medias.length) next.style.display = 'block';
      });

      // IDENTIFIE MEDIA SUIVANT
      // quand click sur next
      next.addEventListener('click', (event) => {
        event.preventDefault();

        // ---------- NE FONCTIONNE PAS ---------- //
        // "fleche droite" au clavier = "click" sur btn
        // if (event.keycode == 39) next.click(); // NE FONCTIONNE PAS
        // if(event.keycode == 13) event.keycode == 39; // NE FONCTIONNE PAS

        // retire 'selected' du media choisi
        selectMedia.classList.remove('selected');

        // lui affecte index +1
        selectedMediaIndex++;
        // console.log(selectedMediaIndex); // index media suivant
        selectMedia = medias[selectedMediaIndex];
        // console.log(selectMedia); // infos media suivant

        // ajoute 'selected' au media precedent celui choisi
        selectMedia.classList.add('selected');

        // AFFICHE LE MEDIA SUIVANT
        showMedia();

        // GERE BTNS NAVIGATION ENTRE MEDIAS PRECEDENTS ET SUIVANTS
        // btn "next" invisible quand arrive au dernier media
        if (selectedMediaIndex == medias.length - 1)
          next.style.display = 'none';
        // btn "previous" visible quand index media > 0
        if (selectedMediaIndex > 0) prev.style.display = 'block';
      });
    });

    // AFFICHE MEDIA CHOISI DANS LIGHTBOX
    const showMedia = () => {
      // affiche titre media dans url
      window.location.hash = selectMedia.alt;
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectMedia.src;
      lightboxMedia.alt = selectMedia.alt;
      lightboxTitle.textContent = selectMedia.alt;
      // affiche media type video
      // console.log(typeof selectMedia.alt === 'undefined'); // true si media = video
      if (typeof selectMedia.alt === 'undefined') {
        lightboxMedia.replaceWith(video);
        video.src = selectMedia.src;
        video.alt = selectMedia.alt;
        lightboxTitle.textContent = selectMedia.alt;
      } else {
        video.replaceWith(lightboxMedia);
      }
    };
  }
};

// CLOSE LIGHTBOX
const closeLightbox = (event) => {
  // if (event.keycode == 27) closeLightbox.onclick(); // NE FONCTIONNE PAS
  lightbox.style.display = 'none';
  lightboxShow.classList.remove('active');
  const medias = document.querySelectorAll('.currentMedia');
  for (let i = 0; i < medias.length; i++) {
    let selectedMedia = medias[i];
    selectedMedia.classList.remove('selected');
  }
};
