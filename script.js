const computerPicker = () => {
    const getComputerChoice = Math.floor(Math.random() * 3);
    if(getComputerChoice  === 0){
        return "Rock"
    } 
    else if(getComputerChoice  === 1){
        return "Paper"
    }
    else if(getComputerChoice  === 2){
        return "Scissors"
    }
}

const playGame = (computerChoice, humanChoice) => {
   
    if (computerChoice === humanChoice) {
        return `Tie Game, Player picked ${humanChoice}, and Computer picked ${computerChoice}`
    } 
    else if ( computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice=== "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        compScore += 1;
        return `Computer WINS, ${computerChoice} beats ${humanChoice}`
    }
    else if (computerChoice === "Rock" && humanChoice=== "Paper" || computerChoice === "Paper" && humanChoice === "Scissors" || computerChoice === "Scissors" && humanChoice === "Rock") {
        humanScore += 1;
        return `Human WINS, ${humanChoice} beats ${computerChoice}`
    }
}
let humanScore = 0
let compScore = 0

const play = () => {
    let playerSelection = prompt(`Pick Rock, Paper, or Scissors`);
    let playerSelectionGrammar = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let compSelection = computerPicker();
    console.log(playGame(compSelection, playerSelectionGrammar))
    console.log(`Your score is ${humanScore} and the computer's score is ${compScore}`)
    if(humanScore === 5) {
        alert(`Game Over`)
    } else if(compScore === 5) {
        alert(`Game Over`)
    } else {
        play();
    }
}
play();