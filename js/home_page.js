let url =
  'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json';

function fetchData() {
  // APPEL API, CALLBACK, (...) RETOUR PROMESSE
  fetch(url)
    .then((response) => response.json())
    // RECUPERATION DES DONNEES
    .then((data) => {
      console.log(data);

      // AFFICHAGE DES DONNEES
      for (let i = 0; i < data.photographers.length; i++) {
        setCard(data.photographers[i]);
      }

      // RECUPERE LE(S) TAG(S) SELECTIONNE(S)
      // TAG href = `index.html?tag=${photographer.tags}`
      // const urlParams = window.location.search;
      // console.log(urlParams); // ?tag="portrait" (...)
      const getTag = (urlTag, tag) => {
        urlTag = new URL(document.location).searchParams;
        tag = urlTag.get('tag');
        return tag;
      };
      console.log(getTag()); // "portrait"

      // CIBLE LES PHOTOGRAPHES EN FONCTION DU FILTRE CHOISI
      for (let j = 0; j < data.photographers.lenght; j++) {
        const photographerTag = data.photographers.filter(
          (elmt) => elmt.tags == getTag()
        )[0];
        console.log(photographerTag[j]); // RIEN DANS LA CONSOLE
      }

      // // CIBLE LES PHOTOGRAPHES EN FONCTION DU FILTRE CHOISI
      //   const photographerTag = data.photographers.filter(
      //     (elmt) => elmt.tags == getTag()
      //   )[0];
      //   console.log(photographerTag[j]); // undefined

    })
    // GESTION DES ERREURS
    .catch((error) => console.log(error.message));
}

fetchData();

// FONCTION : CREATION D'UNE CARTE TYPE
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
const section = document.querySelector('section');
section.setAttribute('class', 'photographers');

const setCard = (photographer) => {
  const card = elmtFactory(
    'article',
    { class: 'card' },
    elmtFactory(
      'a',
      {
        id: `${photographer.id}`,
        // CREE UNE url SPECIFIQUE POUR CHAQUE PHOTOGRAPHE (selon id)
        href: `propage.html?id=${photographer.id}`,
        class: 'photographerId',
      },
      elmtFactory(
        'div',
        { class: 'card__image' },
        elmtFactory('img', {
          src: '/images/portraits/' + `${photographer.portrait}`,
          alt: `${photographer.name}`,
        })
      ),
      elmtFactory('h2', { class: 'card__name' }, `${photographer.name}`)
    ),
    elmtFactory(
      'p',
      { class: 'card__location' },
      `${photographer.city}` + ', ' + `${photographer.country}`
    ),
    elmtFactory('p', { class: 'card__tagline' }, `${photographer.tagline}`),
    elmtFactory('p', { class: 'card__price' }, `${photographer.price}` + '€'),
    elmtFactory('ul', { class: 'tags' })
  );

  const tagsList = card.getElementsByClassName('tags')[0];
  for (let j = 0; j < photographer.tags.length; j++) {
    const tags = elmtFactory(
      'li',
      { class: 'tag' },
      elmtFactory(
        'a',
        // { href: '', class: 'tagLink' },
        { href: `index.html?tag=${photographer.tags[j]}`, class: 'tagLink' },
        '# ' + `${photographer.tags[j]}`
      )
    );
    tagsList.appendChild(tags);
  }

  section.appendChild(card);
};
