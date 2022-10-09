/*const options = ["rock", "paper", "scissors"]
let win = 0
let lose = 0
let tie = 0

function getComputerChoice(){
    return options[Math.floor(Math.random()*options.length)]
}




function playRound(playerSelection, computerSelection){
    let playerPic = playerSelection.toLowerCase()
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
    console.log("Your choice is: " + playerPic)
    console.log("The computer choice is: " + computerSelection)
    console.log("The result is: ")
    if (result == "lose"){
        lose++
        return "You lose " + computerSelection + " beats " + playerPic + ":c"
    }
    else if (result == "win"){
        win++
        return "You won! " + playerPic+ " beats " + computerSelection + "c:"
    }
    else {
        tie++
        return "It's a tie!"
    }
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