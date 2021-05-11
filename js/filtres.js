// AFFICHE NOM OPTION PAR DEFAUT
document.querySelector('.filter__selected').setAttribute('value', 'Popularité');

// IDENTITFIE OPTION CHOISIE
// ouvre la box au click
document.querySelector('.filter').addEventListener('click', function () {
  this.querySelector('.filter__box').classList.toggle('open');
});

// itere sur les options
for (const option of document.querySelectorAll('.filter__option')) {
  option.addEventListener('click', function () {
    if (!option.classList.contains('selected')) {
      option.parentNode
      // retire "selected" sur ancienne option
        .querySelector('.filter__option.selected')
        .classList.remove('selected');
      // affecte "selected" sur nouvelle option
      option.classList.add('selected');
      option
        .closest('.filter__box')
        .querySelector('.filter__selected')
        // affecte classe "button" sur input
        .classList.add('btn');
      option
        .closest('.filter__box')
        .querySelector('.filter__selected')
        // affecte nom option choisie dans input
        .setAttribute('value', this.textContent);
    }
  });

  // ferme listbox si click hors box
  window.addEventListener('click', function (e) {
    const select = document.querySelector('.filter__box');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
}
