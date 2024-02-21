const check = document.querySelector('.check');
const input = document.querySelector('.input');
const calculate = document.querySelector('.calculate');

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let firstNumber = getRandomNumber(1, 9);
let secondNumber = getRandomNumber(1, 9);

calculate.textContent = `${firstNumber} * ${secondNumber}`;

check.addEventListener('click', () => {
  if ((firstNumber * secondNumber) === Number(input.value)) {
    alert('Вы ответили верно!');
    firstNumber = getRandomNumber(1, 9);
    secondNumber = getRandomNumber(1, 9);
    calculate.textContent = `${firstNumber} * ${secondNumber}`;
  } else {
    alert('Вы ответили не верно! Попробуйте снова');
  }
  
  input.value = '';
  input.focus();
})