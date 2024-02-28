import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message');

emailInput.addEventListener('input', throttle(updateFormState, 500));
messageInput.addEventListener('input', throttle(updateFormState, 500));
form.addEventListener('submit', handleFormSubmit);

const savedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

function updateFormState() {
  localStorage.setItem('feedback-form-state', JSON.stringify({ email: emailInput.value, message: messageInput.value }));
};

function handleFormSubmit(event) {
  event.preventDefault();
  const email = emailInput.value;
  const message = messageInput.value;
  
  if (!email) {
    return;
    };

  console.log({ email, message });
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};