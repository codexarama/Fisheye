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
      // CARTE href = `propage.html?id=$photographers.id`
      const getId = (urlId, id) => {
        urlId = new URL(document.location).searchParams;
        id = urlId.get('id');
        return id;
      };
      console.log(getId()); // 243 (...)

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

      // AFFICHE LA GALLERIE CORRESPONDANTE
      // (filtre pop puisque selectionne par defaut)
      for (let i = 0; i < photographerWork.length; i++) {
        setGallery(photographerWork.sort(filterBy('likes', 'desc'))[i]);
      }

      // AFFICHE GALERIE TRIEE SELON CHOIX FILTRE
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
              setGallery(photographerWork.sort(filterBy('likes', 'desc'))[i]);
            }
            if (option.classList.contains('filter__option--2')) {
              setGallery(photographerWork.sort(filterBy('date', 'desc'))[i]);
            }
            if (option.classList.contains('filter__option--3')) {
              setGallery(photographerWork.sort(filterBy('title'))[i]);
            }
          }
        });
      }

      // RECUPERE URL PAGE => pour afficher titre image dans url
      // const urlPhotographer = window.location.search;
      // let searchParams = new URLSearchParams(urlPhotographer);

      // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX
      const medias = document.querySelectorAll('.currentMedia');
      console.log(medias); // L'ITERATION EST EXPONENTIELLE
      medias.forEach((selectedMedia) => {
        selectedMedia.addEventListener('click', (e) => {
          e.preventDefault();
          openLightbox();
          selectedMedia.classList.add('selected');
          // AFFICHE TITRE IMAGE DANS URL
          // searchParams.set('title', photographerWork.title); // ne fonctionne pas
          // searchParams.set('title', selectedMedia.alt); // ne fonctionne pas
          selectedMedia.selected = 0;
          console.log(selectedMedia.selected);
          // A FAIRE : REMOVE "selected" quand "selected" > 1
          lightboxMedia.src = selectedMedia.src;
          lightboxMedia.alt = selectedMedia.alt;
          lightboxTitle.textContent = selectedMedia.alt;
        });
      });

      // COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
      let likes = document.getElementsByClassName(
        'gallery__likes--icon'
      );
      for (let i = 0; i < likes.length; i++) {
        let like = likes[i];
        like.addEventListener('click', function () {
          like.classList.toggle('selected');
          let input = like.parentElement.children[0];
          console.log(input); // au click sur "like", l'input "count" prend le focus
          if (like.classList.contains('selected')) {
            like.style.color = "#db8876";
            like.style.hover = "#901c1c";
            likesCounter = parseInt(input.value) + 1;
            console.log(likesCounter);
            input.value = likesCounter;
            input.style.color = "#db8876";
          } else {
            like.style.color = "#901c1c";
            like.style.hover = "#db8876";
            likesCounter = parseInt(input.value) - 1;
            console.log(likesCounter);
            input.value = likesCounter;
            input.style.color = "#901c1c";
          }
        });
      }

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    })

    // GESTION DES ERREURS // A ETAYER
    .catch((error) => console.log(error.message));
}

fetchData();
