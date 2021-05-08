const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

// LAUNCH LIGHTBOX
const setLightbox = () => {
  const medias = document.querySelectorAll('.currentMedia');
  for (let i = 0; i < medias.length; i++) {
    let selectMedia = medias[i];
    console.log(selectMedia);
    selectMedia.addEventListener('click', (e) => {
      e.preventDefault();
      selectMedia.classList.add('selected');
      // recupere index image choisie
      selectMedia.index = i;
      console.log(selectMedia.index);
      lightbox.style.display = 'flex';
      lightboxShow.classList.add('active');
      // affiche titre image dans url
      window.location.hash = selectMedia.alt;
      // affiche media dans lightbox
      lightboxMedia.src = selectMedia.src;
      lightboxMedia.alt = selectMedia.alt;
      lightboxTitle.textContent = selectMedia.alt;
      // quand click sur prev
      prev.addEventListener('click', (e) => {
        e.preventDefault();
        // index -1
        selectMedia.index--;
        console.log(selectMedia.index);
        // si index = 0, reprend decompte à 8 (medias.length)
        if (selectMedia.index <= 0) selectMedia.index = medias.length;
        // ---------- A FIXER ---------- //
        // si index = 0, click sur next donne index = 0
        // devrait donner index = 1
        // affiche media correspondant au nouvel index
      });
      // quand click sur next
      next.addEventListener('click', (e) => {
        e.preventDefault();
        // index +1 // max = medias.length
        selectMedia.index++;
        // si index = 8 (medias.length), reprend decompte à 0
        if (selectMedia.index >= medias.length) selectMedia.index = 0;
        console.log(selectMedia.index);
        // ---------- A FIXER ---------- //
        // si index = 0, click sur next donne index = -1
        // devrait donner index = 0
        // affiche media correspondant au nouvel index
      });
    });
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
