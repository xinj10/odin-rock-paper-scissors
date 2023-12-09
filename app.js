const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection =
    playerSelection[0].toUpperCase() +
    playerSelection.substring(1).toLowerCase();
  const playerChoice = choices.findIndex((c) => c === playerSelection);
  const computerChoice = choices.findIndex((c) => c === computerSelection);
  if (playerChoice === 0 && computerChoice === 2) {
    return [`You Win! ${playerSelection} beats ${computerSelection}`, 1, 0];
  } else if (playerChoice === 2 && computerChoice === 0) {
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
  } else if (playerChoice < computerChoice) {
    return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
  } else if (playerChoice > computerChoice) {
    return [`You Win! ${playerSelection} beats ${computerSelection}`, 1, 0];
  } else {
    return playRound(playerSelection, getComputerChoice());
  }
};

const game = () => {
  const gameRound = 5;
  let userWinCount = 0;
  let comWinCount = 0;
  for (let round = 0; round < 5; round++) {
    const playerSelection = prompt(
      "Please enter your choice among Rock, Paper and Scissors"
    );
    const [result, userScore, comWinScore] = playRound(
      playerSelection,
      getComputerChoice()
    );
    console.log(result);
    userWinCount += userScore;
    comWinCount += comWinScore;
    if (userWinCount === 3 || comWinCount === 3) {
      break;
    }
  }
  if (userWinCount === 3) {
    console.log("You Win!");
  } else {
    console.log("You Lose!");
  }
};

game();

/* for test */
// console.log(playRound("Rock", "Scissors"));
// console.log(playRound("Scissors", "Rock"));
// console.log(playRound("Rock", "Paper"));
// console.log(playRound("Paper", "Scissors"));
// console.log(playRound("Scissors", "Scissors"));
