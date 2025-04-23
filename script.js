// testing script.js is working
console.log("Hello, World!");

// storing choices
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rockButton");
const paper_div = document.getElementById("paperButton");
const scissors_div = document.getElementById("scissorsButton");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "rock") return "Rock";
  if (letter === "paper") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML =
    "You win! " +
    convertToWord(userChoice) +
    " beats " +
    convertToWord(computerChoice);
  result_div.style.color = "green";

  setTimeout(function () {
    result_div.innerHTML = "";
  }, 1500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    "You lose! " +
    convertToWord(userChoice) +
    " loses to " +
    convertToWord(computerChoice);
  result_div.style.color = "red";

  setTimeout(function () {
    result_div.innerHTML = "";
  }, 1500);
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML = "It's a draw!";
  result_div.style.color = "black";

  setTimeout(function () {
    result_div.innerHTML = "";
  }, 1500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

main();
