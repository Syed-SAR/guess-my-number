'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const message = (message) => {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message('No Number');
  } else if (guess === secretNumber) {
    message('Correct Guess');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
if (score > highScore) {
  highScore = score;
  document.querySelector('.highscore').textContent = highScore;
}


  } else if (guess > secretNumber || guess < secretNumber) {
    if (score > 1) {
      message(guess > secretNumber ? 'Guess is too High' : 'Guess it too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message('You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  } 
});

document.querySelector('.again').addEventListener('click', () => {
score = 20;
secretNumber = Math.trunc(Math.random() * 20) + 1;
message('Start Guessing...');
document.querySelector('.score').textContent = 20;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';
document.querySelector('.number').style.width = '15rem'; 
document.querySelector('body').style.backgroundColor = '#222';
});
