let counterValue = 0;
const counterNumber = document.querySelector('.counter-number');
const increaseButton = document.querySelector('.counter-increase');
const decreaseButton = document.querySelector('.counter-decrease');

increaseButton.addEventListener('click', () => {
  counterValue++;
  counterNumber.textContent = counterValue;
});

decreaseButton.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue--;
    counterNumber.textContent = counterValue;
  }
});
