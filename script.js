const gameBoard = (() => {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    return { board };
})();

const player = (symbol) => {
    return { symbol };
}

const playerX = player("X");
const playerY = player("Y");