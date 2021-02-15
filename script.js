'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');

const rollEl = document.querySelector('.btn--roll');
const holdEl = document.querySelector('.btn--hold');
const newEl = document.querySelector('btn--new');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;




const inIt = function () {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = false;

    score0El.textContent = 0;
    score1El.textContent = 0;

    diceEl.classList.add('hidden');



}

inIt();

const rollingDice = function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    return dice;
}

rollEl.addEventListener('click',function(){

     diceEl.src=`dice-${rollingDice()}.png`;
  
    diceEl.classList.remove('hidden');
})