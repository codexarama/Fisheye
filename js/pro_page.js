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

      // AFFICHE LA GALLERIE SELON FILTRE CHOISI
      const gallery = document.getElementsByClassName('gallery')[0];
      const galleryCard = document.getElementsByClassName('gallery__card');

      const launchGallery = () => {
        for (let i = 0; i < photographerWork.length; i++) {
          // affiche la galerie triee par popularite (par defaut)
          location.hash = 'filtre popularite';
          setGallery(photographerWork.sort(filterBy('likes', 'desc'))[i]);
        }

        for (const option of document.querySelectorAll('.filter__option')) {
          option.addEventListener('click', function () {
            for (let j = 0; j < galleryCard.length; j++) {
              // reset la gallerie si autre option choisie
              while (galleryCard.length > 0) {
                gallery.removeChild(galleryCard[0]);
              }
            }

            for (let i = 0; i < photographerWork.length; i++) {
              // affiche la galerie triee par date
              if (option.classList.contains('filter__option--2')) {
                location.hash = 'filtre date';
                setGallery(photographerWork.sort(filterBy('date', 'desc'))[i]);
              }
              // affiche la galerie triee par titre
              if (option.classList.contains('filter__option--3')) {
                location.hash = 'filtre titre';
                setGallery(photographerWork.sort(filterBy('title'))[i]);
              }
              // affiche la galerie triee par popularite
              if (option.classList.contains('filter__option--1')) {
                location.hash = 'filtre popularite';
                setGallery(photographerWork.sort(filterBy('likes', 'desc'))[i]);
              }
            }
            // COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
            likesCount();
            // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX (galerie filtree)
            setLightbox();
          });
        }
        // COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
        likesCount();
        // AFFICHE LE MEDIA CHOISI DANS LA LIGHTBOX (galerie par defaut)
        setLightbox();
      };
      launchGallery();

      // AFFICHE LE NOM DU PHOTOGRAPHE EN TITRE DU FORMULAIRE DE CONTACT
      const formName = document.querySelector('.form__body--name');
      formName.textContent = photographerData.name;
    })

    // AFFICHE LES ERREURS EN CONSOLE
    .catch((error) => console.log(error.message));
}

fetchData();
