// DOM Elements
const modalBtn = document.getElementById('modalBtn');
const modal = document.querySelector('.form__modal');
const modalContent = document.querySelector('.form__content');
const modalBody = document.querySelector('.form__body');
const confirm = document.querySelector('.form__confirmation');
const submitBtn = document.getElementById('submit');
let closeModalBtn = document.querySelector('.close');
const closeConfirmBtn = document.querySelector('.close-confirm');

// FORM
const form = document.querySelector(".form")
const formData = document.querySelectorAll('.formData');

// INPUTS
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

// EVENEMENTS MODAL
// launch modal event
modalBtn.addEventListener(
  'click',
  (launchModal = (e) => {
    e.preventDefault();
    modal.style.display = 'block';
  })
);

// close modal event
// // ---------- ne fonctionne pas ---------- //
// closeModalBtn.addEventListener(
//   'click',
//   (closeModal = (e) => {
//     e.preventDefault();
//     modal.style.display = 'none';
//   })
// );

closeModalBtn = (e) => {
  modal.style.display = 'none';
};

// close confirm message event
closeConfirmBtn.addEventListener(
  'click',
  (closeConfirm = (e) => {
    e.preventDefault();
    modal.style.display = 'none';
  })
);

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

// const checkValidity = (input, textarea) => {
//   input.addEventListener('invalid', (e) => {
//     e.preventDefault();
//     if (!e.target.validity.valid) {
//       e.target.parentElement.classList.add('error');
//     }
//     textarea.addEventListener('invalid', (e) => {
//       e.preventDefault();
//       if (!e.target.validity.valid) {
//         e.target.parentElement.classList.add('error');
//       }
//     });
//   });

//   input.addEventListener('input', (e) => {
//     if (e.target.validity.valid) {
//       e.target.parentElement.classList.remove('error');
//     }
//     textarea.addEventListener('textarea', (e) => {
//       if (e.target.validity.valid) {
//         e.target.parentElement.classList.remove('error');
//       }
//     });
//   });
// };

// RECUPERATION DES SAISIES
// Array.from(inputs).forEach(checkValidity);
// Array.from(textarea).forEach(checkValidity);
