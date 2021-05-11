// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  const likes = document.querySelectorAll('.gallery__likes--icon');
  // likes.addEventListener('clic', handleEvent);
  const totalCounter = document.querySelector('#total-likes');

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    like.setAttribute("aria-label", "likes")
    // handleEvent = () => {
    like.addEventListener('click', () => {
      like.classList.toggle('selected');
      let likeCounter = like.parentElement.children[0]; // au click sur "like", l'input "counter" prend le focus
      if (like.classList.contains('selected')) {
        location.hash = "j'aime";
        likeCounter.value++; // incremente de 1 le compteur local de likes
        likeCounter.style.color = '#db8876';
        totalCounter.value++; // incremente de 1 le compteur global de likes
      } else {
        location.hash = "je n'aime plus";
        likeCounter.value--; // decremente de 1 le compteur local de likes
        likeCounter.style.color = '#901c1c';
        totalCounter.value--; // decremente de 1 le compteur global de likes
      }
    });
  }
};
