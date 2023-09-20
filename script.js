let xTurn = true;

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    handleClick(e),
      {
        once: true,
      };
    swapPlayer();
  });
});

function handleClick(e) {
  if (xTurn == true) {
    e.target.classList.add("x");
  } else {
    e.target.classList.add("o");
  }
}

function swapPlayer() {
  const gameBoard = document.querySelector(".game-board");
  if (xTurn == true) {
    gameBoard.classList.remove("x");
    gameBoard.classList.add("o");
    xTurn = false;
  } else {
    gameBoard.classList.remove("o");
    gameBoard.classList.add("x");
    xTurn = true;
  }
}
