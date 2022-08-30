import Countdown from './countdown.js';

/* setInterval(() => {
  console.log(tempoParaOAnoNovo.total);
}, 1000); */

// + '00:00:00 GMT-0300'

const dateInput = document.querySelector('#data');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let timeLeft;

dateInput.addEventListener('change', () => {
  const dateChosen = new Date(dateInput.value);

  timeLeft = new Countdown(dateChosen);
  if (timeLeft.total.hours > 1) {
    days.innerText = timeLeft.total.days;
    hours.innerText = timeLeft.total.hours;
    minutes.innerText = timeLeft.total.minutes;
    seconds.innerText = timeLeft.total.seconds;
  }
});

setInterval(() => {
  const dateChosen = new Date(dateInput.value);

  timeLeft = new Countdown(dateChosen);
  if (timeLeft.total.hours > 1) {
    days.innerText = timeLeft.total.days;
    hours.innerText = timeLeft.total.hours;
    minutes.innerText = timeLeft.total.minutes;
    seconds.innerText = timeLeft.total.seconds;
  }
}, 1000);
