'use strict';

const duck = document.querySelector('.duck'),
      toggleButton = document.querySelector('.toggle-button'),
      resetButton = document.querySelector('.reset-button'),
      wrapper = document.querySelector('.wrapper'),
      captions = ['Включить анимацию', 'Выключить анимацию'],
      duckWidth = 100;

let mode = 0,
    count = -duckWidth,
    animationFrame;

const animate = () => {
  count++;
  duck.style.left = count + 'px';

  if (count + duckWidth >= wrapper.clientWidth) {
    window.cancelAnimationFrame(animationFrame);
  } else {
    animationFrame = requestAnimationFrame(animate);
  }
};

toggleButton.addEventListener('click', () => {
  if (mode === 0) {
    animationFrame = window.requestAnimationFrame(animate);
    mode = 1;
  } else {
    window.cancelAnimationFrame(animationFrame);
    mode = 0;
  }

  toggleButton.textContent = captions[mode];
});

resetButton.addEventListener('click', () => {
  window.cancelAnimationFrame(animationFrame);
  count = -duckWidth;
  duck.style.left = count + 'px';
  mode = 0;
  toggleButton.textContent = captions[mode];
});