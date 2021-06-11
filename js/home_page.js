// APPEL API, CALLBACK, (...) RETOUR PROMESSE
fetch('fisheye_data.json')
  .then((response) => response.json())
  // RECUPERATION DES DONNEES
  .then((data) => {
    // console.log(data);

    // AFFICHE PHOTOGRAPHES SELON TAG CHOISI DANS SA CARTE
    // RECUPERE LE TAG CHOISI via url
    const getTag = (urlTag, tag) => {
      urlTag = new URL(document.location).searchParams;
      tag = urlTag.get('tag');
      return tag;
    };
    // console.log(getTag());

    // CIBLE LES PHOTOGRAPHES EN FONCTION DU TAG CHOISI
    for (let i = 0; i < data.photographers.length; i++) {
      let selectedTag = data.photographers[i].tags.filter(
        (elmt) => elmt == getTag()
      );

      // AFFICHE LA CARTE DE TOUS LES PHOTOGRAPHES QUAND AUCUN TAG CHOISI
      if (getTag() == null) {
        setPhotographers(data.photographers[i]);
      } else {
        // AFFICHE LA CARTE DES PHOTOGRAPHES CORRESPONDANT AU TAG CHOISI
        for (let j = 0; j < selectedTag.length; j++) {
          if (selectedTag[j].length > 0) {
            setPhotographers(data.photographers[i]);
          }
        }
      }
    }

    // DOM elements
    const photographersSection =
      document.getElementsByClassName('photographers')[0];
    const tags = document.querySelectorAll('.tagNav a');
    for (let i = 0; i < tags.length; i++) {
      // quand click sur tag
      tags[i].addEventListener('click', (event) => {
        event.preventDefault();

        // SUPPRIME LES CARTES DEJA CHARGEES
        photographersSection.innerHTML = '';

        // ajoute toggle "selected"
        tags[i].classList.toggle('selected');
        const selected = document.querySelectorAll('a.selected');

        // tableau des tags choisis
        let tagsList = Array.from(selected).map((elmt) => {
          elmt = elmt.id;
          return elmt;
        });
        // console.log(tagsList);

        // tableau vide pour recuperation tags choisi
        let photographers = [];

        // pour chaque tag choisi
        tagsList.filter((tag) => {
          for (let j = 0; j < data.photographers.length; j++) {
            const selectedTags = data.photographers[j].tags.some(
              (elmt) => elmt == tag
            );
            // console.log(selectedTags); // correspondance tag true / false

            // si tag(s) choisi(s), recupere photographes correspondants dans tableau dedie
            if (selectedTags && !photographers.includes(data.photographers[j]))
              photographers.push(data.photographers[j]);
          }
        });
        // affiche photographe(s) dont tag(s) correspond(ent)
        photographers.forEach((photographer) => {
          setPhotographers(photographer);
        });

        // AFFICHE TOUS LES PHOTOGRAPHES SI AUCUN TAG N'EST CHOISI
        if (tagsList.length == 0) location.reload();
      });
    }
  })

  // GESTION DES ERREURS
  .catch((error) => console.log(error.message));

// GESTION DU BOUTON D'EVITEMENT SELON SCROLL
// mobile screens
const evitement = document.querySelector('.evitement');
window.addEventListener('scroll', () => {
  if (window.scrollY > 250) evitement.classList.add('scroll');
  else evitement.classList.remove('scroll');
});

// DEMONSTRATION ACCESSIBLITE
// document.addEventListener('keydown', (KeyboardEvent) => {
//   console.log(KeyboardEvent.key);
// });
