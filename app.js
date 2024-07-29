"use strict";

// Function declarations are hoisted but function expressions are not.

// Variables

let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

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
const choiceImg = document.createElement("img");

// Functions

const startGame = function () {
  btnOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });
  btnOverlay.removeEventListener("click", addEventListener);
};

const playRound = function () {
  btnArr.forEach((button) => {
    button.addEventListener("click", (event) => {
      let humanChoice = event.target.innerText;
      decideWinner(humanChoice);
    });
  });
};
const decideWinner = function (humanChoice) {
  let roundWinner;
  const computerChoice = getComputerChoice();

  if (computerChoice === humanChoice) {
    console.log(
      `Human choice: ${humanChoice}\nComputer choice: ${computerChoice}\nIt's a tie`
    );
    //Computer wins
  } else if (
    (computerChoice === "Rock" && humanChoice == "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Paper")
  ) {
    roundWinner = "Computer";
    computerScore++;
    showComputerScore.textContent = computerScore;

    showComputerChoice.appendChild(choiceImg);
    choiceImg.classList.add("rps-icon");
    choiceImg.src = "img/hand-rock-solid.svg";
    console.log(
      `Human choice: ${humanChoice}\nComputer choice: ${computerChoice}\n${roundWinner} wins`
    );
    //Human wins
  } else if (
    (humanChoice === "Rock" && computerChoice == "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundWinner = "Human";
    humanScore++;
    showHumanScore.textContent = humanScore;

    console.log(
      `Human choice: ${humanChoice}\nComputer choice: ${computerChoice}\n${roundWinner} wins`
    );
  }

  const getComputerChoice = function () {
    let computerStr;
    let choiceNumber = Math.floor(Math.random() * 3) + 1;
    if (choiceNumber === 1) {
      computerStr = "Rock";
    } else if (choiceNumber === 2) {
      computerStr = "Paper";
    } else if (choiceNumber === 3) {
      computerStr = "Scissors";
    }
    return computerStr;
  };
};

const playGame = function () {
  startGame();
  do {
    playRound();
  } while (humanScore < 5 && computerScore < 5);
};
