'use strict';

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

document.addEventListener('DOMContentLoaded', function () {
  const storedData = JSON.parse(localStorage.getItem(LS_KEY)) || {};
  emailInput.value = storedData.email || '';
  messageInput.value = storedData.message || '';
  form.addEventListener('input', function () {
    const userData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem(LS_KEY, JSON.stringify(userData));
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value && messageInput.value) {
    const userData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(userData);
    localStorage.removeItem(LS_KEY);
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('All form fields must be filled in');
    return;
  }
});
