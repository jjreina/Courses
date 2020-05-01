/*
YOUR 3 CHALLENGES
Change the game to follow these rules:
1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good opportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

let scores, roundScore, activePlayer, gamePlaying, lastDice, winningScores;
const defaultWinningScore = 100;

let diceDOM_1 = document.getElementById('dice-1');
let diceDOM_2 = document.getElementById('dice-2');

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    diceDOM_1.style.display = 'none';
    diceDOM_2.style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById(`name-0`).textContent = 'Player 1';
    document.getElementById(`name-1`).textContent = 'Player 2';

    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
}

function nextPlayer() {
    
    document.getElementById(`current-${activePlayer}`).textContent = '0';
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDOM_1.style.display = 'none';
    diceDOM_2.style.display = 'none';
}

init();

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {
        let dice_1 = Math.floor(Math.random() * 6) + 1;
        let dice_2 = Math.floor(Math.random() * 6) + 1;

        diceDOM_1.style.display = 'block';
        diceDOM_2.style.display = 'block';

        diceDOM_1.src = `img/dice-${dice_1}.png`;
        diceDOM_2.src = `img/dice-${dice_2}.png`;
       
        /* Challenge 2
            if (dice === 6 && lastDice === 6) {
                scores[activePlayer] = 0;
                document.getElementById(`score-${activePlayer}`).textContent = 0;
                nextPlayer();
            } else if (dice !== 1) {
                roundScore += dice;
                document.getElementById(`current-${activePlayer}`).textContent = roundScore;
            } else {
                nextPlayer();
            }
            lastDice = dice;
        */

        // Challenge 3
        if (dice_1 !== 1 && dice_2 !== 1) {
            roundScore += dice_1 + dice_2;
            document.getElementById(`current-${activePlayer}`).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= winningScores) {
            document.getElementById(`name-${activePlayer}`).textContent = 'Winner!';
            diceDOM_1.style.display = 'none';
            diceDOM_2.style.display = 'none';
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-final-score').addEventListener('click', () => {
    let input = document.querySelector('.final-score').value;

    if (Number.isInteger(Number.parseInt(input))) {
        winningScores = input;
    } else {
        winningScores = defaultWinningScore;
    }
    console.log(winningScores);
});
