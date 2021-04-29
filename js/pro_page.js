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

      // AFFICHE LE PROFIL DU PHOTOGRAPHE CORRESPONDANT
      setId(photographerData);

      // CIBLE LES MEDIA EN FONCTION DU PHOTOGRAPHE CHOISI
      const photographerWork = data.media.filter(
        (elmt) => elmt.photographerId == getId()
      );
      console.log(photographerWork); // array media by ID

      // FILTRE LA GALERIE VIRTUELLE
      // ORGANISE LES DONNEES SELON FILTRE CHOISI
      const filtredByLikes = photographerWork.sort(filterBy('likes', 'desc'));
      const filtredByDate = photographerWork.sort(filterBy('date', 'desc'));
      const filtredByTitle = photographerWork.sort(filterBy('title'));

      // AFFICHE SA GALERIE VIRTUELLE SELON FILTRE CHOISI
      for (let i = 0; i < photographerWork.length; i++) {
        // setGallery(filtredByLikes[i]);
        // setGallery(filtredByDate[i]);
        // setGallery(filtredByTitle[i]);

        // ---------- eventListener = "click" ---------- //
        // ---------- ne fonctionne pas ---------- //
        //   let option = document.querySelector('.filter__option.selected');
        //   const popularite = document.querySelector('.filter__option--1');
        //   const date = document.querySelector('.filter__option--2');
        //   const titre = document.querySelector('.filter__option--3');
        //   option.addEventListener('click', function (e) {
        //     e.preventDefault();
        //     if ((option = popularite)) return setGallery(filtredByLikes[i]);
        //     if ((option = date)) return setGallery(filtredByDate[i]);
        //     if ((option = titre)) return setGallery(filtredByTitle[i]);
        //   });
        //   setGallery(photographerWork[i]);
        // }

        // ---------- eventListener = "change" ---------- //
        // ---------- ne fonctionne pas ---------- //
        let option = document.querySelector('.filter__option.selected');
        const popularite = document.querySelector('.filter__option--1');
        const date = document.querySelector('.filter__option--2');
        const titre = document.querySelector('.filter__option--3');
        option.addEventListener('click', function (e) {
          e.preventDefault();
          if ((option = popularite)) return setGallery(filtredByLikes[i]);
          if ((option = date)) return setGallery(filtredByDate[i]);
          if ((option = titre)) return setGallery(filtredByTitle[i]);
        });
        setGallery(photographerWork[i]);
      }

      // RECUPERE LE NOM DU MEDIA CHOISI DANS LA GALERIE
      // const urlParams = new URLSearchParams(window.location.search);
      // urlParams.set('order', 'foo');
      // window.location.search = urlParams;

      // const getMedia = (urlMedia, currentMedia) => {
      //   urlMedia = new URL(document.location).searchParams;
      //   // currentMedia = urlMedia.get('currentMedia');
      //   currentMedia = (urlId + urlMedia.get('currentMedia'));
      //   // currentMedia = urlMedia.get(getId + 'currentMedia');
      //   return currentMedia;
      // };
      // console.log(getMedia()); // null

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    })

    // GESTION DES ERREURS // A ETAYER
    .catch((error) => console.log(error.message));
}

fetchData();
