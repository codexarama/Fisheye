var head = document.head || document.getElementsByTagName('head')[0];
var axsStyles = head.appendChild(document.createElement('style'));

// ANNULE LES STYLES AFFECTES AU FOCUS SI NAVIGATION SOURIS
document.addEventListener('mousedown', () => {
	axsStyles.innerHTML = '* {box-shadow:none !important}';
});
document.addEventListener('keydown', () => {
	axsStyles.innerHTML = '';
});