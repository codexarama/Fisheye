// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  const likes = document.querySelectorAll('.gallery__likes--btn');
  const totalCounter = document.querySelector('#total-likes');

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    // ACCESSIBILITE
    // affiche info-bulle action (navigation souris)
    // annonce action (navigation clavier)
    like.setAttribute('title', 'Add like');

    like.addEventListener('click', (event) => {
      // ajoute toggle "selected"
      like.classList.toggle('selected');
      // au click sur "like", focus sur input "counter"
      let likeCounter = like.parentElement.children[1];
      let likesAnnouncer = like.parentElement.children[2];
      // si "selected"
      if (like.classList.contains('selected')) {
        likeCounter.style.border = '';
        // affiche mention dans url
        location.hash = "j'aime";
        // ACCESSIBILITE
        // affiche info-bulle action (navigation souris)
        // annonce action (navigation clavier)
        like.setAttribute('title', 'Remove like');
        // + 1 au compteur local
        likeCounter.value++;
        // modifie apparence input
        likeCounter.style.color = '#db8876';
        // ACCESSIBILITE
        // focus sur annonciateur nb likes
        likesAnnouncer.focus();
        // signale correspondance element lu
        // likeCounter.style.boxShadow = '0 0 0 2px white, 0 0 0 4px #db8876';
        likesAnnouncer.textContent = likeCounter.value + ' likes';
        // + 1 au compteur global
        totalCounter.value++;
      } else {
        likeCounter.style.border = '';
        // affiche mention dans url
        location.hash = "je n'aime plus";
        // ACCESSIBILITE
        // affiche info-bulle action (navigation souris)
        // annonce action (navigation clavier)
        like.setAttribute('title', 'Add a like');
        // - 1 au compteur local
        likeCounter.value--;
        // modifie apparence input
        likeCounter.style.color = '#901c1c';
        // ACCESSIBILITE
        // focus sur annonciateur nb likes
        likesAnnouncer.focus();
        // signale correspondance element lu
        // likeCounter.style.boxShadow = '0 0 0 2px white, 0 0 0 4px #901c1c';
        likesAnnouncer.textContent = likeCounter.value + ' likes';
        // - 1 au compteur global
        totalCounter.value--;
      }

      // ACCESSIBILITE btn "like" navigation clavier
      // "entree" = "click"
      if (event.keyCode === 13) like.click();
    });
  }
};
