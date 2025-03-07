"use strict";

// Logic variables

let humanScore, computerScore, roundWinner, humanChoice, computerChoice;

//DOM elements

const overlay = document.querySelector(".overlay");
const overlayNew = document.querySelector(".overlay-new");
const overlayWin = document.querySelector(".overlay-win");

const btnOverlay = document.querySelector(".btn-overlay");
const btnOverlayNew = document.querySelector(".btn-overlay-new");
const btnContinue = document.querySelector(".btn-continue");
const btnOverlayWin = document.querySelector(".btn-overlay-win");
const overlayWinSpan = document.querySelector(`.overlay-win-span`);
const btnDivOverlay = document.querySelector(".btn-div-overlay");

const btnPause = document.querySelector(".btn-pause");
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissors = document.querySelector(".btn-scissors");
const btnArr = [btnRock, btnPaper, btnScissors];

const showHumanScore = document.querySelector(".human-score");
const showComputerScore = document.querySelector(".computer-score");

const showComputerChoice = document.querySelector(".show-computer-choice");
const showHumanChoice = document.querySelector(".show-human-choice");
const humanChoiceImg = document.createElement("img");
const computerChoiceImg = document.createElement("img");

const showWinner = document.querySelector(".show-winner");
const winnerH3 = document.createElement("h3");

// Functions

function init() {
  humanScore = 0;
  computerScore = 0;
  showHumanScore.textContent = humanScore;
  showComputerScore.textContent = computerScore;

  humanChoice = "";
  computerChoice = "";
  roundWinner = "";
}

function startGame() {
  btnOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });
  init();
}

btnPause.addEventListener(`click`, () => {
  overlayNew.classList.remove(`hidden`);
  btnOverlayNew.addEventListener(`click`, () => {
    overlayNew.classList.add(`hidden`);
    init();
  });
  btnContinue.addEventListener(`click`, () => {
    overlayNew.classList.add(`hidden`);
  });
  overlayNew.addEventListener(`click`, () => {
    overlayNew.classList.add(`hidden`);
  });
});

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3) + 1;
  let computerStr;
  switch (num) {
    case 1:
      computerStr = `rock`;
      break;
    case 2:
      computerStr = `paper`;
      break;
    case 3:
      computerStr = `scissors`;
      break;
  }
  return computerStr;
}

function checkWinner(humanChoice, computerChoice) {
  let winner;
  if (
    // tie
    (humanChoice === `rock` && computerChoice === `rock`) ||
    (humanChoice === `paper` && computerChoice === `paper`) ||
    (humanChoice === `scissors` && computerChoice === `scissors`)
  ) {
    winner = null;
  } else if (
    // human wins
    (humanChoice === `rock` && computerChoice === `scissors`) ||
    (humanChoice === `paper` && computerChoice === `rock`) ||
    (humanChoice === `scissors` && computerChoice === `paper`)
  ) {
    winner = `human`;
    humanScore++;

    // computer wins
  } else if (
    (humanChoice === `paper` && computerChoice === `scissors`) ||
    (humanChoice === `scissors` && computerChoice === `rock`) ||
    (humanChoice === `rock` && computerChoice === `paper`)
  ) {
    winner = `computer`;
    computerScore++;
  }
  // if (humanScore === 5 || computerScore === 5) {
  //   console.log(`Round over`);
  // }
  return winner;
}

function appendInfo(humanChoice, computerChoice, roundWinner) {
  btnPause.classList.add(`hidden`);
  //Show human choice
  showHumanChoice.appendChild(humanChoiceImg);
  humanChoiceImg.classList.add("rps-icon");
  humanChoiceImg.src = `img/hand-${humanChoice}-solid.svg`;

  // show computer choice
  setTimeout(() => {
    showComputerChoice.appendChild(computerChoiceImg);
    computerChoiceImg.classList.add("rps-icon");
    computerChoiceImg.src = `img/hand-${computerChoice}-solid.svg`;

    // Update and show score
    if (roundWinner === `human`) {
      showHumanScore.textContent = humanScore;
    } else if (roundWinner === `computer`) {
      showComputerScore.textContent = computerScore;
    }

    //show winner
    showWinner.appendChild(winnerH3);
    if (roundWinner === `human`) {
      winnerH3.textContent = "You win! 🎉";
    } else if (roundWinner === `computer`) {
      winnerH3.textContent = "Computer wins 😞";
    } else {
      winnerH3.textContent = "It's a tie! ⚔️";
    }
  }, 1000);

  setTimeout(() => {
    showHumanChoice.removeChild(humanChoiceImg);
    showComputerChoice.removeChild(computerChoiceImg);
    showWinner.removeChild(winnerH3);
    btnPause.classList.remove(`hidden`);
    btnDivOverlay.classList.add(`hidden`);
    btnRock.classList.remove(`unclickable`);
    btnPaper.classList.remove(`unclickable`);
    btnScissors.classList.remove(`unclickable`);
  }, 2800);

  if (humanScore === 5 || computerScore === 5) {
    if (roundWinner === `human`) {
      overlayWinSpan.textContent = `You win!`;
    } else if (roundWinner === `computer`) {
      overlayWinSpan.textContent = `Computer wins!`;
    }
    setTimeout(() => {
      overlayWin.classList.remove("hidden");
      overlayWin.addEventListener(`click`, () => {
        overlayWin.classList.add(`hidden`);
        init();
      });
      btnOverlayWin.addEventListener(`click`, () => {
        overlayWin.classList.add(`hidden`);
        init();
      });
    }, 2850);
  }
}

function playRound() {
  btnArr.forEach((button) => {
    button.addEventListener(`click`, (event) => {
      btnDivOverlay.classList.remove(`hidden`);
      btnRock.classList.add(`unclickable`);
      btnPaper.classList.add(`unclickable`);
      btnScissors.classList.add(`unclickable`);
      humanChoice = event.target.textContent.toLowerCase();
      computerChoice = getComputerChoice();
      roundWinner = checkWinner(humanChoice, computerChoice);
      appendInfo(humanChoice, computerChoice, roundWinner);
    });
  });
}

// Run code
startGame();
playRound();
