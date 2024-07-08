"use strict";

let humanScore = 0;
let computerScore = 0;

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
  }

  return humanChoice;
};

const getComputerChoice = function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  if (randomNumber === 1) {
    computerChoice = "Rock!";
  } else if (randomNumber === 2) {
    computerChoice = "Paper!";
  } else if (randomNumber === 3) {
    computerChoice = "Scissors!";
  }
  return computerChoice;
};

const playRound = function () {};
