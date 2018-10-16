const validations = [fieldsArePopulated, urlIsValid];

export function validateForm() {
  const container = document.querySelector('.hasPageChanged-validation');
  container.innerHTML = '';

  let formIsValid = true;

  validations.forEach(validation => {
    let result = validation();
    if (!result.valid) {
      formIsValid = false;
      createErrorMessage(result.message);
    }
  });

  return formIsValid;
}

export function createErrorMessage(message) {
  const container = document.querySelector('.hasPageChanged-validation');
  const errorMessage = document.createElement('div');

  errorMessage.classList.add('error-message');
  errorMessage.textContent = message;

  container.appendChild(errorMessage);
}

function fieldsArePopulated() {
  const form = document.querySelector('.hasPageChanged-form');
  const textInputs = form.querySelectorAll('input[type="text"]');
  let fieldsArePopulated = true;

  textInputs.forEach(textInput => {
    if (textInput.value === '') {
      fieldsArePopulated = false;
    }
  });

  return {
    valid: fieldsArePopulated,
    message: 'Please enter a value in all fields.'
  };
}

function urlIsValid() {
  const form = document.querySelector('.hasPageChanged-form');
  const url = form.querySelector('[name="field-url"]').value;
  const urlIsValid = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/i.test(
    url
  );

  return {
    valid: urlIsValid,
    message: 'The provided URL is not valid.'
  };
}
