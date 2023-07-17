document.addEventListener("DOMContentLoaded", () => {
    const divResult = document.getElementById("result");
    const roundPoint = document.getElementById("round");
    const playerScoreDisplay = document.getElementById("player-score");
    const computerScoreDisplay = document.getElementById("computer-score");

    let playerScore = 0;
    let computerScore = 0;

    playerScoreDisplay.textContent = playerScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();

    function getComputerChoice() {
        const options = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomAnswer = options[randomIndex];

        return randomAnswer;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection == "rock" && computerSelection == "rock") {
            divResult.textContent = "player chooses rock, computer chooses rock";
            roundPoint.textContent = "nobody wins";
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            divResult.textContent = "player chooses paper, computer chooses rock";
            roundPoint.textContent = "player wins the round";
            playerScore++;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            divResult.textContent = "player chooses scissors, computer chooses rock";
            roundPoint.textContent = "computer wins the round";
            computerScore++;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            divResult.textContent = "player chooses rock, computer chooses paper";
            roundPoint.textContent = "computer wins the round";
            computerScore++;
        } else if (playerSelection == "paper" && computerSelection  == "paper") {
            divResult.textContent = "player chooses paper, computer chooses paper";
            roundPoint.textContent = "nobody wins";
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            divResult.textContent = "player chooses scissors, computer chooses paper";
            roundPoint.textContent = "player wins the round";
            playerScore++;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            divResult.textContent = "player chooses rock, computer chooses scissors";
            roundPoint.textContent = "player wins the round";
            playerScore++;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            divResult.textContent = "player chooses paper, computer chooses scissors";
            roundPoint.textContent = "computer wins the round";
            computerScore++;
        } else if (playerSelection == "scissors" && computerSelection == "scissors") {
            divResult.textContent = "player chooses scissors, computer chooses scissors";
            roundPoint.textContent = "nobody wins";
        } else {
            divResult.textContent = "please enter rock, paper, or scissors";
        }
        
        playerScoreDisplay.textContent = playerScore.toString();
        computerScoreDisplay.textContent = computerScore.toString();

        if (playerScore === 5) {
            divResult.textContent = "Player wins the game!";
            resetGame();
        } else if (computerScore === 5) {
            divResult.textContent = "Computer wins the game!";
            resetGame();
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
    }

    document.getElementById("rock").addEventListener('click', () => {
        playRound("rock", getComputerChoice());
    });

    document.getElementById("paper").addEventListener('click', () => {
        playRound("paper", getComputerChoice());
    });

    document.getElementById("scissors").addEventListener('click', () => {
        playRound("scissors", getComputerChoice());
    });
});