import Countdown from './countdown.js';

const dateInput = document.querySelector('#data');
const contador = document.querySelector('.contador');
const erro = document.querySelector('.erro');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let timeLeft;

dateInput.addEventListener('change', initCountdown);

function initCountdown() {
  const dateChosen = new Date(dateInput.value);

  timeLeft = new Countdown(dateChosen);
  if (timeLeft.total.hours > 1) {
    contador.classList.add('ativo');
    days.innerText = timeLeft.total.days;
    hours.innerText = timeLeft.total.hours;
    minutes.innerText = timeLeft.total.minutes;
    seconds.innerText = timeLeft.total.seconds;
    erro.style.display = 'none';
  } else {
    contador.classList.remove('ativo');
    erro.style.display = 'block';
  }

  setInterval(() => {
    const dateChosen = new Date(dateInput.value);

    timeLeft = new Countdown(dateChosen);
    if (timeLeft.total.hours > 1) {
      contador.classList.add('ativo');
      days.innerText = timeLeft.total.days;
      hours.innerText = timeLeft.total.hours;
      minutes.innerText = timeLeft.total.minutes;
      seconds.innerText = timeLeft.total.seconds;
      erro.style.display = 'none';
    } else {
      contador.classList.remove('ativo');
      erro.style.display = 'block';
    }
  }, 1000);
}
