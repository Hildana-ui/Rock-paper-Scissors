let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else {
        return "scissor";
    } 
}



function getHumanChoice() {
    let choice = prompt("Enter: ").toLowerCase();
    return choice;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === "rock"    && computerChoice === "scissor") ||
        (humanChoice === "paper"   && computerChoice === "rock")    ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log(`You WIN! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`);
        return "human";
    } else {
        console.log(`You LOSE! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`);
        return "computer";
    }
}





function playGame() {
    for (i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const Score = playRound(humanChoice, computerChoice);

        if (Score === "human") humanScore++;
        if (Score === "computer") computerScore++;


        console.log(`Your score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }   
    
    console.log("Final Score:");
    console.log("You: ", humanScore);
    console.log("Computer: ", computerScore)
}

playGame();