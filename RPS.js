let humanScore = 0;
let computerScore = 0;


const div = document.createElement('div');
document.body.appendChild(div);



const rock = document.createElement('button');
const paper = document.createElement('button');
const scissor = document.createElement('button');


rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";


document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);



function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    return ["rock","paper","scissor"][num];
}


function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        div.textContent = "It's a tie!";
        return;
    }

    if (
        (humanChoice === "rock"    && computerChoice === "scissor") ||
        (humanChoice === "paper"   && computerChoice === "rock")    ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        div.textContent = `You WIN! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        humanScore++;
    } else {
        div.textContent = `You LOSE! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
        computerScore++;
    }

    div.textContent += ` | You: ${humanScore} Computer: ${computerScore}`;
}


rock.addEventListener("click", () => {
    playRound("rock");
});

paper.addEventListener("click", () => {
    playRound("paper");
});

scissor.addEventListener("click", () => {
    playRound("scissor");
});



// function playGame(humanChoice) {
//     const hs = document.createElement('div');
//     const cs = document.createElement('div');

//     for (let i = 1; i <= 5; i++) {
//         const computerChoice = getComputerChoice();

//         const Score = playRound(humanChoice, computerChoice);

//         if (Score === "human") humanScore++;
//         if (Score === "computer") computerScore++;


//         hs.textContent = `Your score: ${humanScore}`;
//         cs.textContent = `Computer Score: ${computerScore}`;
//     }  

    
//     const fs = document.createElement('div');
//     const fhs = document.createElement('div');
//     const fcs = document.createElement('div');
    
//     fs.textContent = "Final Score:";
//     fhs.textContent = `You: ${humanScore}`;
//     fcs.textContent = `Computer: ${computerScore}`;
// }

// playGame();