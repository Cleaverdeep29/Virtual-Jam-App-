document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('board');
    const game = new TicTacToe();

    // Render the board
    function renderBoard() {
        boardElement.innerHTML = '';
        game.board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.addEventListener('click', () => {
                if (game.makeMove(index)) {
                    renderBoard();
                    const winner = game.checkWinner();
                    if (winner) {
                        setTimeout(() => alert(`${winner} wins!`), 100);
                        game.resetGame();
                    }
                }
            });
            boardElement.appendChild(cellElement);
        });
    }

    renderBoard();
});
