function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(3));
}

function createComputerInput() {
  let options = ["rock", "paper", "scissors"];
  let randomIndex = getRandomInt();
  let computerSelection = options[randomIndex];
  return computerSelection;
}

function playRound(playerSelection) {
  computerSelection = createComputerInput();
  console.log("what is playerSelection:: ", playerSelection);
  console.log("what is computerSelection:: ", computerSelection);
  let result = "";

  if (playerSelection === "rock" && computerSelection === "scissors") {
    result = "You Win! :)";
    return [result, computerSelection];
  }
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = "You Win! :)";
    return [result, computerSelection];
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    result = "You Win! :)";
    return [result, computerSelection];
  }
  else if (computerSelection === "rock" && playerSelection === "scissors") {
    result = "Computer Win! >:(";
    return [result, computerSelection];
  }
  else if (computerSelection === "scissors" && playerSelection === "paper") {
    result = "Computer Win! >:(";
    return [result, computerSelection];
  }
  else if (computerSelection === "paper" && playerSelection === "rock") {
    result = "Computer Win! >:(";
    return [result, computerSelection];
  }
  else {
    result = "No player made a good choice, keep playing";
    return [result, computerSelection];
  }
}

function game(playerSelection) {
  let resultArray = playRound(playerSelection);
  return resultArray;
}

const buttons = document.querySelectorAll('button');
let resultContainer = document.querySelector('#result-container');
let statsContainer = document.querySelector("#stats-container");
let playerCount = 0;
let computerCount = 0;
let round = 0;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let playerSelection = button.id;
    let resultArray = game(playerSelection);

    // For Results of the game
    let result = resultArray[0];

    if (result === "You Win! :)") {
      playerCount = playerCount + 1;
    }
    else if (result === "Computer Win! >:(") {
      computerCount = computerCount + 1;
    }

    // For stats of Game
    // Creating a p element to track which round it is
    let pTagRound = document.createElement("p");
    pTagRound.classList.add("p-round");
    round++;
    pTagRound.textContent = "Round: " + round;
    statsContainer.appendChild(pTagRound);

    // Creating a p element for the player selection
    let pTagPlayerSelection = document.createElement("p");
    pTagPlayerSelection.classList.add("p-playerSelection");
    pTagPlayerSelection.textContent = "Player Selection: " + playerSelection;
    pTagPlayerSelection.setAttribute("style", "color: red");
    statsContainer.appendChild(pTagPlayerSelection);

    // Creating a p element for the computer selection
    let pTagComputerSelection = document.createElement("p");
    pTagComputerSelection.classList.add("p-computerSelection");
    pTagComputerSelection.textContent = "Computer Selection: " + resultArray[1];
    pTagComputerSelection.setAttribute("style", "color: blue");
    statsContainer.appendChild(pTagComputerSelection);

    // For Results of game
    // Creating a p element to track which round it is
    let pTagRoundResults = document.createElement("p");
    pTagRoundResults.classList.add("p-round");
    pTagRoundResults.textContent = "Round: " + round;
    resultContainer.appendChild(pTagRoundResults);

    // Creating a p element for the player count
    let pTagPlayerCount = document.createElement("p");
    pTagPlayerCount.classList.add("p-playerCount");
    pTagPlayerCount.textContent = "Player Count: " + playerCount;
    pTagPlayerCount.setAttribute("style", "color: red");
    resultContainer.appendChild(pTagPlayerCount);

    // Creating a p element for the computer count
    let pTagComputerCount = document.createElement("p");
    pTagComputerCount.classList.add("p-computerCount");
    pTagComputerCount.textContent = "Computer Count: " + computerCount;
    pTagComputerCount.setAttribute("style", "color: blue");
    resultContainer.appendChild(pTagComputerCount);

    if (computerCount === 5) {
      alert("Computer reached 5 points first! Computer Won!");
      while (statsContainer.firstChild) {
        statsContainer.removeChild(statsContainer.firstChild);
      }
      while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
      }
      return;
    }
    if (playerCount === 5) {
      alert("Player reached 5 points first! Player Won!");
      while (statsContainer.firstChild) {
        statsContainer.removeChild(statsContainer.firstChild);
      }
      while (resultContainer.firstChild) {
        resultContainer.removeChild(resultContainer.firstChild);
      }
    }
  });
});
