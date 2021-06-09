// OUVRE - FERME LISTBOX
// ajoute / retire attributs
document.querySelector('.filter').addEventListener('click', () => {
  document.querySelector('.filter__box').classList.toggle('open');
  document
    .querySelector('.filter__box')
    .removeAttribute('aria-expanded', 'false');
  if (document.querySelector('.filter__box').classList.contains('open'))
    document
      .querySelector('.filter__box')
      .setAttribute('aria-expanded', 'true');
  else
    document
      .querySelector('.filter__box')
      .setAttribute('aria-expanded', 'false');

  // ajuste apparence
  if (optionTitre.classList.contains('selected'))
    optionDate.style.borderRadius = '0 0 3px 3px';
});

// DOM elements
const listbox = document.querySelector('[role="listbox"]');
const options = [...listbox.children];
const optionPop = document.getElementsByClassName('filter__option--1')[0];
const optionDate = document.getElementsByClassName('filter__option--2')[0];
const optionTitre = document.getElementsByClassName('filter__option--3')[0];
const filterBoxOpen = document.getElementsByClassName('open');

// IDENTITFIE OPTION CHOISIE
// NAVIGATION SOURIS
listbox.addEventListener('click', (event) => {
  const selectedOption = event.target.closest('li');
  if (!selectedOption) return;

  // retire "selected" sur ancienne option
  // affecte "selected" sur nouvelle option
  options.forEach((option) => option.classList.remove('selected'));
  selectedOption.classList.add('selected');
  // remplace texte bouton par nom option choisie
  selectedOption
    .closest('.filter__box')
    .querySelector('.filter__selected').textContent =
    selectedOption.textContent;
});

// FERME LISTBOX SI CLICK HORS BOX
window.addEventListener('click', function (e) {
  const filterBox = document.querySelector('.filter__box');
  if (!filterBox.contains(e.target)) {
    filterBox.classList.remove('open');
  }
});

// IDENTITFIE OPTION CHOISIE
// NAVIGATION CLAVIER
const showOption = document.querySelector('.filter__selected');
const arrowUpBtn = document.querySelector('.filter__arrow');

// filtre choisi = activedescendant
const getActiveDescendant = () => {
  const activeDescendant = showOption.getAttribute('aria-activedescendant');
  return document.querySelector('#' + activeDescendant);
};

const setActiveDescendant = (option) => {
  if (!option) return;
  const id = option.id;
  let selectedOption = listbox.querySelector('#' + id);

  // retire "selected" + "aria-selected=true" sur ancienne option
  showOption.setAttribute('aria-activedescendant', id);
  showOption.setAttribute('aria-label', 'Médias triés par ' + id);
  options.forEach((option) => {
    option.classList.remove('selected');
    option.removeAttribute('aria-selected');
  });

  // affecte "selected" + "aria-selected=true" sur nouvelle option
  selectedOption.classList.add('selected');
  selectedOption.setAttribute('aria-selected', 'true');

  // retourne fleche bouton quant atteint 1er ou dernier item de la liste
  if (options[0].classList.contains('selected'))
    arrowUpBtn.style.transform = 'rotateX(0deg)';
  // console.log(options[0]);
  if (options[options.length - 1].classList.contains('selected'))
    arrowUpBtn.style.transform = 'rotateX(180deg)';
  // console.log(options[options.length - 1]);

  // remplace texte bouton par nom option choisie
  showOption.textContent = selectedOption.textContent;
};

// si flèche haut / bas pressee
showOption.addEventListener('keydown', (event) => {
  const { key } = event;
  if (key !== 'ArrowDown' && key !== 'ArrowUp') return;
  event.preventDefault();

  // filtre choisi = activedescendant
  const activeDescendant = getActiveDescendant(showOption);
  // console.log(activeDescendant);

  if (!activeDescendant) {
    const firstOption = options[1]; // !0 car 1er element de la liste selectionne par defaut
    const lastOption = options[options.length - 1];

    // recupere choix si premier / dernier de la liste
    if (key === 'ArrowDown') return setActiveDescendant(firstOption);
    if (key === 'ArrowUp') return setActiveDescendant(lastOption);
  }

  // recupere choix si entre premier / dernier de la liste
  if (key === 'ArrowDown')
    return setActiveDescendant(activeDescendant.nextElementSibling);
  if (key === 'ArrowUp')
    return setActiveDescendant(activeDescendant.previousElementSibling);
});
