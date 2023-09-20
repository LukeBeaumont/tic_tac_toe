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
const x_class = "x";
const o_class = "o";
const boxes = document.querySelectorAll("[data-cell]");
const gameBoard = document.querySelector(".game-board");
let circleTurn;

boxes.forEach((box) => {
  box.addEventListener("click", handleClick, { once: true });
});

function handleClick(e) {
  const box = e.target;
  const currentClass = circleTurn ? o_class : x_class;
  placeMark(box, currentClass);
  swapTurns();
  setHoverClass();
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
