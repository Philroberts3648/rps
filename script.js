function getComputerChoice() {
    let computerChoice = "Rock";
    let random = Math.floor(Math.random() * 3);
    if(random === 1) {
        computerChoice = "Paper";
        return computerChoice.toLowerCase();
    } else if(random === 2) {
        computerChoice = "Scissors";
        return computerChoice.toLowerCase();
    } else {
        return computerChoice.toLowerCase();
    }
}

// console.log(`Computer Choice: ${getComputerChoice()}`);

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice", "Rock");
    return humanChoice.toLowerCase();
}

// console.log(`Human Choice: ${getHumanChoice()}`);

let humanScore = 0;
let computerScore = 0;

// function playGround(humanChoice, computerChoice) {
//     if(humanChoice === computerChoice) {
//         return "Game tie, start another round!"
//     } else if(humanChoice === "rock" && computerChoice === "paper") {
//         computerScore++;
//         return "Computer wins this round!!!";
//     } else if(humanChoice === "paper" && computerChoice === "scissors") {
//         computerScore++;
//         return "Computer wins this round!!!";
//     } else {
//         humanScore++;
//         return "You have won this round!!";
//     }

// }



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) {
            return "Game tie, start another round!"
        } else if(
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            computerScore++
            return "Computer wins this round!";
        } else {
            humanScore++;
            return "You win this round!";
        }

    }

    function startRound() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));
    }

    startRound();
    startRound();
    startRound();
    startRound();
    startRound();
    
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);

    if(humanScore === computerScore) {
        console.log('This game is draw, Try another round or share the proceeds!');
    } else if(humanScore > computerScore) {
        console.log('Congratulations, you have won this game!');
    } else {
        console.log('Computer has won this game!');
    }
    
}

playGame();
