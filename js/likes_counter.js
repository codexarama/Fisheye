// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  const likes = document.querySelectorAll('.gallery__likes--icon');
  const totalLikes = document.querySelectorAll('.gallery__likes--count');
  const totalCount = document.querySelector('#total-likes');

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    like.addEventListener('click', function () {
      like.classList.toggle('selected');
      let input = like.parentElement.children[0];
      console.log(input); // au click sur "like", l'input "counter" prend le focus
      if (like.classList.contains('selected')) {
        location.hash = "j'aime";
        likesCounter = parseInt(input.value) + 1;
        console.log(likesCounter);
        input.value = likesCounter;
        input.style.color = '#db8876';
      } else {
        location.hash = "je n'aime plus";
        likesCounter = parseInt(input.value) - 1;
        console.log(likesCounter);
        input.value = likesCounter;
        input.style.color = '#901c1c';
      }
    });
  }

  for (let j = 0; j < totalLikes.length; j++) {
    let totalLikesCounter = totalLikes[j];
    console.log(totalLikesCounter.value);
    // totalLikesCounter.addEventListener('change', function () {
      let total = 0
      total += parseInt(totalLikesCounter.value); // l'addition ne se fait pas
      console.log(total);
      totalCount.value = total; // affiche la derniere valeur
    // });
  }
};
