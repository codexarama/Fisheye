// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  const likes = document.querySelectorAll('.gallery__likes--btn');
  const totalCounter = document.querySelector('#total-likes');

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    // ajoute attributs ACCESSIBILITE
    like.setAttribute('title', 'Add like');

    like.addEventListener('click', (event) => {
      // ajoute toggle "selected"
      like.classList.toggle('selected');
      // au click sur "like", focus sur input "counter"
      let likeCounter = like.parentElement.children[1];
      let likesAnnouncer = like.parentElement.children[2];
      // si "selected"
      if (like.classList.contains('selected')) {
        // affiche mention dans url
        location.hash = "j'aime";
        // affiche info-bulle action
        like.setAttribute('title', 'Remove like');
        // + 1 au compteur local
        likeCounter.value++;
        // ACCESSIBILITE actualise l'annonceur de likes
        likesAnnouncer.textContent = likeCounter.value + ' likes';
        // change couleur
        likeCounter.style.color = '#db8876';
        // ACCESSIBILITE focus sur annonceur nb likes
        likesAnnouncer.focus();
        // + 1 au compteur global
        totalCounter.value++;
      } else {
        // affiche mention dans url
        location.hash = "je n'aime plus";
        // affiche info-bulle action
        like.setAttribute('title', 'Add a like');
        // - 1 au compteur local
        likeCounter.value--;
        // ACCESSIBILITE actualise l'annonceur de likes
        likesAnnouncer.textContent = likeCounter.value + ' likes';
        // change couleur
        likeCounter.style.color = '#901c1c';
        // ACCESSIBILITE focus sur annonceur nb likes
        likesAnnouncer.focus();
        // - 1 au compteur global
        totalCounter.value--;
      }

      // ACCESSIBILITE btn "like" navigation clavier
      // "entree" = "click"
      if (event.keyCode === 13) like.click();
    });
  }
};
