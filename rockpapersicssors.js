const hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

const player3 = {
    name: 'Player 3',
    getHand: getHand
};

const player4 = {
    name: 'Player 4',
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();
    
    console.log(`${player1.name} played ${hand1}`);
    console.log(`${player2.name} played ${hand2}`);

    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    }

    let winner = null;
    if ((hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')) {
        winner = player1;
    } else {
        winner = player2;
    }

    console.log(`${winner.name} wins!`);
    return winner;
}

function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);

        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }

        console.log(`${player1.name} has ${player1Wins} wins`);
        console.log(`${player2.name} has ${player2Wins} wins`);
    }

    const finalWinner = player1Wins === playUntil ? player1 : player2;
    console.log(`${finalWinner.name} wins the game!`);
    return finalWinner;
}

function playTournament(player1, player2, player3, player4, playUntil) {
    console.log("Round 1:");
    const winner1 = playGame(player1, player2, playUntil);

    console.log("Round 2:");
    const winner2 = playGame(player3, player4, playUntil);

    console.log("Final Round:");
    const champion = playGame(winner1, winner2, playUntil);

    console.log(`${champion.name} is the world champion!`);
}


playGame(player1, player2, 3);


playTournament(player1, player2, player3, player4, 3);

module.exports = {
    playRound,
    playGame,
    playTournament,
    player1,
    player2,
    player3,
    player4
};
