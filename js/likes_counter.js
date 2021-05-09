// COMPTE LES LIKES : INCREMENTE / DECREMENTE DE 1 AU CLIC
const likesCount = () => {
  const likes = document.querySelectorAll('.gallery__likes--icon');
  const totalCounter = document.querySelector('#total-likes');

  for (let i = 0; i < likes.length; i++) {
    let like = likes[i];
    // handleEvent = keypress "Enter" + "click"
    like.addEventListener(
      'click',
      (handleEvent = () => {
        // like.addEventListener('click', () => {
        like.classList.toggle('selected');
        let input = like.parentElement.children[0];
        console.log(input); // au click sur "like", l'input "counter" prend le focus
        if (like.classList.contains('selected')) {
          location.hash = "j'aime";
          likesCounter = parseInt(input.value) + 1;
          console.log(likesCounter);
          input.value = likesCounter;
          input.style.color = '#db8876';
          // incremente de 1 le compteur global de likes
          totalCounter.value++;
        } else {
          location.hash = "je n'aime plus";
          likesCounter = parseInt(input.value) - 1;
          console.log(likesCounter);
          input.value = likesCounter;
          input.style.color = '#901c1c';
          // decremente de 1 le compteur global de likes
          totalCounter.value--;
        }
      })
    );
  }
};
