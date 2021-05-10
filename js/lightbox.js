const lightbox = document.querySelector('.lightbox__modal');
const lightboxShow = document.querySelector('.lightbox__show');
const lightboxMedia = document.querySelector('.lightbox__media');
const lightboxTitle = document.querySelector('.lightbox__title');
const prev = document.querySelector('.lightbox__prev');
const next = document.querySelector('.lightbox__next');

// LAUNCH LIGHTBOX
const setLightbox = () => {
  const medias = document.querySelectorAll('.currentMedia');
  console.log(medias);
  for (let i = 0; i < medias.length; i++) {
    let selectMedia = medias[i];
    let selectedMediaIndex = i;

    // quand click sur image
    selectMedia.addEventListener('click', (e) => {
      e.preventDefault();
      // let selectedMediaIndex = i;
      console.log(selectMedia); // infos media choisi
      console.log(i); // index media choisi

      // OUVRE LIGHTBOX
      // ---------- TEST FONCTION + APPELS ---------- //
      // ---------- NE FONCTIONNE PAS ---------- //
      // const openLightbox = () => {
      lightbox.style.display = 'flex';
      lightboxShow.classList.add('active');
      selectMedia.classList.add('selected');
      // affiche titre media dans url
      window.location.hash = selectMedia.alt;
      // affiche media + titre dans lightbox
      lightboxMedia.src = selectMedia.src;
      lightboxMedia.alt = selectMedia.alt;
      lightboxTitle.textContent = selectMedia.alt;
      // };

      // quand click sur prev
      prev.addEventListener('click', (e) => {
        e.preventDefault();
        // AFFICHE MEDIA PRECEDENT
        // index -1
        selectedMediaIndex--;
        console.log(selectedMediaIndex);
        console.log(selectMedia); // LA SOURCE N'EST PAS REMPLACEE PAR LE NOUVEL INDEX
        // openLightbox();
        // gestion visibilite prev + next btn pour 1e et derniere image
        if (selectedMediaIndex == 0) prev.style.display = 'none';
        if (selectedMediaIndex < medias.length) next.style.display = 'block';
      });

      // quand click sur next
      next.addEventListener('click', (e) => {
        e.preventDefault();
        // AFFICHE MEDIA SUIVANT
        // index +1
        selectedMediaIndex++;
        console.log(selectedMediaIndex);
        console.log(selectMedia); // LA SOURCE N'EST PAS REMPLACEE PAR LE NOUVEL INDEX
        // gestion visibilite prev + next btn pour 1e et derniere image
        if (selectedMediaIndex == medias.length - 1)
          next.style.display = 'none';
        if (selectedMediaIndex > 0) prev.style.display = 'block';
      });
      // openLightbox()
    });
  }
};

// // AUTRE METHODE (BY IMG.URL)
// // ouvre l'image dans une autre pag web
// const setLightbox = () => {
//   for (let i = 0; i < medias.length; i++) {
//     medias[i].onclick = () => {
//       console.log(i);
//       const showMedia = () => {
//         // window.location.replace(medias[i].src)
//         let selectedMedia = window.location.replace(medias[i].src)
//         console.log(selectedMedia);
//       };
//       showMedia();
//       lightbox.style.display = 'flex';
//       lightboxShow.classList.add('active');
//     };

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
