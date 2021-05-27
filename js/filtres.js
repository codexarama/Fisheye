// OUVRE - FERME LISTBOX
document.querySelector('.filter').addEventListener('click', () => {
  this.querySelector('.filter__box').classList.toggle('open');
  this.querySelector('.filter__box').removeAttribute('aria-expanded');
  this.querySelector('.filter__box').setAttribute('aria-expanded', 'true');
});

const listbox = document.querySelector('[role="listbox"]');
// console.log(listbox);
const options = [...listbox.children];
// console.log(options);

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
  const select = document.querySelector('.filter__box');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
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

  // gestion des styles au focus
  // ATTENTION ecrire mots composes en Camel
  // ---------- NE FONCTIONNE PAS ---------- //
  // let styles = {
  //   background: '#db8876',
  //   borderLeft: '10px solid #db8876',
  //   borderRight: '10px solid #db8876',
  //   color: 'black',
  //   fontWeight: '700',
  // };
  // console.log(styles);

  // retire "selected" + "aria-selected=true" sur ancienne option
  showOption.setAttribute('aria-activedescendant', id);
  options.forEach((option) => {
    option.classList.remove('selected');
    option.removeAttribute('aria-selected');
    // if (!option.classList.contains("selected"))
    // option.setAttribute(
    //   'style',
    //   'background: #db8876; border-left: 10px solid #db8876; border-right: 10px solid #db8876; color: black; font-weight: 700;'
    // );
    // option.removeAttribute('style');
  });

  // affecte "selected" + "aria-selected=true" sur nouvelle option
  selectedOption.classList.add('selected');
  selectedOption.setAttribute('aria-selected', 'true');
  // selectedOption.removeAttribute('style');
  // selectedOption.setAttribute(
  //   'style',
  //   'background: #db8876; border-left: 10px solid #db8876; border-right: 10px solid #db8876; color: black; font-weight: 700;'
  // );

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
