const modal = document.querySelector('.modal-wrapper');
const contactsButton = document.querySelector('.contacts-button');
const modalCloseButton = document.querySelector('.modal-close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const bulletList = document.querySelector('.slider-bullet-list');
const bullets = document.querySelectorAll('.bullit-button');
const screens = document.querySelectorAll('.slider-image');
const carouselItemsText = document.querySelectorAll('.slider-first-item');

if (contactsButton) {
  contactsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-show');
  });

  modalCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-show');
  });
}


if (screens) {
  const bulletsArray = Array.from(bullets);
  const screensArray = Array.from(screens);
  const textsArray = Array.from(carouselItemsText)

  const model = [true, false, false];

  const getCurrentElement = () => model.findIndex((index) => index);

  const updateModel = (index) => {
    model.forEach((item, i) => {
      model[i] = i === index;
    });
  }

  const renderActiveBullit = () => {
    const currentIndex = getCurrentElement();
    document.querySelector('.current-button').classList.remove('current-button');
    bulletsArray[currentIndex].classList.add('current-button');
  }

  const renderActiveScreen = () => {
    const currentIndex = getCurrentElement();
    document.querySelector('.current-image').classList.remove('current-image');
    document.querySelector('.red-item').classList.remove('red-item');
    document.querySelector('.current-item').classList.remove('current-item');

    screensArray[currentIndex].classList.add('current-image');
    screensArray[currentIndex].closest('.slider-second-item').classList.add('red-item');
    textsArray[currentIndex].classList.add('current-item');

    screensArray.slice(currentIndex).forEach((item, i) => {
      item.closest('.slider-second-item').style.order = i
    })

    screensArray.slice(0, currentIndex).forEach((item, i) => {
      item.closest('.slider-second-item').style.order = screensArray.length - currentIndex + i
    })

    document.body.classList = [];
    document.body.classList.add(`background-${currentIndex + 1}`)
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
    renderActiveBullit();
  });

  nextButton.addEventListener('click', () => {
    let index = getNextIndex();
    updateModel(index);
    renderActiveScreen();
    renderActiveBullit();
  });

  bulletList.addEventListener('click', (e) => {
    if (e.target.classList.contains('bullit-button')) {
      let clickedButtonIndex = bulletsArray.indexOf(e.target);
      updateModel(clickedButtonIndex);
      renderActiveScreen();
      renderActiveBullit();
    }
  });
}
