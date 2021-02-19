'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');

const rollEl = document.querySelector('.btn--roll');
const holdEl = document.querySelector('.btn--hold');
const newEl = document.querySelector('.btn--new');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;


const inIt = function () {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    console.log('hhhhhh');
    diceEl.classList.add('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

inIt();

const switchPlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

const rollingDice = function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    if (dice != 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }

    else {
        switchPlayer();

    }
    return dice;
}

rollEl.addEventListener('click', function () {

    diceEl.src = `dice-${rollingDice()}.png`;

    diceEl.classList.remove('hidden');
})

holdEl.addEventListener('click', function () {

    if (playing) {


        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];


        if (scores[activePlayer] >= 100) {

            playing = false;
            rollEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');

            document.querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }
        else {
            switchPlayer();
        }

    }
})

newEl.addEventListener('click', inIt);
