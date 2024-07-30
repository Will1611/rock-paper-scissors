"use strict";

// Function declarations are hoisted but function expressions are not.

// Variables

let scores = {
  humanScore: 0,
  computerScore: 0,
};
let roundNumber = 1;

let roundWinner;

let humanChoice;
let computerChoice;

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

// Functions
