// FONCTION : CREATION D'UN PROFIL TYPE
// APPEL FONCTION elmtFactory ()
// INJECTION DES DONNEES DANS ITEM CORRESPONDANT
const title = document.querySelector('title');
const main = document.querySelector('main');
const sectionId = document.querySelector('.id');
const btnContact = document.querySelector('.btn-contact');

const setId = (photographer) => {
  const id = elmtFactory(
    'article',
    { class: 'id__card' },
    elmtFactory(
      'div',
      { class: 'id__infos' },
      elmtFactory(
        'h2',
        { class: 'photographer__name', tabindex: '0' },
        `${photographer.name}`
      ),
      elmtFactory(
        'p',
        { class: 'photographer__location', tabindex: '0' },
        `${photographer.city}` + ', ' + `${photographer.country}`
      ),
      elmtFactory(
        'p',
        { class: 'photographer__tagline', tabindex: '0' },
        `${photographer.tagline}`
      ),
      elmtFactory(
        'p',
        { class: 'photographer__price', tabindex: '0' },
        `${photographer.price}` + '€'
      ),
      elmtFactory('ul', { class: 'tags' })
    ),
    elmtFactory('div', { class: 'id__contact' }),
    elmtFactory(
      'div',
      { class: 'id__image' },
      elmtFactory('img', {
        src: 'images/portraits/' + `${photographer.portrait}`,
        alt: `${photographer.name}`,
        tabindex: '0',
      })
    )
  );

  const tagsList = id.getElementsByClassName('tags')[0];
  for (let j = 0; j < photographer.tags.length; j++) {
    const tags = elmtFactory(
      'li',
      { class: 'tag' },
      elmtFactory(
        'a',
        {
          href: `index.html?tag=${photographer.tags[j]}`,
          rel: 'tag',
          class: `${photographer.tags[j]}`,
        },
        '#' + `${photographer.tags[j]}`
      )
    );
    tagsList.appendChild(tags);
  }

  const contact = id.querySelector('.id__contact');
  contact.appendChild(btnContact);
  sectionId.appendChild(id);
  main.setAttribute('id', `${photographer.id}`);
  // AFFICHE LE TITRE DE LA PAGE PRO DU PHOTOGRAPHE CHOISI SELON CANEVAS = Fisheye : Prenom Nom
  title.textContent = 'Fisheye : ' + `${photographer.name}`;
};
