const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('game-status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameWon = false;

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);

function handleClick(event) {
    if (gameWon || currentPlayer === 'O') return; // Prevent player clicks during AI turn

    const cellIndex = event.target.id;
    if (gameBoard[cellIndex] === '') {
        gameBoard[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;

        if (checkWin()) {
            endGame(`${currentPlayer} wins!`);
            return;
        }

        if (checkDraw()) {
            endGame("It's a draw!");
            return;
        }

        switchPlayer();
        gameStatus.textContent = `${currentPlayer}'s turn`;
        aiMove(); // AI makes its move
    }
}

function aiMove() {
    if (gameWon) return;

    // Simple AI: Random move
    let availableMoves = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            availableMoves.push(i);
        }
    }

    if (availableMoves.length > 0) {
        const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
        gameBoard[randomMove] = currentPlayer;
        cells[randomMove].textContent = currentPlayer;

        if (checkWin()) {
            endGame(`${currentPlayer} wins!`);
            return;
        }

        if (checkDraw()) {
            endGame("It's a draw!");
            return;
        }

        switchPlayer();
        gameStatus.textContent = `${currentPlayer}'s turn`;
    }
}


function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameWon = false;
    gameStatus.textContent = "X's turn";
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

function endGame(message) {
    gameStatus.textContent = message;
    gameWon = true;
}