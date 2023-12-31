import { Modal } from './modal.js';
import { alertError } from "./alert-error.js"
import { CalculateIMC, notNumber } from './utils.js'

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputHeight.oninput = () => alertError.close();
inputWeight.oninput = () => alertError.close();

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if (showAlertError) {
    alertError.open()
    return;
  }

  alertError.close();

  const result = CalculateIMC(weight, height);
  displayResult(result)
}

function displayResult(result) {
  const message = `Seu IMC ideal é de ${result}`;

  Modal.message.innerText = message;
  Modal.open()
}

