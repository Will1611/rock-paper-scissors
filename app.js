"use strict";

// Variables
const btnPlay = document.querySelector(`.btn-play`);
let humanScore = 0;
let computerScore = 0;

//Functions
const getHumanChoice = function () {
  let humanChoice = prompt("Enter rock, paper or scissors:").toLowerCase();
  humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

  if (
    humanChoice != "Rock" &&
    humanChoice != "Paper" &&
    humanChoice != "Scissors"
  ) {
    alert("Enter a valid choice!");
    getHumanChoice();
  } else {
    console.log(`\nYour choice: ${humanChoice}`);
  }
  return humanChoice;
};

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  console.log(`Computer's choice: ${computerChoice}`);
  return computerChoice;
};

const playRound = function () {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  if (
    (human === "Rock" && computer === "Scissors") ||
    (human === "Paper" && computer === "Rock") ||
    (human === "Scissors" && computer === "Paper")
  ) {
    humanScore++;
    console.log(
      `You win the round! \nYour score: ${humanScore} \nComputer's score: ${computerScore}`
    );
  } else if (
    (human === "Rock" && computer === "Paper") ||
    (human === "Paper" && computer === "Scissors") ||
    (human === "Scissors" && computer === "Rock")
  ) {
    computerScore++;
    console.log(
      `Computer wins the round! \nYour score: ${humanScore} \nComputer's score: ${computerScore}`
    );
  } else {
    console.log("No winner, play again!");
  }
};

const playGame = function () {
  do {
    playRound();
  } while (humanScore < 5 && computerScore < 5);

  if (humanScore === 5) {
    console.log(`\nYou win the game! \nRefresh the browser to play again.`);
    humanScore = 0;
    computerScore = 0;
  } else {
    console.log(
      `\nComputer wins the game! \nRefresh the browser and press the button to play again.`
    );
    humanScore = 0;
    computerScore = 0;
  }
};

const startGame = function () {
  btnPlay.addEventListener(`click`, function () {
    playGame();
  });
};

// Run code
startGame();
