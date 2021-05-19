// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  const likes = document.querySelectorAll('.gallery__likes--btn');
  const totalCounter = document.querySelector('#total-likes');

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    // ajoute attributs ACCESSIBILITE
    like.setAttribute('aria-label', 'likes');
    like.setAttribute('title', 'Add a like');

    like.addEventListener('click', (event) => {
      // ajoute toggle "selected"
      like.classList.toggle('selected');
      // au click sur "like", focus sur input "counter"
      let likeCounter = like.parentElement.children[0];
      // si "selected"
      if (like.classList.contains('selected')) {
        // affiche mention dans url
        location.hash = "j'aime";
        // affiche info-bulle action
        like.setAttribute('title', 'Remove like');
        // + 1 au compteur local
        likeCounter.value++;
        // change couleur
        likeCounter.style.color = '#db8876';
        // + 1 au compteur global
        totalCounter.value++;
      } else {
        // affiche mention dans url
        location.hash = "je n'aime plus";
        // affiche info-bulle action
        like.setAttribute('title', 'Add a like');
        // - 1 au compteur local
        likeCounter.value--;
        // change couleur
        likeCounter.style.color = '#901c1c';
        // - 1 au compteur global
        totalCounter.value--;
      }
      // ACCESSIBILITE btn "like" navigation clavier
      // "entree" = "click"
      if (event.keycode == 13) like.click();
    });
  }
};
