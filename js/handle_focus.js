// ACCEDE AUX STYLES
var head = document.head || document.getElementsByTagName('head')[0];
var accessStyles = head.appendChild(document.createElement('style'));

// SI NAVIGATION SOURIS
// ANNULE LES STYLES AFFECTES AU FOCUS EN NAVIGATION CLAVIER
document.addEventListener('mousedown', () => {
  accessStyles.innerHTML = '* {box-shadow:none !important}';
});

// SI NAVIGATION CLAVIER
// ANNULE LES STYLES PAR DEFAUT DU FOCUS
document.addEventListener('keydown', () => {
  accessStyles.innerHTML =
    '*:not(.photographerId):not(.gallery__link):not(.lightbox__title) {outline:none !important}';
});
