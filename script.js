let userScore = 0;
let compScore = 0;

// DOM (Selector)
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Computer Random number select from 0-3. then select idx on arry
const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

// Draw game massage
const drawGame = () => {
  msg.innerText = "Game was Draw.";
  msg.style.backgroundColor = "#081b31";
};

// Show on Html or webPage
let showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

// Game logic on conditional
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors. paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listener on click
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
