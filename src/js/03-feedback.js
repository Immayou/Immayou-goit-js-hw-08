const feedbackForm = document.querySelector('.feedback-form')
const userEmail = document.querySelector('.feedback-form input')
const userFeedbackMessage = document.querySelector('.feedback-form textarea')
const formSubmitBtn = document.querySelector('button')
const LOCAL_STORAGE_KEY = 'feedback-form-state'

feedbackForm.addEventListener('input', onTextareaInput)
formSubmitBtn.addEventListener('submit', onFormSubmit)

inputPushSavedTextareaMassage ()

function onTextareaInput (evt) {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({email: userEmail.value, message: userFeedbackMessage.value}))
}

function inputPushSavedTextareaMassage () {
   const unParsedLocalStorageKey = localStorage.getItem(LOCAL_STORAGE_KEY)
   const parsedLocalStorageKey = JSON.parse(unParsedLocalStorageKey)
   
if (unParsedLocalStorageKey) {
userEmail.value = parsedLocalStorageKey.email
userEmail
} 
}

function onFormSubmit (evt) {
evt.preventDefault();
evt.currentTarget.reset();
localStorage.removeItem();
}