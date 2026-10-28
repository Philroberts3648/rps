const container = document.querySelector(".container");
const result = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;
let winningScore = 5;

let choices = ["rock", "paper", "scissors"];
let gameOver = false;

const scoreDisplay = document.createElement("p");
container.appendChild(scoreDisplay);

function updateScore() {
    scoreDisplay.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        return "Game tie, start another round!";
    } else if(
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerScore++
        return `Computer wins this round!, you chose: ${humanChoice}, computer chose: ${computerChoice}`;
    } else {
        humanScore++;
        return `you won this round!, you chose: ${humanChoice}, computer chose: ${computerChoice}`;
    }

}

function finishGame(buttons) {
    gameOver = true;
    buttons.forEach(button => {
        button.disabled = true;
    });

    if(humanScore === winningScore) {
        result.textContent = `You won the game! Final score: ${humanScore} - ${computerScore}.`;
    } else {
        result.textContent = `Computer won! Final score: ${humanScore} - ${computerScore}.`;
    }
}



function playGame() {
    const buttons = choices.map(choice => {
        const button = document.createElement("button");
        button.id = choice;
        button.textContent = choice;

        button.addEventListener("click", () => {
            if(gameOver) {
                return;
            }

            const computerChoice = getComputerChoice();

            result.textContent = playRound(choice, computerChoice);
            updateScore();

            if(humanScore === winningScore || computerScore === winningScore) {
                finishGame(buttons);
            }
        });

        container.appendChild(button);
        return button;
    });

    updateScore();
    result.textContent = "Choose rock, paper, or scissors to start.";
    
    
}

playGame();
