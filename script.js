const player = (symbol) => {
  return { symbol };
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
  return { board, elements };
})();

const displayController = (() => {
  const playerX = player("X");
  const playerY = player("Y");

  let turn = true; // true == X, false == O

  for (let x = 0; x < gameBoard.elements.length; x++) {
    for (let y = 0; y < gameBoard.elements[x].length; y++) {
      let current = gameBoard.elements[x][y];
      current.addEventListener("click", () => {
        if (
          current.classList.contains("select-X") ||
          current.classList.contains("select-O")
        ) {
        } else if (turn) {
          current.classList.add("select-X");
          gameBoard.board[x][y] = "X";
          turn = !turn;
        } else {
          current.classList.add("select-O");
          gameBoard.board[x][y] = "O";
          turn = !turn;
        }
      });
    }
  }
})();
