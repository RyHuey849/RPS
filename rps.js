
let playerScore = 0;
let computerScore = 0;

function computerPlay ()
{
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0)
    {
        return "rock";
    }
    else if(choice === 1)
    {
        return "paper";
    }
    else if(choice === 2)
    {
        return "scissors";
    }
}

function displayScores()
{
    console.log(`Your score: ${playerScore}  Computer score: ${computerScore}`);
}


function playRound(playerSelection, computerSelection)
{
    if(playerSelection === computerSelection)
    {
        return `Tie! ${playerSelection} is not very effective agains ${computerSelection}... `
    }
    else if(playerSelection === "rock" && computerSelection === "paper")
    {
        computerScore ++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore ++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        computerScore ++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        playerScore ++;
        return `You Win!${playerSelection} beats ${computerSelection}`
    }
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        playerScore ++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    
}

function winner(){
    if(playerScore === computerScore)
    {
        console.log("Tie!")
    }
    else if(playerScore < computerScore)
    {
        console.log("You Lose!")
    }
    else if(playerScore > computerScore)
    {
        console.log("You Win!")
    }
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
}

function game()
{
    for (let i = 0; i < 5; i ++)
    {
        console.log(`Round ${i + 1}`)
        let playerSelect = window.prompt("Choose rock, paper, or scissors.");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelect, computerSelection));
        displayScores();
    }
    winner();
    resetGame();
}