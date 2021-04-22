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
    { class: 'id' },
    elmtFactory(
      'div',
      { class: 'id__card' },
      elmtFactory('h2', { class: 'card__name' }, `${photographer.name}`),
      elmtFactory(
        'p',
        { class: 'card__location' },
        `${photographer.city}` + ', ' + `${photographer.country}`
      ),
      elmtFactory('p', { class: 'card__tagline' }, `${photographer.tagline}`),
      elmtFactory('p', { class: 'card__price' }, `${photographer.price}` + '€'),
      elmtFactory('ul', { class: 'tags' })
    ),
    elmtFactory(
      'div',
      { class: 'id__contact' },
    ),
    elmtFactory(
      'div',
      { class: 'id__image' },
      elmtFactory('img', {
        src: 'images/portraits/' + `${photographer.portrait}`,
        alt: `${photographer.name}`,
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
        { href: `index.html?tag=${photographer.tags[j]}`, class: 'tagLink' },
        '# ' + `${photographer.tags[j]}`
      )
    );
    tagsList.appendChild(tags);
  }

  const contact = id.querySelector(".id__contact")
  contact.appendChild(btnContact)
  sectionId.appendChild(id);
  main.setAttribute('id', `${photographer.id}`);
  title.textContent = "Fisheye | " + `${photographer.name}`;
};
