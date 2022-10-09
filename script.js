/*







function playRound(playerSelection, computerSelection){
    let playerPic = playerSelection.toLowerCase()
    
}


function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper or scissor?")
        const computerSelection = getComputerChoice() 
        console.log(playRound(playerSelection, computerSelection))
        //console.log("Number of wins: " + win)
        //console.log("Numer of loses: " + lose)
    }
    console.log("The final results are: ")
    console.log(win + " Wins")
    console.log(lose + " Loses")
    console.log(tie + " Ties")
    if(win>lose){
        console.log("You won!")
    }
    else if (lose>win){
        console.log("You lose :c")
    }
    else{
        console.log("It's a tie")
    }
}

console.log(game())*/

let win = 0
let lose = 0
let tie = 0
let played = 0
const options = ["rock", "paper", "scissors"]



//SELECTORS


const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const userScore = document.querySelector('#user-score')
const tieScore = document.querySelector('#tie')
const machineScore = document.querySelector('#machine-score')
const roundResult = document.querySelector('.round-result')


//EVENT LISTENERS

rock.addEventListener('click', playRound)
paper.addEventListener('click', playRound)
scissors.addEventListener('click', playRound)






//FUNCTIONS

function playGame(){
    if (played == 5)
    {
        if(win>lose){
            roundResult.innerText = ("You won!")
        }
        else if (lose>win){
            roundResult.innerText = ("You lost")
        }
        else{
            roundResult.innerText = ("It's a tie")
        }
    }
}

function playRound()
{
    if (played == 5)
    {
        if(win>lose){
            roundResult.innerText = ("You won!")
        }
        else if (lose>win){
            roundResult.innerText = ("You lost")
        }
        else{
            roundResult.innerText = ("It's a tie")
        }
        return 0;
    }
    const playerPic = this.classList[1]
    let computerSelection = getComputerChoice()
    let result = ""
    if (playerPic == "rock"){
        switch(computerSelection){
            case "rock":
                result = "tie"
                break
            case "paper":
                result = "lose"
                break
            case "scissors":
                result = "win"
                break
        }
    }
    else if (playerPic == "paper"){
        switch(computerSelection){
            case "rock":
                result = "win"  
                break
            case "paper":
                result = "tie"
                break
            case "scissors":
                result = "lose"
                break
        }
    }
    else if (playerPic == "scissors"){
        switch(computerSelection){
            case "rock":
                result = "lose"
                break
            case "paper":
                result = "win"
                break
            case "scissors":
                result = "tie"
                break
            
        }
    }
    roundResult.innerText = ('The machine chose ' + computerSelection + '\nthe result is: ' + result)
    

    if (result == "lose"){
        lose++
        //return "You lose " + computerSelection + " beats " + playerPic + ":c"
    }
    else if (result == "win"){
        win++
        //return "You won! " + playerPic+ " beats " + computerSelection + "c:"
    }
    else {
        tie++
        //return "It's a tie!"
    }
    userScore.innerText = win
    tieScore.innerText = tie
    machineScore.innerText = lose
    played++
}



function getComputerChoice(){
    return options[Math.floor(Math.random()*options.length)]
}

