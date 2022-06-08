// ACCEDE AUX STYLES
var head = document.head || document.getElementsByTagName('head')[0];
var axsStyles = head.appendChild(document.createElement('style'));

// SI NAVIGATION SOURIS
// ANNULE LES STYLES AFFECTES AU FOCUS EN NAVIGATION CLAVIER
document.addEventListener('mousedown', () => {
  axsStyles.innerHTML = '* {box-shadow:none !important}';
});

// SI NAVIGATION CLAVIER
// ANNULE LES STYLES PAR DEFAUT DU FOCUS
document.addEventListener('keydown', () => {
  axsStyles.innerHTML =
    '*:not(.gallery__link):not(.lightbox__title) {outline:none !important}';
});
