//VARIABLES

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

function playRound()
{
    //This if will stop the game if 5 rounds are played
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
        return;
    }
    //Here is the logic of the game
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

    //This part will print the result of every round
    roundResult.innerText = ('The machine chose ' + computerSelection + '\nthe result is: ' + result)

    if (result == "lose"){
        lose++
    }
    else if (result == "win"){
        win++
    }
    else {
        tie++
    }

    //This part will change the counters for win, tie, and loses in the game every round
    userScore.innerText = win
    tieScore.innerText = tie
    machineScore.innerText = lose

    //Add 1 to rounds played
    played++
}


//A function that get numebers from 0 to 2, the result is the index that will be used for the game
function getComputerChoice(){
    return options[Math.floor(Math.random()*options.length)]
}

