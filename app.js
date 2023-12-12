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

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const userScore = document.querySelector("#user-score");
const comScore = document.querySelector("#com-score");
const result = document.querySelector("#result");
let userCount = 0;
let comCount = 0;

const checkWinner = () => {
  if (userCount === 5) {
    userCount = 0;
    comCount = 0;
    result.textContent = "You win! Game Reset.";
  } else if (comCount === 5) {
    userCount = 0;
    comCount = 0;
    result.textContent = "You Lose! Game Reset.";
  } else {
    return;
  }
};

rockBtn.addEventListener("click", () => {
  const [res, us, cs] = playRound("rock", getComputerChoice());
  result.textContent = res;
  userCount += us;
  comCount += cs;
  userScore.textContent = `Your Score: ${userCount}`;
  comScore.textContent = `Computer Score: ${comCount}`;
  checkWinner();
});
paperBtn.addEventListener("click", () => {
  const [res, us, cs] = playRound("paper", getComputerChoice());
  result.textContent = res;
  userCount += us;
  comCount += cs;
  userScore.textContent = `Your Score: ${userCount}`;
  comScore.textContent = `Computer Score: ${comCount}`;
  checkWinner();
});
scissorsBtn.addEventListener("click", () => {
  const [res, us, cs] = playRound("scissors", getComputerChoice());
  result.textContent = res;
  userCount += us;
  comCount += cs;
  userScore.textContent = `Your Score: ${userCount}`;
  comScore.textContent = `Computer Score: ${comCount}`;
  checkWinner();
});
