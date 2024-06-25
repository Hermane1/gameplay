const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
    name: 'Player 1',
    getHand: getHand,
    score: 0
};

const player2 = {
    name: 'Player 2',
    getHand: getHand,
    score: 0
};

function playRound(player1, player2, player1Hand) {
    const hand1 = player1Hand;
    const hand2 = player2.getHand();

    document.getElementById('player1-choice').textContent = `${player1.name} chose ${hand1}`;
    document.getElementById('player2-choice').textContent = `${player2.name} chose ${hand2}`;

    if (hand1 === hand2) {
        return "It's a tie!";
    }

    if ((hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')) {
        player1.score++;
        return `${player1.name} wins the round!`;
    } else {
        player2.score++;
        return `${player2.name} wins the round!`;
    }
}

document.getElementById('start-game').addEventListener('click', () => {
    player1.name = document.getElementById('player1-name').value || 'Player 1';
    player2.name = document.getElementById('player2-name').value || 'Player 2';

    document.getElementById('player1-display').textContent = player1.name;
    document.getElementById('player2-display').textContent = player2.name;
    document.getElementById('player1-score').textContent = '0';
    document.getElementById('player2-score').textContent = '0';

    player1.score = 0;
    player2.score = 0;

    document.querySelector('.game-area').style.display = 'block';
});

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const player1Hand = button.getAttribute('data-hand');
        const roundResult = playRound(player1, player2, player1Hand);

        document.getElementById('round-result').textContent = roundResult;
        document.getElementById('player1-score').textContent = player1.score;
        document.getElementById('player2-score').textContent = player2.score;

        if (player1.score >= 3 || player2.score >= 3) {
            const gameResult = player1.score >= 3 ? `${player1.name} wins the game!` : `${player2.name} wins the game!`;
            document.getElementById('game-result').textContent = gameResult;

            document.getElementById('play-again').style.display = 'block';
        }
    });
});

document.getElementById('play-again').addEventListener('click', () => {
    document.getElementById('round-result').textContent = '';
    document.getElementById('game-result').textContent = '';
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('player1-choice').textContent = '';
    document.getElementById('player2-choice').textContent = '';
    
    player1.score = 0;
    player2.score = 0;
    
    document.getElementById('player1-score').textContent = '0';
    document.getElementById('player2-score').textContent = '0';
});
