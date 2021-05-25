// DOM
const body = document.querySelector('#body');
const mainContent = document.querySelector('#main-content');

// MODAL
const modalOpenBtn = document.querySelector('#modalBtn');
const modalCloseBtn = document.querySelectorAll('.form__close');
const modal = document.querySelector('.form__modal');
const modalContent = document.querySelector('.form__content');
const modalBody = document.querySelector('.form__body');
const confirm = document.querySelector('.form__confirmation');
const submitBtn = document.querySelector('#submit');

// FORM
const form = document.querySelector('.form');
const formData = document.querySelectorAll('.formData');

// INPUTS
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// FONCTION : OUVRE FORMULAIRE
const openModal = () => {
  // inerte "main"
  mainContent.setAttribute('arias-hidden', 'true');
  // active "modal"
  modal.setAttribute('aria-hidden', 'false');
  // stop scroll arriere plan
  body.classList.add('no-scroll');
  // affiche modal
  modal.style.display = 'block';
  // affiche info dans url
  location.hash = 'contacter photographe';
};

// FONCTION : FOCUS DANS INPUTS
const focusInput = () => {
  // focus dans input 1
  firstName.focus();
  // si touche pressee, appel fonction "gestion navigation clavier"
  form.addEventListener('keydown', keyboardNavForm);
};

// FONCTION : GESTION NAVIGATION CLAVIER
function keyboardNavForm(event) {
  // si "tabulation"
  if (event.keyCode === 9) {
    // si "shit-tab"
    if (event.shiftKey) {
      // si bouton "fermer" actif
      if (document.activeElement === modalCloseBtn) {
        event.preventDefault();
        // focus sur bouton "envoyer"
        submitBtn.focus();
      }
    } else {
      // si bouton "envoyer" actif
      if (document.activeElement === submitBtn) {
        event.preventDefault();
        // focus sur bouton "fermer"
        modalCloseBtn.focus();
      }
    }
  }
}

// qd click sur bouton "contactez-moi"
modalOpenBtn.addEventListener('click', () => {
  // ouvre modal (appel fonction)
  openModal();
  // active navigation clavier (appel fonction)
  focusInput();
});

// FONCTION : FERME LE MODAL ("click" event)
const closeModal = () => {
  // active "main"
  mainContent.setAttribute('arias-hidden', 'false');
  // inerte "modal"
  modal.setAttribute('aria-hidden', 'true');
  // annule stop scroll
  body.classList.remove('no-scroll');
  // masque modal
  modal.style.display = 'none';
  // focus sur bouton "contactez-moi"
  modalOpenBtn.focus();
};

// pour chaque bouton "fermer"
modalCloseBtn.forEach((btn) =>
  // quand click
  btn.addEventListener('click', () => {
    // ferme modal (appel fonction)
    closeModal();
  })
);

// FERME MODAL ("escape" event)
document.addEventListener('keydown', (keyboardEvent) => {
  if (keyboardEvent.keyCode == 27) closeModal();
});

// VERIFIE SAISIES
const inputs = document.querySelectorAll('.formData input');
// const inputs = document.querySelectorAll('.formData input, textarea');
// console.log(inputs);

const checkValidity = () => {
  inputs.forEach((input) => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      // saisie ne correspond pas au pattern
      if (!e.target.validity.valid) {
        e.target.parentElement.classList.add('error');
        dataError(input, 'Veuillez vérifier votre saisie');
      }
      // aucun champ n'est rempli
      if (e.target.validity.valueMissing) {
        submitBtn.style.backgroundColor = 'grey';
        dataError(input, 'Veuillez renseigner ce champ');
      }
    });

    input.addEventListener('input', (e) => {
      // les champs sont valides
      if (e.target.validity.valid) {
        e.target.parentElement.classList.remove('error');
        submitBtn.style.backgroundColor = '#901c1c';
        dataSuccess(input, '');
      }
    });
  });
};

checkValidity();

// MESSAGES
// Error
const dataError = (input, message) => {
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerText = message;
};

// Success
const dataSuccess = (input, message) => {
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerText = message;
};

// FERME FORMULAIRE
// AFFICHE MESSAGE CONFIRMATION ENVOI
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (checkValidity) {
    modalBody.style.display = 'none';
    confirm.style.opacity = '1';
  }

  // AFFICHE SAISIES DANS CONSOLE
  console.log(`Prénom : ${firstName.value}`);
  console.log(`Nom : ${lastName.value}`);
  console.log(`Email : ${email.value}`);
  console.log(`Message : ${message.value}`);
});
