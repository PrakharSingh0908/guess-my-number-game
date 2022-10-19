'use strict';

const randomNumber = function (number){
    Math.trunc(Math.random() * number + 1)
}
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

const displayNumber = function (number){
    document.querySelector('.number').textContent = number;
}

const displayScore = function (score){
    document.querySelector('.score').textContent = score;
}

let secretNumber = randomNumber(20);
let score = 20;
let highscore = 0;


document.querySelector('.again').addEventListener('click', function () {
    secretNumber = randomNumber(20);
    displayMessage('Start guessing...');
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    displayNumber('?');
    displayScore(20);
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    //when the guess does not exist
    if (!guess) {
        displayMessage('⛔No Number!');
    }

    //when player wins
    else if (guess === secretNumber) {
        displayMessage('🥳Correct Guess!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //when the guess is not right
    else if (guess !== secretNumber) {
        //when the score is greater than 0
        if (score > 1) {
            score--;
            displayScore(score);
            if (guess + 2 < secretNumber) {
                displayMessage('📉Too low');
            } else if (guess > secretNumber + 2) {
                displayMessage('📈Too high');
            } else {
                displayMessage('😃Close but wrong guess');
            }
        }

        //when the score reaches the value 0
        else {
            score -= 1;
            displayScore(score);
            displayMessage('😢You lost the game');
        }
    }
});
