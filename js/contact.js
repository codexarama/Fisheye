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
  firstName.focus();
  form.addEventListener('keydown', keyboardNavForm);
};

// FONCTION : GESTION NAVIGATION CLAVIER
const keyboardNavForm = (event) => {
  if (event.keyCode === 9) {
    if (event.shiftKey) {
      if (document.activeElement === formCloseBtn) {
        event.preventDefault();
        submitBtn.focus();
      }
    }
  }
  if (event.keyCode === 27) closeForm();
};

// qd click sur bouton "contactez-moi"
formOpenBtn.addEventListener('click', () => {
  openForm();
  location.hash = 'contacter photographe';
  focusInput();
});

// FONCTION : FERME MODAL ("click" event)
const closeForm = () => {
  // active main
  mainContent.setAttribute('aria-hidden', 'false');
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

// VERIFIE SAISIES
const inputs = document.querySelectorAll('.formData input');
// const inputs = document.querySelectorAll('.formData input, textarea');

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
