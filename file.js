let count = 0;

const counterDisplay = document.getElementById('counter');

function incrementa() {
  count++;
  counterDisplay.textContent = count;
}

function decrementa() {
  count--;
  counterDisplay.textContent = count;
}

function resetta() {
  count = 0;
  counterDisplay.textContent = count;
}