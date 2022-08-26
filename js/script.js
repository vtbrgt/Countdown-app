import Countdown from './countdown.js';

/* setInterval(() => {
  console.log(tempoParaOAnoNovo.total);
}, 1000); */

// + '00:00:00 GMT-0300'

const dateInput = document.querySelector('#data');

dateInput.addEventListener('change', () => {
  const dateChosen = new Date(dateInput.value);
  console.log(dateChosen);

  var timeLeft = new Countdown(dateChosen);
  console.log(timeLeft);
});
