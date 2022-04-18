const playerOne = {
    score: 0,
    button: document.querySelector('#addPlayerOne'),
    display: document.querySelector('#p1Display')
}

const playerTwo = {
    score: 0,
    button: document.querySelector('#addPlayerTwo'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const totalRounds = document.querySelector('#totalRounds');

let maxScore = 3;
let isGameOver = false;

function countScore(player, challenger) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === maxScore) {
            isGameOver = true;
            player.button.disabled = true;
            challenger.button.disabled = true;
            player.display.classList.add('win');
            challenger.display.classList.add('lose');
        }
        player.display.textContent = player.score;
    }
}

function reset() {
    for(let p of [playerOne, playerTwo]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('win', 'lose');
        p.button.disabled = false;
    }
    isGameOver = false;
}

playerOne.button.addEventListener('click', function() {
    countScore(playerOne, playerTwo);
});

playerTwo.button.addEventListener('click', function() {
    countScore(playerTwo, playerOne);
});

totalRounds.addEventListener('change', function() {
    maxScore = parseInt(this.value);
    reset();
});

resetBtn.addEventListener('click', reset);
