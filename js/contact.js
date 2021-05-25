// DOM Elements
const modalOpenBtn = document.querySelector('#modalBtn');
const modalCloseBtn = document.querySelectorAll('.form__close');
const body = document.querySelector('#body');
const mainContent = document.querySelector('#main-content');
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

// EVENEMENTS MODAL
// open modal
const openModal = () => {
  mainContent.setAttribute('arias-hidden', 'true');
  modal.setAttribute('aria-hidden', 'false');
  body.classList.add('no-scroll');
  modal.style.display = 'block';
  location.hash = 'contacter photographe';
  // -------------------------------------------------------------------------------
  // modalCloseBtn.focus();  // is not a function
  // -------------------------------------------------------------------------------
};

modalOpenBtn.addEventListener('click', () => {
  openModal();
});

// close modal(s) ("click" event)
const closeModal = () => {
  mainContent.setAttribute('arias-hidden', 'false');
  modal.setAttribute('aria-hidden', 'true');
  body.classList.remove('no-scroll');
  modal.style.display = 'none';
  modalOpenBtn.focus();
};

modalCloseBtn.forEach((btn) =>
  btn.addEventListener('click', () => {
    closeModal();
  })
);

// close modal(s) ("escape" event)
document.addEventListener('keydown', (keyboardEvent) => {
  if (keyboardEvent.keyCode == 27) closeModal();
});

// VERIFICATION DES SAISIES
const inputs = document.querySelectorAll('.formData input');
// const inputs = document.querySelectorAll('.formData input, textarea');
// console.log(inputs);

const checkValidity = () => {
  inputs.forEach((input) => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      // le format de saisie ne correspond pas au pattern
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

// AFFICHE LES SAISIES DANS LA CONSOLE
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (checkValidity) {
    modalBody.style.display = 'none';
    confirm.style.opacity = '1';
    // -------------------------------------------------------------------------------
    // form.reset(); // is not a function
    // -------------------------------------------------------------------------------
  }

  console.log(`Prénom : ${firstName.value}`);
  console.log(`Nom : ${lastName.value}`);
  console.log(`Email : ${email.value}`);
  console.log(`Message : ${message.value}`);
});
