// // onclick : addLike() sur chaque icone
// // addLike is not defined at HTMLElement.onclick
// let incrementLikeArray = document.getElementsByClassName('gallery__likes--icon');
// console.log(incrementLikeArray); // ok // retourne tableau HTML collection
// for (let i = 0; i < incrementLikeArray.length; i++) {
//   let like = incrementLikeArray[i];
//   like.addEventListener('click', addLike = (event) => { // addLike is not defined at HTMLElement.onclick
//     let likeCliked = event.target;
//     console.log(likeCliked); // rien ne se passe
//     let input = likeCliked.parentElement.children[0];
//     console.log(input); // au click sur l'icone "like", l'input "count" prend le focus
//     likeCount = parseInt(input.value) + 1;
//     console.log(likeCount);
//     input.value = likeCount;
//   });
// }

// // EVENT LISTENER - EVENT.TARGET INACTIFS
// let incrementLikeArray = document.getElementsByClassName('gallery__likes--icon');
// console.log(incrementLikeArray); // ok // retourne tableau HTML collection
// for (let i = 0; i < incrementLikeArray.length; i++) {
//   let like = incrementLikeArray[i];
//   like.addEventListener('click', function (event) {
//     let likeCliked = event.target;
//     console.log(likeCliked); // rien ne se passe
//     let input = likeCliked.parentElement.children[0];
//     console.log(input); // au click sur l'icone "like", l'input "count" prend le focus
//     likeCount = parseInt(input.value) + 1;
//     console.log(likeCount);
//     input.value = likeCount;
//   });
// }

// // EVENT LISTENER - EVENT.TARGET INACTIFS
// let incrementLike = document.getElementsByClassName('gallery__likes--icon');
// console.log(incrementLike); // ok // retourne HTML collection
// for (let i = 0; i < incrementLike.length; i++) {
//   let like = incrementLike[i];
//   like.addEventListener('click', function (event) {
//     let likeCliked = event.target;
//     console.log(likeCliked); // rien ne se passe
//     let input = likeCliked.parentElement.children[0];
//     console.log(input); // au click sur l'icone "like", l'input "count" prend le focus
//     likeCount = parseInt(input.value) + 1;
//     console.log(likeCount);
//     input.value = likeCount;
//   });
// }

// TEST AVEC ELEMENTS CREES DANS LE FICHIER HTML
// FONCTIONNE PARFAITEMENT
let incrementLike = document.getElementsByClassName('testLikeIcon');
console.log(incrementLike)
for(let i = 0; i < incrementLike.length; i++){
  let like = incrementLike[i];
  like.addEventListener('click', function(e){
    let like = e.target;
    console.log(like)
    let input = like.parentElement.children[0];
    console.log(input); // au click sur l'icone "like", l'input "count" prend le focus
    likeCount = parseInt(input.value) + 1;
    console.log(likeCount);
    input.value = likeCount;
  })
}