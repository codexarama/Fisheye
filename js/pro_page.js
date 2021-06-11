// APPEL API, CALLBACK, (...) RETOUR PROMESSE
fetch('fisheye_data.json')
       .then((response) => response.json())

  // RECUPERE DONNEES
  .then((data) => {
    // console.log(data);

    // ----- profile section ----- //
    // RECUPERE L'ID DU PHOTOGRAPHE QUAND SA CARTE EST CLIQUEE
    // via href photographer card (home page)
    const getId = (urlId, id) => {
      urlId = new URL(document.location).searchParams;
      id = urlId.get('id');
      return id;
    };
    // console.log(getId()); // n° id

    // ----- gestion donnees ----- //
    // RECUPERE LES DONNEES DU PHOTOGRAPHE CHOISI
    const photographerData = data.photographers.filter(
      (elmt) => elmt.id == getId()
    )[0];
    // console.log(photographerData); // array data by ID

    // AFFICHE SON PROFIL
    setId(photographerData);

    // RECUPERE SES MEDIAS
    const photographerWorks = data.media.filter(
      (elmt) => elmt.photographerId == getId()
    );
    // console.log(photographerWorks); // array media by ID

    // ----- gallery section  ----- //
    // DOM elements
    const gallery = document.getElementsByClassName('gallery')[0];
    const galleryCard = document.getElementsByClassName('gallery__card');

    // AFFICHE SA GALLERIE SELON FILTRE CHOISI
    const launchGallery = () => {
      for (let i = 0; i < photographerWorks.length; i++) {
        // affiche filtre par defaut dans url
        location.hash = 'filtre popularite';
        // affiche galerie triee par popularite (par defaut)
        setGallery(photographerWorks.sort(filterBy('likes', 'desc'))[i]);
      }

      for (const option of document.querySelectorAll('.filter__option')) {
        option.addEventListener('click', () => {
          for (let j = 0; j < galleryCard.length; j++) {
            // reset gallerie si autre option choisie
            while (galleryCard.length > 0) {
              gallery.removeChild(galleryCard[0]);
            }
          }

          for (let i = 0; i < photographerWorks.length; i++) {
            const filterByDate = () => {
              // si filtre "date" choisi
              if (option.textContent.trim() == 'Date') {
                // affiche filtre correspondant dans url
                location.hash = 'filtre date';
                // trie galerie par date
                setGallery(photographerWorks.sort(filterBy('date', 'desc'))[i]);
              }
            };
            filterByDate();

            const filterByTitle = () => {
              // si filtre "titre" choisi
              if (option.textContent.trim() == 'Titre') {
                // affiche filtre correspondant dans url
                location.hash = 'filtre titre';
                // trie galerie par titre
                setGallery(photographerWorks.sort(filterBy('title'))[i]);
              }
            };
            filterByTitle();

            const filterByPop = () => {
              // si filtre "popularite" choisi
              if (option.textContent.trim() == 'Popularité') {
                // affiche filtre correspondant dans url
                location.hash = 'filtre popularite';
                // trie galerie par popularite
                setGallery(
                  photographerWorks.sort(filterBy('likes', 'desc'))[i]
                );
              }
            };
            filterByPop();
          }

          // ACTUALISE COMPTEUR DE LIKES
          likesCount();

          // AFFICHE MEDIA CHOISI DANS LIGHTBOX (galerie filtree)
          displayLightbox();
        });

        // FILTRE GALERIE PAR NAVIGATION CLAVIER
        showOption.addEventListener('keydown', () => {
          // gestion apparence
          if (filterBoxOpen) {
            showOption.style.borderRadius = '3px 3px 3px 3px';
            listbox.style.display = 'none';
          }

          // simule click sur option au keydown
          if (showOption.textContent.trim() == 'Date') optionDate.click();
          if (showOption.textContent.trim() == 'Titre') optionTitre.click();
          if (showOption.textContent.trim() == 'Popularité') optionPop.click();
        });
      }

      // ACTUALISE COMPTEUR DE LIKES
      likesCount();

      // AFFICHE MEDIA CHOISI DANS LIGHTBOX (galerie par defaut)
      displayLightbox();
    };

    launchGallery();

    // ----- labels + inputs likes counter ----- //
    function setAttributes(elmt, attribute) {
      for (let key in attribute) {
        elmt.setAttribute(key, attribute[key]);
      }
    }

    // LABELS : ajout id & for
    const likeCounterLabel = document.querySelectorAll(
      '.gallery__likes--label'
    );
    // console.log(likeCounterLabel);
    for (let i = 0; i < likeCounterLabel.length; i++) {
      let label = likeCounterLabel[i];
      // console.log(label);
      label.setAttribute('aria-label', 'likes');
      setAttributes(label, {
        id: 'likes-counter' + i,
        for: 'likes' + i,
      });
    }

    // INPUTS : ajout id
    const likeCounterInput = document.querySelectorAll(
      '.gallery__likes--count'
    );
    for (let i = 0; i < likeCounterInput.length; i++) {
      let input = likeCounterInput[i];
      // console.log(input);
      setAttributes(input, {
        id: 'likes' + i,
      });
    }

    // ----- footer section  ----- //
    // AFFICHE NOMBRE TOTAL DE LIKES
    const totalLikesCounter = () => {
      const totalCounter = document.querySelector('#total-likes');
      totalLikes = 0;
      photographerWorks.forEach((work) => (totalLikes += work.likes));
      totalCounter.value = `${totalLikes}`;

      // ACCESSIBILITE
      let likesFooterAnnouncer = document.querySelector(
        'footer span.visually-hidden'
      );
      likesFooterAnnouncer.addEventListener('keyup', () => {
        likesFooterAnnouncer.textContent = totalCounter.value + 'likes au compteur';
      });
    };
    totalLikesCounter();

    // AFFICHE PRIX PAR JOUR
    const pricePerDay = document.querySelector('#pricePerDay');
    pricePerDay.textContent = photographerData.price + ' € / jour';

    // ----- contact form  ----- //
    // NOM ACCESSIBLE
    const formAria = document.querySelector('#form-dialog');
    formAria.setAttribute('aria-label', 'contacter + photographerData.name');
    // AFFICHE NOM PHOTOGRAPHE EN TITRE DU FORMULAIRE
    const formName = document.querySelector('.form__body--name');
    formName.textContent = photographerData.name;
  })

  // AFFICHE ERREURS CONSOLE
  .catch((error) => console.log(error.message));

// DEMONSTRATION ACCESSIBLITE
// document.addEventListener('keydown', (KeyboardEvent) => {
//   console.log(KeyboardEvent.key);
// });
