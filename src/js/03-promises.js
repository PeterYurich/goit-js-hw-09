import notiflix from 'notiflix'

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
    }, delay)
  })
}

formEl = document.querySelector('.form')
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  const firstDelay = document.querySelector('[name="delay"]').value
  const stepTime = document.querySelector('[name="step"]').value
  const amountOfPromises = document.querySelector('[name="amount"]').value

  for (let i = 1; i <= amountOfPromises; i += 1) {
    const currentDelay = (Number(firstDelay) + Number(stepTime) * (i - 1))
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`, 8000);
      })
      .catch(({ position, delay }) => {
        notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`, 8000);
      });
  }
})
