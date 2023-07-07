const prompt = require('prompt-sync')();

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log("\n");
        const playerSelection = prompt("enter rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();

        const results = playRound(playerSelection, computerSelection);
        console.log(results);

        if (results === "player wins the round") {
            playerScore++;
        } else if (results === "computer wins the round") {
            computerScore++;
        }
    }

    console.log("\n");
    console.log("Game Over!");
    console.log("Player Score: ", playerScore);
    console.log("Computer Score: ", computerScore);

    if (playerScore > computerScore) {
        console.log("player wins the match!");
        console.log("\n");
    } else if (computerScore > playerScore) {
        console.log("computer wins the match!");
        console.log("\n");
    } else {
        console.log("it is a tie!");
        console.log("\n");
    }
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomAnswer = options[randomIndex];

    return randomAnswer;
}

console.log("\n");

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock") {
        console.log("\n");
        console.log("computer chooses rock, player chooses rock");
        return "nobody wins";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("\n");
        console.log("computer chooses paper, player chooses rock");
        return "computer wins the round";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        console.log("\n");
        console.log("computer chooses scissors, player chooses rock");
        return "player wins the round";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        console.log("\n");
        console.log("computer chooses rock, player chooses paper");
        return "player wins the round";
    } else if (computerSelection == "paper" && playerSelection  == "paper") {
        console.log("\n");
        console.log("computer chooses paper, player chooses paper");
        return "nobody wins";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("\n");
        console.log("computer chooses scissors, player chooses paper");
        return "computer wins the round";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("\n");
        console.log("computer chooses rock, player chooses scissors");
        return "computer wins the round";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        console.log("\n");
        console.log("computer chooses paper, player chooses scissors");
        return "player wins the round";
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        console.log("\n");
        console.log("computer chooses scissors, player chooses scissors");
        return "nobody wins";
    } else {
        console.log("please enter rock, paper, or scissors");
    }
}

game();