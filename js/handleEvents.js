function pressEnter(e) {
  if (
    e && // mouseEvent
    e.keyCode === 13 // keypress "Enter"
  ) {
    console.log('click');
  }
}

function pressArrowLeft(e) {
  if (
    e && // mouseEvent
    e.keyCode === 37 // keypress "arrow left"
  ) {
    console.log('click');
  }
}

function pressArrowRight(e) {
  if (
    e && // mouseEvent
    e.keyCode === 39 // keypress "arrow right"
  ) {
    console.log('click');
  }
}

function pressEscape(e) {
  if (
    e && // mouseEvent
    e.keyCode === 27 // keypress "escape"
  ) {
    console.log('click');
  }
}


['click', 'keypress'].forEach((event) => {
  document.addEventListener(event, (keyboardEvent) => {
    if ((event = 'click')) console.log('click');
    if (keyboardEvent.keyCode == 13) console.log('enter key pressed');
  });
});

['click', 'keypress'].forEach((event) => {
  document.addEventListener(event, (keyboardEvent) => {
    if ((event = 'click')) console.log('click');
    if (keyboardEvent.keyCode == 37) console.log('arrow left key pressed');
  });
});

// (...)

// document.addEventListener('keydown', (keyboardEvent) => {
//   console.log(keyboardEvent.keyCode);
//   if (keyboardEvent.keyCode == 37) {
//     console.log("1");
//     // displayLightbox(); // ne fonctionne pas
//     closeLightbox() // ok
//     console.log("2");
//   }
// });

// document.addEventListener('keydown', (keyboardEvent) => {
//   console.log(keyboardEvent.keyCode);
//   if (keyboardEvent.keyCode == 37) {
//     console.log("1");
//     // displayLightbox(); // ne fonctionne pas
//     openLightbox() // ok
//     console.log("2");
//   }
// });

// document.addEventListener('keydown', (keyboardEvent) => {
//   console.log(keyboardEvent.keyCode);
//   if (keyboardEvent.keyCode == 37) {
//     console.log("a");
//     prev.click();
//     console.log("b");
//   }
// })
