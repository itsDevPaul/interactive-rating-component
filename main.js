const feedbackConfirmation = document.querySelector('.feedback-confirmation');
const ratingEvaluation = document.querySelector('.rating-evaluation');
const ratingButtons = document.querySelectorAll('.rating-number-button');
const submitButton = document.querySelector('.submit-button');
const ratingValue = document.querySelector('.feedback-confirmation-rating-value');

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingValue.textContent = button.textContent;
  });
});

submitButton.addEventListener('click', () => {
  feedbackConfirmation.setAttribute('data-visible', true);
  ratingEvaluation.setAttribute('data-hidden', true);
});
