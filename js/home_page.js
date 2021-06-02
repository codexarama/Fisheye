let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())
    // RECUPERATION DES DONNEES
    .then((data) => {
      console.log(data);

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
        // console.log(data.photographers[i].tags);
        // console.log(selectedTag);

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

      // AFFICHE PHOTOGRAPHES SELON TAG(S) CHOISI(S) DANS LA BARRE DE NAVIGATION
      // ---------------------------------------------------------------------- //
      // SI 2 TAGS CORRESPONDENT AU MEME PHOTOGRAPHE > NE L'AFFICHER QU'1 FOIS
      // ---------------------------------------------------------------------- //

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
            elmt = elmt.title;
            return elmt;
          });
          console.log(tagsList);

          // recupere l'id de chaque photographe
          var photographerId =
            document.getElementsByClassName('photographerId');

          // pour chaque tag du tableau
          tagsList.filter((tag) => {
            // affiche photographe(s) dont tag(s) correspond(ent)
            for (let j = 0; j < data.photographers.length; j++) {
              // liste des tags de chaque photographe
              // console.log(data.photographers[j].tags);

              const selectedTags = data.photographers[j].tags.some(
                (elmt) => elmt == tag
              );
              // console.log(selectedTags);

              // si tag(s) choisi(s) affiche photographes correspondants
              if (selectedTags) setPhotographers(data.photographers[j]);
              // ou
              //   const filterPage = async () => {
              //     if (selectedTags) setPhotographers(data.photographers[j]);
              //   };
              //   filterPage();
            }

            // FONCTION : RETIRE DOUBLONS ID PHOTOGRAPHES dont plusieurs tags correspondent
            const uniqueId = (idList) => {
              idList = Array.from(photographerId).map((id) => {
                id = id.id;
                return id;
              });
              return [...new Set(idList)];
            };
            console.log(uniqueId());
          });

          // AFFICHE TOUS LES PHOTOGRAPHES SI AUCUN TAG N'EST CHOISI
          if (tagsList.length == 0) location.reload();
        });
      }
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
