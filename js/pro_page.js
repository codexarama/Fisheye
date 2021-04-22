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
      console.log(getId()); // 243 ; 930 ; 82 (...)

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

      //AFFICHE SA GALERIE VIRTUELLE
      // recupere le filtre selectionne
      document
        .getElementById('selected')
        .addEventListener('change', function (e) {
          e.preventDefault();
        });

      for (let i = 0; i < photographerWork.length; i++) {
        // filtre les donnees selon la valeur du filtre selectionne
        // --- rien ne se passe --- //
        // let value = document.getElementById('selected').value;

        if (selected.value === 'Popularité') {
          photographerWork.sort(filterBy('likes', 'desc'));
        } else if (selected.value === 'Date') {
          photographerWork.sort(filterBy('date', 'desc'));
        } else if (selected.value === 'Titre') {
          photographerWork.sort(filterBy('titre'));
        }

        // affiche la galerie correspondante
        // --- affiche la même galerie quelque soit le filtre choisi --- //
        setGallery(photographerWork[i]);
      }

      // ORGANISE DONNEES SELON FILTRE => OK
      // console.log(photographerWork.sort(filterBy('titre'))); // ok
      // console.log(photographerWork.sort(filterBy('likes', 'desc'))); // ok
      console.log(photographerWork.sort(filterBy('date', 'desc'))); // ok
    })
    // GESTION DES ERREURS // A ETAYER
    .catch((error) => console.log(error.message));
}

fetchData();
