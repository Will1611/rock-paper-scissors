"use strict";

// Logic variables

let humanScore, computerScore, roundWinner, humanChoice, computerChoice;

//DOM elements

const overlay = document.querySelector(".overlay");
const btnOverlay = document.querySelector(".btn-overlay");

const overlayNew = document.querySelector(".overlay-new");
const btnOverlayNew = document.querySelector(".btn-overlay-new");

const btnNew = document.querySelector(".new-game");
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

const showRoundNumber = document.querySelector(".round-span");

// Functions

function init() {
  humanScore = 0;
  computerScore = 0;
  showHumanScore.textContent = humanScore;
  showComputerScore.textContent = computerScore;
}

function startGame() {
  btnOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    console.log(`Playing round`);
  });

  init();
}

btnNew.addEventListener(`click`, () => {
  overlayNew.classList.remove(`hidden`);
  btnOverlayNew.addEventListener(`click`, () => {
    overlayNew.classList.add(`hidden`);
    init();
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
    (humanChoice === `rock` && computerChoice === `scissors`) ||
    (humanChoice === `paper` && computerChoice === `rock`) ||
    (humanChoice === `scissors` && computerChoice === `paper`)
  ) {
    winner = `human`;
    // computer wins
  } else if (
    (humanChoice === `paper` && computerChoice === `scissors`) ||
    (humanChoice === `scissors` && computerChoice === `rock`) ||
    (humanChoice === `rock` && computerChoice === `paper`)
  ) {
    winner = `computer`;
  }
  return winner;
}

function appendInfo(humanChoice, computerChoice, roundWinner) {
  btnNew.classList.add(`hidden`);
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
      humanScore++;
      showHumanScore.textContent = humanScore;
    } else if (roundWinner === `computer`) {
      computerScore++;
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
    btnNew.classList.remove(`hidden`);
  }, 2800);
}

function playRound() {
  btnArr.forEach((button) => {
    button.addEventListener(`click`, (event) => {
      // Selects alt text in HTML
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
