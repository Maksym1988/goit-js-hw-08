import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FEEDBACK_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(saveDataValue, 500));
const { email, message } = feedbackForm.elements;

function saveDataValue() {
  const dataValue = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(dataValue));
}

window.addEventListener('load', loadDataValue);
function loadDataValue() {
  const getDataValue = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};

  email.value = getDataValue.email || '';
  message.value = getDataValue.message || '';
}

feedbackForm.addEventListener('submit', onFormSubmit);
function onFormSubmit(eve) {
  eve.preventDefault();

  const userFeedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  console.log(userFeedback);

  localStorage.removeItem(FEEDBACK_KEY);
  feedbackForm.reset();
}
