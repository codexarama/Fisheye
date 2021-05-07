let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())

    // RECUPERATION DES DONNEES
    .then((data) => {
      // console.log(data);

      // RECUPERE L'ID DU PHOTOGRAPHE QUAND SA CARTE EST CLIQUEE
      // source index : CARD href = `propage.html?id=$photographers.id`
      const getId = (urlId, id) => {
        urlId = new URL(document.location).searchParams;
        id = urlId.get('id');
        return id;
      };
      console.log(getId()); // n° id

      // CIBLE LES DONNEES EN FONCTION DU PHOTOGRAPHE CHOISI
      const photographerData = data.photographers.filter(
        (elmt) => elmt.id == getId()
      )[0];
      console.log(photographerData); // array data by ID

      // AFFICHE LE PROFIL DU PHOTOGRAPHE CORRESPONDANT
      setId(photographerData);

      // CIBLE LES MEDIA EN FONCTION DU PHOTOGRAPHE CHOISI
      const photographerWork = data.media.filter(
        (elmt) => elmt.photographerId == getId()
      );
      console.log(photographerWork); // array media by ID

      // // CHARGE LA GALERIE AVEC LE CHARGEMENT DE LA PAGE
      // // ---------- NE FONCTIONNE PAS ---------- //
      // window.onload = lauchGallery();

      // AFFICHE LA GALLERIE // filtre pop par defaut
      // ---------- A REMPLACER PAR FONCTION DE CHARGEMENT AVEC CHARGEMENT DE LA PAGE
      const launchGallery = () => {
        for (let i = 0; i < photographerWork.length; i++) {
          // location.hash = 'filtre popularite';
          setGallery(photographerWork.sort(filterBy('likes', 'desc'))[i]);
        }
      };
      launchGallery()

      // AFFICHE LA GALERIE TRIEE SELON CHOIX FILTRE
      const gallery = document.getElementsByClassName('gallery')[0];
      const galleryCard = document.getElementsByClassName('gallery__card');
      for (const option of document.querySelectorAll('.filter__option')) {
        option.addEventListener('click', function () {
          for (let j = 0; j < galleryCard.length; j++) {
            while (galleryCard.length > 0) {
              gallery.removeChild(galleryCard[0]);
            }
          }
          for (let i = 0; i < photographerWork.length; i++) {
            if (option.classList.contains('filter__option--1')) {
              location.hash = 'filtre popularite';
              setGallery(photographerWork.sort(filterBy('likes', 'desc'))[i]);
            }
            if (option.classList.contains('filter__option--2')) {
              location.hash = 'filtre date';
              setGallery(photographerWork.sort(filterBy('date', 'desc'))[i]);
            }
            if (option.classList.contains('filter__option--3')) {
              location.hash = 'filtre titre';
              setGallery(photographerWork.sort(filterBy('title'))[i]);
            }
          }
        });
      }

      // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX
      // ---------- LA LIGHTBOX NE FONCTIONNE PAS APRES CHOIX AUTRE FILTRE ---------- //
      // ---------- QUAND FONCTION PLACEE ICI
      // ---------- MAIS OK SI PLACEE DANS "setGallery()" du fichier "gallery.js"
      // const medias = document.getElementsByClassName('currentMedia');
      // for (let i = 0; i < medias.length; i++) {
      //   let selectedMedia = medias[i];
      //   selectedMedia.addEventListener('click', (e) => {
      //     e.preventDefault();
      //     selectedMedia.classList.add('selected'); // ne fonctionne pas apres choix autre filtre
      //     openLightbox();
      //     // AFFICHE TITRE IMAGE DANS URL
      //     // window.location.hash = selectedMedia.alt;
      //     selectedMedia.selected = 0;
      //     console.log(selectedMedia.selected);
      //     // A FAIRE : REMOVE "selected" : (cf. "lightbox.js > close function")
      //     lightboxMedia.src = selectedMedia.src;
      //     lightboxMedia.alt = selectedMedia.alt;
      //     lightboxTitle.textContent = selectedMedia.alt;
      //   });
      // }

      // COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
      let likes = document.getElementsByClassName('gallery__likes--icon');
      for (let i = 0; i < likes.length; i++) {
        let like = likes[i];
        like.addEventListener('click', function () {
          like.classList.toggle('selected');
          let input = like.parentElement.children[0];
          console.log(input); // au click sur "like", l'input "counter" prend le focus
          if (like.classList.contains('selected')) {
            location.hash = "j'aime";
            like.style.color = '#db8876';
            like.style.hover = '#901c1c';
            likesCounter = parseInt(input.value) + 1;
            console.log(likesCounter);
            input.value = likesCounter;
            input.style.color = '#db8876';
          } else {
            location.hash = "je n'aime plus";
            like.style.color = '#901c1c';
            like.style.hover = '#db8876';
            likesCounter = parseInt(input.value) - 1;
            console.log(likesCounter);
            input.value = likesCounter;
            input.style.color = '#901c1c';
          }
        });
      }

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    })

    // AFFICHE LES ERREURS EN CONSOLE
    .catch((error) => console.log(error.message));
}

fetchData();
