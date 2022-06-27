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

  let currentTurn = true; // true == X, false == O
  gameBoard.elements.forEach((x) => {
    x.forEach((y) => {
      y.addEventListener("click", () => {
        if (
          y.classList.contains("select-X") ||
          y.classList.contains("select-O")
        ) {
        } else if (currentTurn) {
          y.classList.add("select-X");
          currentTurn = !currentTurn;
        } else {
          y.classList.add("select-O");
          currentTurn = !currentTurn;
        }
      });
    });
  });
  // gameBoard.elements[1][2].classList.add("select-O");
  // gameBoard.elements[0][2].classList.add("select-X");
})();
