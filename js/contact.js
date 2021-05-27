// DOM
const body = document.querySelector('#body');
const mainContent = document.querySelector('#main-content');

// MODAL
const formOpenBtn = document.querySelector('#modalBtn');
const formCloseBtn = document.querySelectorAll('.form__close');
const formModal = document.querySelector('.form__modal');
const formContent = document.querySelector('.form__content');
const formBody = document.querySelector('.form__body');
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
const openForm = () => {
  // desactive "main"
  mainContent.setAttribute('arias-hidden', 'true');
  // active modal
  formModal.setAttribute('aria-hidden', 'false');
  // stop scroll arriere plan
  body.classList.add('no-scroll');
  // affiche contenu modal
  formModal.style.display = 'flex';
};

// FONCTION : FOCUS DANS INPUTS
const focusInput = () => {
  // focus dans input 1
  firstName.focus();
  // si "tabulation", appel fonction "gestion navigation clavier"
  form.addEventListener('keydown', keyboardNavForm);
};

// FONCTION : GESTION NAVIGATION CLAVIER
const keyboardNavForm = (event) => {
  // si "tabulation"
  if (event.keyCode === 9) {
    // si "shit-tab"
    if (event.shiftKey) {
      // si ferme modal
      if (document.activeElement === formCloseBtn) {
        event.preventDefault();
        // focus sur bouton "envoyer"
        submitBtn.focus();
      }
    }
  }
};

// qd click sur bouton "contactez-moi"
formOpenBtn.addEventListener('click', () => {
  // ouvre modal (appel fonction)
  openForm();
  // affiche info dans url
  location.hash = 'contacter photographe';
  // active navigation clavier (appel fonction)
  focusInput();
});

// FONCTION : FERME MODAL ("click" event)
const closeForm = () => {
  // active main
  mainContent.setAttribute('arias-hidden', 'false');
  // dasactive modal
  formModal.setAttribute('aria-hidden', 'true');
  // annule stop scroll
  body.classList.remove('no-scroll');
  // masque modal
  formModal.style.display = 'none';
  // focus sur bouton "contactez-moi"
  formOpenBtn.focus();
};

// pour chaque bouton "fermer"
formCloseBtn.forEach((btn) =>
  // quand click
  btn.addEventListener('click', () => {
    // ferme modal (appel fonction)
    closeForm();
  })
);

// FERME MODAL ("escape" event)
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) closeForm();
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
      // champs valides
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
// Erreur
const dataError = (input, message) => {
  const formData = input.parentElement;
  const small = formData.querySelector('small');
  small.innerText = message;
};

// Succes
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
    formBody.style.display = 'none';
    confirm.style.opacity = '1';
  }

  // AFFICHE SAISIES DANS CONSOLE
  console.log(`Prénom : ${firstName.value}`);
  console.log(`Nom : ${lastName.value}`);
  console.log(`Email : ${email.value}`);
  console.log(`Message : ${message.value}`);
});
