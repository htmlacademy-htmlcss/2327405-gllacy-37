const modal = document.querySelector('.modal-wrapper');
const contactsButton = document.querySelector('.contacts-button');
const modalCloseButton = document.querySelector('.modal-close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const bulletList = document.querySelector('.slider-bullet-list');
const bullets = document.querySelectorAll('.bullit-button');
const screens = document.querySelectorAll('.slider-image');

contactsButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-show');
});

modalCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-show');
});

const bulletsArray = Array.from(bullets);
const screensArray = Array.from(screens);

const model = [true, false, false];

const getCurrentElement = () => model.findIndex((index) => index);

const updateModel = (index) => {
  model.forEach((item, i) => {
    model[i] = i === index;
  });
}

const renderActiveScreen = () => {
  const currentIndex = getCurrentElement();
  document.querySelector('.current-image').classList.remove('current-image');
  screensArray[currentIndex].classList.add('current-image');
}

const getPrevIndex = () => {
  let current = getCurrentElement();
  return current - 1 >= 0 ? current - 1 : model.length - 1;
}

const getNextIndex = () => {
  let current = getCurrentElement();
  return current + 1 <= model.length - 1 ? current + 1 : 0;
}

prevButton.addEventListener('click', () => {
  let index = getPrevIndex();
  updateModel(index);
  renderActiveScreen();
});

nextButton.addEventListener('click', () => {
  let index = getNextIndex();
  updateModel(index);
  renderActiveScreen();
});

bulletList.addEventListener('click', (e) => {
  if (e.target.classList.contains('bullit-button')) {
    let clickedButtonIndex = bulletsArray.indexOf(e.target);
    updateModel(clickedButtonIndex);
    renderActiveScreen();
  }
});
