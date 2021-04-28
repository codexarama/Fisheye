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
        // CIBLE LES PHOTOGRAPHES EN FONCTION DU TAG CHOISI
        let selectedTag = data.photographers.filter(
          (elmt) => elmt.tags[i] == getTag()
        );
        // console.log(data.photographers[i].tags);
        console.log(selectedTag); // tableau complet de chaque photographe dont le tag correspond

        if (getTag() == null) {
          // AFFICHE LA CARTE DE TOUS LES PHOTOGRAPHES
          setCard(data.photographers[i]);
        // } else {
          // for (let j = 0; j < selectedTag.length; j++) {
          //   return selectedTag[j].length > 0
          // }

          // setCard() affiche tous les selectedTag.lenght > 0
          // for (let j = 0; j < selectedTag; j++) {
          //   const filteredIndex = selectedTag[j].lenght > 0
          //   console.log(filteredIndex);
          // }
        }
      }

    //   selectedTag = document.querySelectorAll('li');
    //   selectedTag.forEach((elmt) => {
    //     elmt.addEventListener('click', (e) => {
    //       e.preventDefault();
    //       setCard(data.photographers[i]);
    //   })
    // })
  })
  // GESTION DES ERREURS
  // .catch((error) => console.log(error.message));
}
fetchData();
