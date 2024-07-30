"use strict";

// Function declarations are hoisted but function expressions are not.

// Logic variables

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

let roundWinner;

let humanChoice;
let computerChoice;

//DOM elements

const overlay = document.querySelector(".overlay");
const btnOverlay = document.querySelector(".btn-overlay");

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
function startGame() {
  btnOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    console.log(`Playing round`);
  });
}

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

function appendInfo(humanChoice, computerChoice, roundWinner, roundNumber) {
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
    roundNumber++;
    showRoundNumber.textContent = roundNumber;
  }, 3000);
}

function playRound() {
  btnArr.forEach((button) => {
    button.addEventListener(`click`, (event) => {
      humanChoice = event.target.textContent.toLowerCase();
      computerChoice = getComputerChoice();
      roundWinner = checkWinner(humanChoice, computerChoice);
      appendInfo(humanChoice, computerChoice, roundWinner, roundNumber);
    });
  });
}

startGame();
playRound();
