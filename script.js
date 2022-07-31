const options = ["rock", "paper", "scissors"]

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
        return "You lose " + computerSelection + " beats " + playerPic + ":c"
    }
    else if (result == "win"){
        return "You won! " + playerPic+ " beats " + computerSelection + "c:"
    }
    else {
        return "It's a tie!"
    }
}


function game(){
    for (let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock, paper or scissor?")
        const computerSelection = getComputerChoice() 
        console.log(playRound(playerSelection, computerSelection))
    }
}

console.log(game())