const modal = document.querySelector('.modal-wrapper');
const contactsButton = document.querySelector('.contacts-button');
const modalCloseButton = document.querySelector('.modal-close-button');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});
