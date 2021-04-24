let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())

    // RECUPERATION DES DONNEES
    .then((data) => {
      // console.log(data);

      // RECUPERE L'ID DU PHOTOGRAPHE QUAND SA CARTE EST CLIQUEE
      // CARTE href = `propage.html?id=$photographers.id`
      // const urlParams = window.location.search;
      // console.log(urlParams); // ?id=243 (...)
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
      const photographerWork = data.media.filter(
        (elmt) => elmt.photographerId == getId()
      );
      console.log(photographerWork); // array media by ID

      // AFFICHE LE PROFIL DU PHOTOGRAPHE CORRESPONDANT
      setId(photographerData);

      // FILTRE LA GALERIE VIRTUELLE
      // ORGANISE ET AFFICHE LES DONNEES SELON FILTRE => OK
      // console.log(photographerWork.sort(filterBy('image')));
      // console.log(photographerWork.sort(filterBy('likes', 'desc')));
      // console.log(photographerWork.sort(filterBy('date', 'desc')));

      // FONCTION DYNAMIQUE CHOIX FILTRE = AFFICHAGE GALERIE CORRESPONDANTE
      // ---------- ne fonctionne pas ---------- //
      document
        .querySelector('#selected')
        .addEventListener('change', function (e) {
          e.preventDefault();

          if (option === 'Popularité')
            return photographerWork.sort(filterBy('likes', 'desc'));
          if (option === 'Date')
            return photographerWork.sort(filterBy('date', 'desc'));
          if (option === 'Titre')
            return photographerWork.sort(filterBy('titre'));
        });

      // AFFICHE SA GALERIE VIRTUELLE //
      // ---------- ok mais sans filtrage ---------- //
      for (let i = 0; i < photographerWork.length; i++) {
        setGallery(photographerWork[i]);
        setLightbox(photographerWork[i]);
      }
      // setLightbox(photographerWork);
      // console.log(setLightbox());

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    });

  // GESTION DES ERREURS // A ETAYER
  // .catch((error) => console.log(error.message));
}

fetchData();
