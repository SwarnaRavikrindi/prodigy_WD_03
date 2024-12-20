# Tic-Tac-Toe with AI (JavaScript)

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. It features a single-player mode where you play against a basic AI opponent that makes random moves.

## Features

*   Single-player mode (vs. AI)
*   Clear visual representation of the game board
*   Tracks game state (X's and O's)
*   Detects win and draw conditions
*   Resets the game on button click
*   Simple AI using random moves

## How to Play

1.  Clone or download the repository.
2.  Open `index.html` in your web browser.
3.  Click on the empty cells to place your "X".
4.  The AI ("O") will make its move.
5.  The game continues until there is a winner or a draw.
6.  Click the "Reset" button to start a new game.

## Files

*   `index.html`: The main HTML file containing the structure of the game.
*   `style.css`: The CSS file for styling the game board and other elements.
*   `script.js`: The JavaScript file containing the game logic and AI.

## Code Explanation (script.js)

*   **`handleClick(event)`:** Handles player clicks, updates the game board, checks for win/draw, switches turns, and triggers the AI's move.
*   **`aiMove()`:** Implements the AI's move using a random selection of available cells.
*   **`checkWin()`:** Checks for all possible winning combinations (rows, columns, diagonals).
*   **`checkDraw()`:** Checks if the game is a draw (all cells filled).
*   **`switchPlayer()`:** Switches the current player between X and O.
*   **`resetGame()`:** Resets the game board, current player, and game status.
*   **`endGame(message)`:** Displays the game result (win or draw).

## Future Improvements

*   Implement a more intelligent AI (e.g., using the Minimax algorithm).
*   Add a two-player mode.
*   Improve the user interface and styling.
*   Add game statistics tracking.

