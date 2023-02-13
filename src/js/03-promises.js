// HTML містить розмітку форми, в поля якої користувач буде вводити першу затримку в
// мілісекундах, крок збільшення затримки для кожного промісу після першого і кількість
// промісів, яку необхідно створити.

// Напиши скрипт, який на момент сабміту форми викликає функцію
// createPromise(position, delay) стільки разів, скільки ввели в поле amount.
// Під час кожного виклику передай їй номер промісу(position), що створюється, і затримку,
// враховуючи першу затримку(delay), введену користувачем, і крок(step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс,
//   який виконується або відхиляється через delay часу.Значенням промісу повинен бути
//   об'єкт, в якому будуть властивості position і delay зі значеннями однойменних
// параметрів.Використовуй початковий код функції для вибору того, що потрібно зробити
// з промісом - виконати або відхилити.

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // let delay = event.currentTarget.delay.value;
  // let step = event.currentTarget.step.value;
  // let amount = event.currentTarget.amount.value;
  ////////////////////////////////
  // let { delay, step, amount } = event.target;
  // let delayValue = delay.value;
  // let stepValue = step.value;
  // let amountValue = amount.value;
  //////////////////////////////////////////////////////////метод добавлення масиву//////////////////////////
  // let bla = Object.values(Object.fromEntries(new FormData(event.target)));
  // console.log(bla);
  let { delay, step, amount } = Object.fromEntries(new FormData(event.target));
  delay = Number(delay);
  step = Number(step);
  for (let i = 0; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
