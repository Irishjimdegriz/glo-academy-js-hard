'use strict';

const wrapper = document.querySelector('.wrapper'),
      changeButton = document.querySelector('#change'),
      header = document.querySelector('#color');

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const changeFunction = () => {
  let red = getRandomInt(0, 255).toString(16),
      green = getRandomInt(0, 255).toString(16),
      blue = getRandomInt(0, 255).toString(16),
      backgroundColor = '#' + red.padStart(2, '0') + green.padStart(2, '0') + blue.padStart(2, '0');

  wrapper.style.backgroundColor = backgroundColor;
  wrapper.style.transition = 'background-color 1000ms linear';   

  header.textContent = backgroundColor;

};

changeButton.addEventListener('click', changeFunction);

changeFunction();

