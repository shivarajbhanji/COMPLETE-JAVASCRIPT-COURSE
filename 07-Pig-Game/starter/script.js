'use strict';
// selecting elements
let score0El = document.querySelector('#score--0');
// faster than query selector. No need to use #
let score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let btnnew = document.querySelector('.btn--new');
let btnroll = document.querySelector('.btn--roll');
let btnhold = document.querySelector('.btn--hold');
//to change background
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');

let diceEl = document.querySelector('.dice');

let playing, scores, activePlayer,currentScore;
const init = function() {
    playing = true;
    scores = [0,0];
    activePlayer = 0;
    currentScore = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');

}
init();
const switchPlayer = function() {
    if(playing) {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        //switch the active player
        activePlayer = activePlayer==0 ? 1 : 0;
        //if class is present then it removes it and if it is not present then it adds it
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
}
const randomNumber = function() {
    return Math.trunc(Math.random()*6) + 1;
}
btnroll.addEventListener(
    'click',
    function() {
        if(playing) {
             // create a random no from 1-6
            const randomNo = randomNumber();
            // display the dice
            diceEl.classList.remove('hidden');
            // display the respective no on dice
            diceEl.src = `dice-${randomNo}.png`;
            // check if 1 is on the dice if yes then switch the player
            if(randomNo!==1) {
                currentScore+=randomNo;
                // dynamically selects the active player
                document.getElementById(`current--${activePlayer}`).textContent = currentScore;
            }
            else {
                switchPlayer();
            }
        }
       
    }
)
btnhold.addEventListener(
    'click',
    function() {
        //adding the current score of active player to total score of that player 
        scores[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //winner
        if(scores[activePlayer]>=100) {
            playing = false;
            //hiding the dice 
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else{
            switchPlayer();
        }
    }
)
btnnew.addEventListener('click', init);