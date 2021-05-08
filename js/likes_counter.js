// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  let likes = document.querySelectorAll('.gallery__likes--icon');
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
};
