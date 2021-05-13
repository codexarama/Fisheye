// OUVRE - FERME LISTBOX
document.querySelector('.filter').addEventListener('click', function () {
  this.querySelector('.filter__box').classList.toggle('open');
  this.querySelector('.filter__box').removeAttribute('aria-expanded');
  this.querySelector('.filter__box').setAttribute('aria-expanded', 'true');
});

const listbox = document.querySelector('[role="listbox"]');
// console.log(listbox);
const options = [...listbox.children];
// console.log(options);

// IDENTITFIE OPTION CHOISIE
// navigation souris
listbox.addEventListener('click', (event) => {
  const selectedOption = event.target.closest('li');
  if (!selectedOption) return;

  // ACCESSIBILITE
  // attribue valeur aria-activedescendant
  listbox.setAttribute('aria-activedescendant', selectedOption.id);

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

// NAVIGATION CLAVIER
let listboxBtn = document.querySelector('#orderBy');

// listboxBtn = listbox;
// console.log(listboxBtn);

listbox.addEventListener('keydown', (event) => {
  const { key } = event;
  if (key !== 'ArrowDown') return;

  listbox.setAttribute('aria-activedescendant', selectedOption.id);
  const activeElementID = listbox.getAttribute('aria-activedescendant');
  console.log(activeElementID);
  const activeElement = listbox.querySelector('#' + activeElementID);
  console.log(activeElement);
  // const selectedOption = activeElement.nextElementSibling;
  // const nextElement = activeElement.nextElementSibling;

  // if (nextElement) {
  //   // attribue valeur aria-activedescendant
  //   listbox.setAttribute('aria-activedescendant', selectedOption.id);

  //   // retire "selected" sur ancienne option
  //   // affecte "selected" sur nouvelle option
  //   options.forEach((option) => option.classList.remove('selected'));
  //   selectedOption.classList.add('selected');
  // }
});
