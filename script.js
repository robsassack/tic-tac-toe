const player = (symbol, name) => {
  return { symbol, name };
};

const gameBoard = (() => {
  const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  let boardSel = document.querySelectorAll(".game-board-square");
  const elements = [
    [boardSel[0], boardSel[1], boardSel[2]],
    [boardSel[3], boardSel[4], boardSel[5]],
    [boardSel[6], boardSel[7], boardSel[8]],
  ];
  let turn = true; // true == X, false == O
  return { board, elements, turn };
})();

const displayController = (() => {
  const playerX = player("X", "Player 1");
  const playerO = player("O", "Player 2");

  for (let x=0; x<gameBoard.elements.length; x++){
    for (let y=0; y<gameBoard.elements[x].length; y++){
      let current = gameBoard.elements[x][y];
      current.addEventListener('click', logConsole.bind(null, current, x, y));
    }
  }

  function logConsole(e, x, y) {
    addToBoard(e, x, y);
    let winner = checkWinner(gameBoard.board);
    if (winner) {
      console.log(winner);
      disableBoard();
    }
  }

  let resetButton = document.querySelector(".new-game");
  resetButton.addEventListener("click", () => {
    resetBoard();
  });
})();

function resetBoard() {
  gameBoard.board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const grid = document.querySelectorAll(".game-board-square");
  grid.forEach((element) => {
    element.classList.remove("select-X");
    element.classList.remove("select-O");
  })
}

function addToBoard(current, x, y) {
  if (
    current.classList.contains("select-X") ||
    current.classList.contains("select-O")
  ) {
  } else if (gameBoard.turn) {
    current.classList.add("select-X");
    gameBoard.board[x][y] = "X";
    gameBoard.turn = !gameBoard.turn;
  } else {
    current.classList.add("select-O");
    gameBoard.board[x][y] = "O";
    gameBoard.turn = !gameBoard.turn;
  }
}

function disableBoard() {
  // logic here to disable game board
  for (let x = 0; x < gameBoard.elements.length; x++) {
    for (let y = 0; y < gameBoard.elements[x].length; y++) {
      let current = gameBoard.elements[x][y];
      current.replaceWith(current.cloneNode(true));
    }
  }
}

function checkWinner(board) {
  for (i=0; i<3; i++) {
    // check for vertical lines
    if ((board[i][0] !== '' &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2])) {
      return board[i][0];
    // check for horizontal lines
    } else if ((board[0][i] !== '' &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i])) {
      return board[0][i];
    }
  }
  // check for diagonals
  if (
    board[0][0] !== '' &&
    board[0][0] === board[1][1] &&
    board[1][1] == board[2][2]) {
      return board[1][1];
  } else if (
    board[2][0] !== '' &&
    board[2][0] === board[1][1] &&
    board[1][1] === board[0][2]){
      return board[1][1];
  }
  if (isBoardEmpty() === true) {
    return -1; // returned if no winner
  }
}

function isBoardEmpty() {
  for (let x = 0; x < gameBoard.elements.length; x++) {
    for (let y = 0; y < gameBoard.elements[x].length; y++) {
      if (gameBoard.board[x][y] === '') {
        return false; // empty square on board found
      }
    }
  }
  return true; // none of the squares on the board are empty
}
