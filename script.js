const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const playGame = () => {
        const playerOptions = document.querySelectorAll('.selection button');
        const computerOptions = ['rock', 'paper', 'scissors'];

        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const moveIndex = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[moveIndex];
                winner(this.getAttribute('data-move'), computerChoice);
            });
        });
    };

    const winner = (player, computer) => {
        const result = document.querySelector('.outcome');
        const playerScoreBoard = document.querySelector('.player-score');
        const computerScoreBoard = document.querySelector('.computer-score');
        
        if (player === computer) {
            result.textContent = `It's a Tie. Both chose ${player.toUpperCase()}`;
        } else if ((player == 'rock' && computer == 'scissors') ||
                   (player == 'scissors' && computer == 'paper') ||
                   (player == 'paper' && computer == 'rock')) {
            playerScore++;
            result.textContent = `Player wins! ${player.toUpperCase()} beats ${computer.toUpperCase()}`;
        } else {
            computerScore++;
            result.textContent = `Robot wins! ${computer.toUpperCase()} beats ${player.toUpperCase()}`;
        }

        playerScoreBoard.textContent = playerScore;
        computerScoreBoard.textContent = computerScore;

        if (playerScore >= 10 || computerScore >= 10) {
            gameOver();
        }
    };

    const gameOver = () => {
        const selectionArea = document.querySelector('.selection');
        const reloadBtn = document.querySelector('.reload');

        selectionArea.style.display = 'none';

        reloadBtn.style.display = 'block';
        reloadBtn.addEventListener('click', resetGame);
    };

    const resetGame = () => {
        playerScore = 0;
        computerScore = 0;
        
        document.querySelector('.player-score').textContent = playerScore;
        document.querySelector('.computer-score').textContent = computerScore;
        document.querySelector('.outcome').textContent = '';
        document.querySelector('.selection').style.display = 'flex';
        document.querySelector('.reload').style.display = 'none';
    };

    playGame();
};

game();