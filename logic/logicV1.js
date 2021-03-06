function askUserInput() {
  let playerSelection = prompt("Rock, Paper, or Scissor?");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(3));
}

function getComputerInput() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = getRandomInt();
  let computerSelection = options[randomIndex];
  return computerSelection;
}

function playRound() {
  // let playerSelection = askUserInput();
  let computerSelection = getComputerInput();
  console.log("what is playerSelection:: ", playerSelection);
  console.log("what is computerSelection:: ", computerSelection);

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! :)";
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! :)";
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! :)";
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    return "Computer Win! >:(";
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    return "Computer Win! >:(";
  }
  else if (computerSelection === "paper" && playerSelection === "rock") {
    return "Computer Win! >:(";
  }
  else {
    return "Keep Playing";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log("");
    console.log("-----------------------------------");
    console.log(playRound());
    console.log("-----------------------------------");
  }
}
