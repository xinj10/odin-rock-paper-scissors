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
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerChoice < computerChoice) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else if (playerChoice > computerChoice) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return playRound(playerSelection, getComputerChoice());
  }
};

/* for test */
// console.log(playRound("Rock", "Scissors"));
// console.log(playRound("Rock", "Paper"));
// console.log(playRound("Paper", "Scissors"));
// console.log(playRound("Scissors", "Scissors"));

