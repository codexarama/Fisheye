let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())
    // RECUPERATION DES DONNEES
    .then((data) => {
      console.log(data);

      // AFFICHE LA CARTE DE CHAQUE PHOTOGRAPHE
      for (let i = 0; i < data.photographers.length; i++) {
        setPhotographers(data.photographers[i]);
      }

      // DOM elements
      const photographersSection =
        document.getElementsByClassName('photographers')[0];
      console.log(photographersSection);

      // AFFICHE PHOTOGRAPHES SELON FILTRE(S) CHOISI(S)
      // ---------------------------------------------------------------------- //
      // SI AUCUN TAG CHOISI > AFFICHAGE PAR DEFAUT DE TOUS LES PHOTOGRAPHES
      // SI 2 TAGS CORRESPONDENT AU MEME PHOTOGRAPHE > NE L'AFFICHER QU'1 FOIS
      // ---------------------------------------------------------------------- //

      const tags = document.querySelectorAll('.tag a');
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
            elmt = elmt.title;
            return elmt;
          });
          console.log(tagsList);

          // pour chaque tag du tableau
          tagsList.forEach((tag) => {
            // affiche photographe(s) dont tag(s) correspond(ent)
            for (let j = 0; j < data.photographers.length; j++) {
              // liste des tags de chaque photographe
              console.log(data.photographers[j].tags);
              // tag choisi = tag photographe
              let selectedTags = data.photographers[j].tags.some(
                // let selectedTags = data.photographers[j].tags.map(
                // let selectedTags = data.photographers[j].tags.filter(
                (elmt) => elmt == tag
              );
              // tag choisi = tag photographe > true / false
              console.log(selectedTags);

              // si tag(s) choisi(s)
              if (selectedTags) {
                // affiche photographes correspondants
                setPhotographers(data.photographers[j]);
              }
            }
          });
        });
      }
    });

  // ----------------------------------------------------------------------------------------------
  // PREMIERE VERSION
  // CHAQUE CLIC SUR UN TAG AFFICHE LES PHOTOGRAPHES QUI ONT CE TAG
  // NE FONCTIONNE PAS POUR SELECTION MULTIPLE DE TAGS
  // PAGE WEB SE RECHARGE A CHAQUE CLIC SUR UN TAG

  // // RECUPERE LE TAG CHOISI
  // // TAG href = `index.html?tag=${photographer.tags}`
  // // const urlParams = window.location.search;
  // // console.log(urlParams); // ?tag="portrait" (...)
  // const getTag = (urlTag, tag) => {
  //   urlTag = new URL(document.location).searchParams;
  //   tag = urlTag.get('tag');
  //   return tag;
  // };
  // console.log(getTag());

  // for (let i = 0; i < data.photographers.length; i++) {
  //   // CIBLE LES PHOTOGRAPHES EN FONCTION DU TAG CHOISI
  //   let selectedTag = data.photographers[i].tags.filter(
  //     (elmt) => elmt == getTag()
  //   );
  //   // console.log(data.photographers[i].tags);
  //   console.log(selectedTag); // tableau du tag sélectionné correspondant si true pour chaque photographe

  //   if (getTag() == null) {
  //     // AFFICHE LA CARTE DE TOUS LES PHOTOGRAPHES
  //     setCard(data.photographers[i]);
  //   } else {
  //     for (let j = 0; j < selectedTag.length; j++) {
  //       // AFFICHE LA CARTE DES PHOTOGRAPHES DONT UN TAG CORRESPOND A CELUI CHOISI
  //       if (selectedTag[j].length > 0) {
  //         setCard(data.photographers[i]);
  //       }
  //     }
  //   }
  // }
  // });
  // ----------------------------------------------------------------------------------------------

  // GESTION DES ERREURS
  // .catch((error) => console.log(error.message));
}
fetchData();

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
