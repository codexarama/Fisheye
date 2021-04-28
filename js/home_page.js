let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';

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

      for (let i = 0; i < data.photographers.length; i++) {
        // AFFICHE LA CARTE DE TOUS LES PHOTOGRAPHES
        setCard(data.photographers[i]);
        // CIBLE LES PHOTOGRAPHES EN FONCTION DU TAG CHOISI
        const selectedTag = data.photographers.filter(
          (elmt) => elmt.tags[i] == getTag()
        );
        // console.log(data.photographers[i].tags);
        console.log(selectedTag); // tableau complet de chaque photographe dont le tag correspond
        // const filtredIndex = data.photographers.filter(
        //   (elmt) => elmt[i].selectedTag == setcard(filtredIndex)
        // )[0];
        // console.log(filtredIndex);

      }

      // ESSAIS
      // for (let j = 0; j < selectedTag; j++) {
      //   if (selectedTag !== undefined) {
      //     const filtredIndex =
      //   }
      // }
      //   function filtredIndex (tag) {
      //     if (tag.selectedTag !== undefined) {
      //       return true;
      //     }
      //   }
    });
  // GESTION DES ERREURS
  // .catch((error) => console.log(error.message));
}
fetchData();
