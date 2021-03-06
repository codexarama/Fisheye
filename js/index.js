// FONCTION : CREATION D'UNE CARTE TYPE
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
const section = document.querySelector('section');
section.setAttribute('class', 'photographers');

const setPhotographers = (photographer) => {
  const photographers = elmtFactory(
    'article',
    { class: 'photographer' },
    elmtFactory(
      'a',
      {
        id: `${photographer.id}`,
        // CREE UNE url SPECIFIQUE POUR CHAQUE PHOTOGRAPHE (selon id)
        // OUVRE LA PAGE PRO TYPE DU PHOTOGRAPHE CORRESPONDANT
        href: `propage.html?id=${photographer.id}`,
        class: 'photographerId',
      },
      elmtFactory(
        'div',
        { class: 'photographer__image' },
        elmtFactory('img', {
          src: `images/portraits/${photographer.portrait}`,
          alt: '',
          tabindex: '0',
        })
      ),
      elmtFactory(
        'h2',
        { class: 'photographer__name', tabindex: '0' },
        `${photographer.name}`
      )
    ),
    elmtFactory(
      'p',
      { class: 'photographer__location', tabindex: '0' },
      `${photographer.city}, ${photographer.country}`
    ),
    elmtFactory(
      'p',
      { class: 'photographer__tagline', tabindex: '0' },
      `${photographer.tagline}`
    ),
    elmtFactory(
      'p',
      { class: 'photographer__price', tabindex: '0' },
      `${photographer.price} €`
    ),
    elmtFactory('ul', { class: 'tags' })
  );

  const tagsList = photographers.getElementsByClassName('tags')[0];
  for (let j = 0; j < photographer.tags.length; j++) {
    const tags = elmtFactory(
      'li',
      { class: 'tag' },
      elmtFactory(
        'a',
        // CREE UNE url SPECIFIQUE POUR CHAQUE TAG (au clic)
        {
          href: `?tag=${photographer.tags[j]}`,
          rel: 'tag',
          title: `${photographer.tags[j]}`,
          class: `${photographer.tags[j]}`,
        },
        `# ${photographer.tags[j]}`
      )
    );
    tagsList.appendChild(tags);
  }

  section.appendChild(photographers);
};
