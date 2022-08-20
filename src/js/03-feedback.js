import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('.feedback-form input');
const userFeedbackMessage = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(onEmailTextareaInput, 500))
feedbackForm.addEventListener('submit', onFormSubmit)

let inputValues = {}

initEmailTextareaMassage ();

function onFormSubmit (evt) {
   evt.preventDefault();
   console.log({ email: userEmail.value, message: userFeedbackMessage.value });
   evt.target.reset();
   localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onEmailTextareaInput (evt) {
   inputValues[evt.target.name] = evt.target.value
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(
      {email: userEmail.value, 
      message: userFeedbackMessage.value}))
}

function initEmailTextareaMassage () {
   let savedLocalStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY)
   
   if (savedLocalStorageValue) {
   savedLocalStorageValue = JSON.parse(savedLocalStorageValue)
   userEmail.value = savedLocalStorageValue.email;
   userFeedbackMessage.value = savedLocalStorageValue.message;
   }
}
  
