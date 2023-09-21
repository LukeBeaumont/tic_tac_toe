const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boxes = document.querySelectorAll("[data-cell]");
const gameBoard = document.querySelector(".game-board");
let circleTurn;

boxes.forEach((box) => {
  box.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const box = e.target;
  const currentClass = circleTurn ? "o" : "x";
  placeMark(box, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setHoverClass();
  }
}

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function setHoverClass() {
  gameBoard.classList.remove("x");
  gameBoard.classList.remove("o");
  if (circleTurn) {
    gameBoard.classList.add("o");
  } else {
    gameBoard.classList.add("x");
  }
}

function checkWin(currentClass) {
  return winningCombos.some((combinations) => {
    return combinations.every((index) => {
      return boxes[index].classList.contains(currentClass);
    });
  });
}

function endGame(draw) {
  const winnerMessage = document.querySelector(".winner-message");
  const winnerScreen = document.querySelector(".winner-screen");
  if (draw) {
    winnerMessage.innerText = "Its a draw";
  } else {
    winnerMessage.innerText = `${circleTurn ? "O's" : "X's"} win!`;
  }
  winnerScreen.classList.add("show");
}

function isDraw() {
  return [...boxes].every((box) => {
    return box.classList.contains("x") || box.classList.contains("o");
  });
}
