// FETCH API
let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })

    // GESTION DES ERREURS
    .catch((error) => console.log(error.message));
}