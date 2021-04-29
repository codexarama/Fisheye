// IDENTITFICATION DE L'OPTION CHOISIE
// ouvre la box au click
document.querySelector('.filter').addEventListener('click', function () {
  this.querySelector('.filter__box').classList.toggle('open');
});

// iteration sur les options : affecte "selected" à celle qui est choisie
for (const option of document.querySelectorAll('.filter__option')) {
  option.addEventListener('click', function () {
    if (!option.classList.contains('selected')) {
      option.parentNode
        .querySelector('.filter__option.selected')
        .classList.remove('selected');
      option.classList.add('selected');
      option
        .closest('.filter__box')
        .querySelector('.filter__selected li').textContent = this.textContent;
    }
  });

  // ferme la liste d'option si click en dehors de la box
  window.addEventListener('click', function (e) {
    const select = document.querySelector('.filter__box');
    if (!select.contains(e.target)) {
      select.classList.remove('open');
    }
  });
}