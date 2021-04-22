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
        .querySelector('.filter__select li').textContent = this.textContent;
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

// // FONCTION TRI DATA SELON OPTION CHOISIE
// document.getElementById('selected').addEventListener('change', function (e) {
//   e.preventDefault();
// })

// const filterByOption = (option, media) => {
//   // let value = document.getElementById('selected').value;

//   if (option === 'Popularité') return media.sort(filterBy('likes', 'desc'));
//   if (option === 'Date') return media.sort(filterBy('date', 'desc'));
//   if (option === 'Titre') return media.sort(filterBy('titre'));
// };

// filterByOption(); // Uncaught RangeError: Maximum call stack size exceeded