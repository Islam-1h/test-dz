const productCards = document.querySelectorAll('.product');
const changeColorButton = document.querySelector('.change-all-card-color-button');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeColorButton.addEventListener('click', () => {
  productCards.forEach ((card) => card.style.backgroundColor = greenColorHash);
});


const firstProductCard = document.querySelector('.product');
const changeColorFirstButton = document.querySelector('.change-card-color-button');

changeColorFirstButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
});

const openGoogleButton = document.querySelector('.open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm ('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://www.google.com');
  }
}

const outputConsoleLogButton = document.querySelector('.output-console-log');

outputConsoleLogButton.addEventListener('click', () => {
  outputConsoleLog('Сообщение в консоль');
});

function outputConsoleLog(message) {
  alert(message)
  console.log(message);
}

const pageTitle = document.querySelector('h1');

pageTitle.addEventListener('mouseover',() => {
  console.log('Курсор наведен на заголовок');
 })


const changeTitleColorButton = document.querySelector('.change-title-color');
changeTitleColorButton.addEventListener('click', () => {
  pageTitle.classList.toggle('active');
})