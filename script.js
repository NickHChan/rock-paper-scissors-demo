const getComputerChoice = Math.floor(Math.random() * 3);
const getHumanChoice = prompt('Pick Rock, Paper, or Scissors')
const grammarGetHumanChoice = getHumanChoice.charAt(0).toUpperCase() + getHumanChoice.slice(1).toLowerCase();


const computerPicker = (ranNum = getComputerChoice) => {
    let computerResult = " "
    if(ranNum  === 0){
        return computerResult = "Rock"
    } 
    else if(ranNum  === 1){
        return computerResult = "Paper"
    }
    else if(ranNum  === 2){
        return "Scissors"
    }
}


const humanChoiceChecker = (manCheck = grammarGetHumanChoice) => {
    if(manCheck === "Rock" || manCheck === "Paper" || manCheck === "Scissors") {
        return manCheck
    } else {
        return alert("Please select a valid choice, refresh page and try again.")
    }
}
const humanChoice = humanChoiceChecker(grammarGetHumanChoice)
const computerChoice = computerPicker(getComputerChoice) 

const playGame = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) {
        return `Tie Game, Player picked ${humanChoice}, and Computer picked ${computerChoice}`
    } 
    else if ( computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice=== "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        return `Computer WINS, ${computerChoice} beats ${humanChoice}`
    }
    else if (computerChoice === "Rock" && humanChoice=== "Paper" || computerChoice === "Paper" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock") {
        return `Human WINS, ${humanChoice} beats ${computerChoice}`
    }
}

console.log(playGame(computerChoice, humanChoice))
