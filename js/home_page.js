let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())
    // RECUPERATION DES DONNEES
    .then((data) => {
      console.log(data);

      // RECUPERE LE TAG CHOISI
      // TAG href = `index.html?tag=${photographer.tags}`
      // const urlParams = window.location.search;
      // console.log(urlParams); // ?tag="portrait" (...)
      const getTag = (urlTag, tag) => {
        urlTag = new URL(document.location).searchParams;
        tag = urlTag.get('tag');
        return tag;
      };
      console.log(getTag());

      const tags = document.querySelectorAll('.tag a');

      for (let i = 0; i < tags.length; i++) {
        tags[i].addEventListener('click', (event) => {
          event.preventDefault();
          tags[i].classList.toggle('selected');
          // console.log(tags[i]);
          let selectedTags = tags[i].classList.contains('selected');
          if (selectedTags) console.log(tags);
          if (!selectedTags) console.log(tags);
          // affiche tableau tags complet avec a ou a.selected actualisé à chaque click
          tagsList = document.querySelectorAll('a.selected');
          console.log(tagsList); // affiche tableau contenant uniquement les tags selectionnes

          // ---------------------------------------------------------------------------------
          for (let i = 0; i < data.photographers.length; i++) {
            // CIBLE LES PHOTOGRAPHES EN FONCTION DU TAG CHOISI
              const tagsFilter = data.photographers[i].tags.filter((elmt) => elmt == getTag());
              console.log(tagsFilter);
          }
          // ---------------------------------------------------------------------------------
        });
      }

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
    });

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
