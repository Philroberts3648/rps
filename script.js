function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choice.length);
    return choice[random].toLowerCase();
}

console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice", "Rock");
    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;