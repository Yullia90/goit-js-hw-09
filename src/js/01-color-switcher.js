// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює
// колір фону < body > на випадкове значення, використовуючи інлайн стиль.
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів.
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bgColor = document.querySelector('body');

console.log(bgColor);

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    let i = getRandomHexColor();
    bgColor.style.backgroundColor = i;
  }, 1000);
  onClickBtnStart();
});

stopBtn.addEventListener('click', () => {
  onClickBtnStop();
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickBtnStart() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
}
function onClickBtnStop() {
  stopBtn.disabled = true;
  startBtn.disabled = false;
}
