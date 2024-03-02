'use strict';
// first we get the entire element then .textcontent returns the actual text present
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number🥳'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// since it is input element which takes number so we have to use value to access and make changes
// document.querySelector('.guess').value = 19;
// console.log(document.querySelector('.guess').value);

//Random secret no bw 1-20
//math.random() gives float value bw 0-1 so we have to multiply it by 20
let secretNo = Math.trunc(Math.random()*20) + 1;
console.log(secretNo);
let score = 20;
let highscore=0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};
//Event handling
document.querySelector('.check').addEventListener(
    'click',
    function(){
        const guess = Number(document.querySelector('.guess').value);
        if(!guess) {
            displayMessage('⛔No Number');
        }
        else if(guess==secretNo) {
            displayMessage('🎉Correct Number!');
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNo;
            if(score>highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if(guess!==secretNo) {
            if(score>1){
                displayMessage(guess>secretNo?'📈Too high!':'📉Too Low!')
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                displayMessage('💥you lost!');
                document.querySelector('.score').textContent = 0;
            }
        }
        // else if(guess>secretNo) {
        //     if(score>1){
        //         document.querySelector('.message').textContent = '📈Too high!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = '💥you lost!';
        //         document.querySelector('.score').textContent = 0;
        //     }
            
        // }
        // else if(guess<secretNo) {
        //     if(score>1){
        //         document.querySelector('.message').textContent = '📉Too Low!';
        //         score--;
        //         document.querySelector('.score').textContent = score;
        //     }
        //     else {
        //         document.querySelector('.message').textContent = '💥you lost!';
        //         document.querySelector('.score').textContent = 0;
        //     }
            
        // }

    }
)

//reset the game
document.querySelector('.again').addEventListener(
    'click',
    function(){
        secretNo = Math.trunc(Math.random()*20) + 1;
        score =20;
        displayMessage('start guessing...');
        document.querySelector('.score').textContent = '20';
        document.querySelector('.guess').value = '';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
    }
)