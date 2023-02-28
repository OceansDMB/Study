const board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const printBoard = () => {
  console.log(
    "\n" +
      ` ${board[0]} | ${board[1]} | ${board[2]} \n` +
      " ---------\n" +
      ` ${board[3]} | ${board[4]} | ${board[5]} \n` +
      " ---------\n" +
      ` ${board[6]} | ${board[7]} | ${board[8]} \n`
  );
};

const playerMove = (icon) => {
  let choice = parseInt(prompt(`Player ${icon}: Enter your move (1-9):`));
  if (board[choice - 1] === " ") {
    board[choice - 1] = icon;
  } else {
    console.log("\n" + "That space is already taken!" + "\n");
    playerMove(icon);
  }
};

const isVictory = (icon) => {
  if (
    (board[0] === icon && board[1] === icon && board[2] === icon) ||
    (board[3] === icon && board[4] === icon && board[5] === icon) ||
    (board[6] === icon && board[7] === icon && board[8] === icon) ||
    (board[0] === icon && board[3] === icon && board[6] === icon) ||
    (board[1] === icon && board[4] === icon && board[7] === icon) ||
    (board[2] === icon && board[5] === icon && board[8] === icon) ||
    (board[0] === icon && board[4] === icon && board[8] === icon) ||
    (board[2] === icon && board[4] === icon && board[6] === icon)
  ) {
    return true;
  } else {
    return false;
  }
};

const isDraw = () => {
  return !board.includes(" ");
};

while (true) {
  printBoard();
  playerMove("X");
  if (isVictory("X")) {
    printBoard();
    console.log("\n" + "X wins! Congratulations!" + "\n");
    break;
  } else if (isDraw()) {
    printBoard();
    console.log("\n" + "It's a draw!" + "\n");
    break;
  }
  printBoard();
  playerMove("O");
  if (isVictory("O")) {
    printBoard();
    console.log("\n" + "O wins! Congratulations!" + "\n");
    break;
  } else if (isDraw()) {
    printBoard();
    console.log("\n" + "It's a draw!" + "\n");
    break;
  }
}
