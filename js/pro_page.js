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
      for (let i = 0; i < photographerWork.length; i++) {
        setGallery(photographerWork[i]);
      }

      // FILTRE LA GALERIE VIRTUELLE

      // RECUPERE LA VALEUR DU FILTRE CHOISI
      // CARTE href = "propage.html?id=" + `$photographers.id`
      const urlPhotographer = window.location.search;
      const pop = document.querySelector('.likes');
      pop.href = urlPhotographer + '&filter=pop'; // PB : ajoute 1 '&filter=pop' ds l'url à chaque clic
      const getPop = (urlPop, pop) => {
        urlPop = new URL(document.location).searchParams;
        pop = urlPop.get('filter');
        return pop;
      };
      console.log(getPop());

      // for (let i = 0; i < photographerWork.length; i++) {
      //   const filtredByLikes = photographerWork.filter (
      //     (elmt) => elmt.sort(filterBy('likes', 'desc')) == getPop()
      //   )
      //   setGallery(filtredByLikes[i]) // photographerWork.sort is not a function
      // }
      // for (let i = 0; i < photographerWork.length; i++) {
      //   const filtredByLikes = photographerWork.sort(filterBy('likes', 'desc'))
      //   (
      //     (elmt) => elmt == getPop()
      //   )
      //   setGallery(filtredByLikes[i]) // photographerWork.sort is not a function
      // }


      // ---------- NE FONCTIONNE PAS ---------- //
      // const filtredByLikes = photographerWork.sort(filterBy('likes', 'desc'));
      // const filtredByDate = photographerWork.sort(filterBy('date', 'desc'));
      // const filtredByTitle = photographerWork.sort(filterBy('title'));
      // const option = document.querySelector('.selected')
      //    option.addEventListener('change', function () {
      //      for (let i = 0; i < photographerWork.length; i++) {
      //        if (option.classList.contains('filter__option--1'))
      //          return setGallery(filtredByLikes[i]);
      //        if (option.classList.contains('filter__option--2'))
      //          return setGallery(filtredByDate[i]);
      //        if (option.classList.contains('filter__option--3'))
      //          return setGallery(filtredByTitle[i]);
      //       }
      //     });
      //     console.log(option());

      // // OK MAIS 1 PAR 1 ET SI RECHARGE PAGE ENTRE CHAQUE CLICK
      // // organise les media par popularite
      // const filtredByLikes = photographerWork.sort(filterBy('likes', 'desc'));
      // // affiche la galerie correspondante
      // const popularite = document.querySelector('.filter__option--1');
      // popularite.addEventListener('click', function (e) {
      //   e.preventDefault();
      //   for (let i = 0; i < photographerWork.length; i++) {
      //     setGallery(filtredByLikes[i]);
      //   }
      // });

      // // organise les media par date
      // const filtredByDate = photographerWork.sort(filterBy('date', 'desc'));
      // const date = document.querySelector('.filter__option--2');
      // date.addEventListener('click', function (e) {
      //   e.preventDefault();
      //   // affiche la galerie correspondante
      //   for (let i = 0; i < photographerWork.length; i++) {
      //     setGallery(filtredByDate[i]);
      //   }
      // });

      // // organise les media par titre
      // // A REVOIR cf. filter.js // NE FILTRE PAS...
      // const titre = document.querySelector('.filter__option--3');
      // titre.addEventListener('click', function (e) {
      //   e.preventDefault();
      //   // affiche la galerie correspondante
      // const filtredByTitle = photographerWork.sort(filterBy('title'));
      //   for (let i = 0; i < photographerWork.length; i++) {
      //     setGallery(filtredByTitle[i]);
      //   }
      // });

      // ---------- NE FONCTIONNE PAS ---------- //
      // const option = document.querySelector('.selected');
      // const popularite = document.querySelector('.filter__option--1 .selected');
      // const date = document.querySelector('.filter__option--2 .selected');
      // const titre = document.querySelector('.filter__option--3 .selected');

      // option.addEventListener('change', function (e) {
      //   e.preventDefault();
      //   for (let i = 0; i < photographerWork.length; i++) {
      //     if (popularite) {
      //       setGallery(filtredByLikes[i]);
      //     } else if (date) {
      //       setGallery(filtredByDate[i]);
      //     } else if (titre) {
      //       setGallery(filtredByTitle[i]);
      //     }
      //   }
      // });

      // ---------- NE FONCTIONNE PAS ---------- //
      // const popularite = document.querySelector('.filter__option--1 .selected');
      // const date = document.querySelector('.filter__option--2 .selected');
      // const titre = document.querySelector('.filter__option--3 .selected');

      // const option = document.querySelectorAll('.filter__option .selected');
      // option.forEach((selected) => {
      //   selected.addEventListener('change', function (e) {
      //     e.preventDefault();
      //     for (let i = 0; i < photographerWork.length; i++) {
      //       if (popularite) return setGallery(filtredByLikes[i]);
      //       if (date) return setGallery(filtredByDate[i]);
      //       if (titre) return setGallery(filtredByTitle[i]);
      //     }
      //   });
      // });

      // // ---------- NE FONCTIONNE PAS ---------- //
      // // DEVRAIT FONCTIONNER !
      // let optionValue = document.querySelector('.filter__selected--value')
      // optionValue.addEventListener('change', function (e) {
      //   e.preventDefault();
      //   for (let i = 0; i < photographerWork.length; i++) {
      //     if (optionValue == 'Popularité') return setGallery(filtredByLikes[i]);
      //     if (optionValue =='Date') return setGallery(filtredByDate[i]);
      //     if (optionValue == 'Titre') return setGallery(filtredByTitle[i]);
      //   }
      // });

      // // RECUPERE LE NOM DU MEDIA CHOISI DANS LA GALERIE
      // // const getMedia = (urlMedia, currentMedia) => {
      // const getMedia = (urlPhotographer, urlMedia, currentMedia) => {
      //   urlPhotographer = window.location.search;
      //   urlMedia = new URL(document.location).searchParams;
      //   for (let i = 0; i < urlMedia.length; i++) {
      //     currentMedia = urlMedia.get(urlPhotographer + 'currentMedia')[i];
      //     urlMedia.toString();
      //   }
      //   return currentMedia;
      // };
      // console.log(getMedia()); // undefined

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    })

    // GESTION DES ERREURS // A ETAYER
    .catch((error) => console.log(error.message));
}

fetchData();
