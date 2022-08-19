import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const userEmail = document.querySelector('.feedback-form input');
const userFeedbackMessage = document.querySelector('.feedback-form textarea');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', throttle(onTextareaInput, 500))
feedbackForm.addEventListener('submit', onFormSubmit)

inputPushSavedTextareaMassage ()

function onFormSubmit (evt) {
   evt.preventDefault();
   console.log({ email: userEmail.value, message: userFeedbackMessage.value });
   evt.target.reset();
   localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function onTextareaInput (evt) {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(
      {email: userEmail.value, 
      message: userFeedbackMessage.value}))
}

function inputPushSavedTextareaMassage () {
   const unParsedLocalStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY)
   
   if (unParsedLocalStorageValue) {
   const parsedLocalStorageValue = JSON.parse(unParsedLocalStorageValue)
   userEmail.value = parsedLocalStorageValue.email;
   userFeedbackMessage.value = parsedLocalStorageValue.message;
   }
}
  
