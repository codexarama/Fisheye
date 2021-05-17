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
      const photographerWorks = data.media.filter(
        (elmt) => elmt.photographerId == getId()
      );
      console.log(photographerWorks); // array media by ID

      // ---------- A RESOUDRE ---------- //
      // LANCE L'AFFICHAGE DE LA GALERIE FILTREE PAR POPULARITE PAR DEFAUT
      // PB : ATTRIBUT "selected" EST DEJA POSITIONNE SUR "popularite"
      // enventListener SE DECLANCHE AU CLICK DONC "selected" N'EST PAS DETECTE
      // AU CHARGEMENT DE LA PAGE

      // ---------- NE FONCTIONNE PAS ---------- //
      // window.onload = () => {
      //   launchGallery();
      // };

      // AFFICHE LA GALLERIE SELON FILTRE CHOISI
      const gallery = document.getElementsByClassName('gallery')[0];
      const galleryCard = document.getElementsByClassName('gallery__card');

      const launchGallery = () => {
        // ---------- SUPPRIMER SI POSSIBLE ---------- //
        for (let i = 0; i < photographerWorks.length; i++) {
          // affiche la galerie triee par popularite (par defaut)
          location.hash = 'filtre popularite';
          setGallery(photographerWorks.sort(filterBy('likes', 'desc'))[i]);
        }
        // ------------------------------------------ //

        for (const option of document.querySelectorAll('.filter__option')) {
          option.addEventListener('click', function () {
            for (let j = 0; j < galleryCard.length; j++) {
              // reset la gallerie si autre option choisie
              while (galleryCard.length > 0) {
                gallery.removeChild(galleryCard[0]);
              }
            }

            for (let i = 0; i < photographerWorks.length; i++) {
              // affiche la galerie triee par date
              if (option.classList.contains('filter__option--2')) {
                location.hash = 'filtre date';
                setGallery(photographerWorks.sort(filterBy('date', 'desc'))[i]);
              }
              // affiche la galerie triee par titre
              if (option.classList.contains('filter__option--3')) {
                location.hash = 'filtre titre';
                setGallery(photographerWorks.sort(filterBy('title'))[i]);
              }
              // affiche la galerie triee par popularite
              if (option.classList.contains('filter__option--1')) {
                location.hash = 'filtre popularite';
                setGallery(
                  photographerWorks.sort(filterBy('likes', 'desc'))[i]
                );
              }
            }
            // COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
            likesCount();
            // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX (galerie filtree)
            setLightbox();
          });
        }
        // ---------- SUPPRIMER SI POSSIBLE ---------- //
        // COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
        likesCount();
        // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX (galerie par defaut)
        setLightbox();
        // ------------------------------------------ //
      };
      launchGallery();

      // ---------- NE FONCTIONNE PAS ---------- //
      // (function() {launchGallery()})();

      // AFFICHE LE NOMBRE TOTAL DE LIKES DU PHOTOGRAPHE
      const totalLikesCounter = () => {
        const totalCounter = document.querySelector('#total-likes');
        totalLikes = 0;
        photographerWorks.forEach((work) => (totalLikes += work.likes));
        totalCounter.value = `${totalLikes}`;
      };
      totalLikesCounter();

      // AFFICHE LE PRIX PAR JOUR
      const pricePerDay = document.querySelector("#pricePerDay")
      pricePerDay.textContent = photographerData.price + ' € / jour';

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    })

    // AFFICHE LES ERREURS EN CONSOLE
    .catch((error) => console.log(error.message));
}

fetchData();
