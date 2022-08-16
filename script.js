'use strict';
// console.log(document.querySelector('.message').textContent); //getter method
// document.querySelector('.message').textContent = 'Correct Number👍'; //setter method

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';

// document.querySelector('.guess').value = 13;
// console.log(document.querySelector('.guess').value);

// const x = function(){
//     console.log(document.querySelector('.guess').value);
// };

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

let showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// checking input number

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess,typeof guess);

  // when players wrong

  if (!guess) {
    document.getElementById("message").style.color = "#F00505";
    showMessage('No Number Please Enter Again.');

  } else if (guess !== secretNumber) {
    if (score > 0) {
      showMessage(guess > secretNumber ? 'Too High ⬆️' : 'Too Low ⬇️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('GameOver!');
      document.querySelector('.score').textContent = '0';
    }
  }

  // else if (guess > number) {
  //   if (score > 0) {
  //     showMessage('Too High ⬆️');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     showMessage('GameOver!');
  //     // document.querySelector('.score').textContent = '0';
  //   }
  // } else if (guess < number) {
  //   if (score > 0) {
  //     showMessage('Too Low ⬇️');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     showMessage('GameOver!');
  // document.querySelector('.score').textContent = '0';
  // }

  //When player wins
  else if (guess === secretNumber) {
    document.getElementById("message").style.color = "#FFFFFF";
    showMessage('Correct Number👍');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // again button
  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    showMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
