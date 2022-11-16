const getComputerChoice = Math.floor(Math.random() * 3);
const getHumanChoice = prompt('Pick Rock, Paper, or Scissors')
const grammarGetHumanChoice = getHumanChoice.charAt(0).toUpperCase() + getHumanChoice.slice(1);

const computerPicker = (ranNum = getComputerChoice) => {
    let computerResult = " "
    if(ranNum  === 0){
        return computerResult = "Rock"
    } 
    else if(ranNum  === 1){
        return computerResult = "Paper"
    }
    else if(ranNum  === 2){
        return computerResult = "Scissors"
    }
}

console.log(computerPicker())
console.log(grammarGetHumanChoice)
