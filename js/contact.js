// DOM Elements
const modalBtn = document.querySelector('#modalBtn');
const modal = document.querySelector('.form__modal');
const modalContent = document.querySelector('.form__content');
const modalBody = document.querySelector('.form__body');
const confirm = document.querySelector('.form__confirmation');
const submitBtn = document.querySelector('#submit');
let closeModalBtn = document.querySelectorAll('.close');
console.log(closeModalBtn);
const closeConfirmBtn = document.querySelector('.close-confirm');

// FORM
const form = document.querySelector(".form")
const formData = document.querySelectorAll('.formData');

// INPUTS
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// EVENEMENTS MODAL
// launch modal event
modalBtn.addEventListener(
  'click',
  (launchModal = (e) => {
    e.preventDefault();
    modal.style.display = 'block';
    location.hash = 'me contacter'
  })
);

// close modal(s) event
closeModalBtn.forEach((btn) => btn.addEventListener("click", closeModal = () => {
  modal.style.display = "none";
}));

// CONFIRMATION D'ENVOI DU MESSAGE
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (checkValidity) {
    modalBody.style.display = 'none';
    confirm.style.opacity = '1';
    form.reset();
  }
});

// VERIFICATION DES SAISIES
const inputs = document.querySelectorAll('input');
const textarea = document.querySelectorAll('textarea');

const checkValidity = (input) => {
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
};

// CHECKVALIDITY TEXTAREA ?!

// recuperation des saisies
Array.from(inputs).forEach(checkValidity);
Array.from(textarea).forEach(checkValidity);

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
