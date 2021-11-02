
let playerScore = 0;
let computerScore = 0;
let scores = document.querySelector("#score");


//listeners for selections
function rockListen(event)
{
    playRound("rock", computerPlay());
}
function paperListen(event)
{
    playRound("paper", computerPlay());
}
function scissorsListen(event)
{
    playRound("scissors", computerPlay());
}

//adding listeners to selecetions
const rock = document.querySelector("#rock");
rock.addEventListener('click', rockListen);


const paper = document.querySelector("#paper");
paper.addEventListener('click', paperListen);

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', scissorsListen);


//functions
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
    scores.innerHTML = `Your score: ${playerScore}  Computer score: ${computerScore}`;
}


function playRound(playerSelection, computerSelection)
{
    let results = document.querySelector("#results"); //find results div
    if(playerSelection === computerSelection)
    {
        const content = document.createElement("p");
        content.textContent = `Tie! ${playerSelection} is not very effective agains ${computerSelection}... `
        results.appendChild(content);
    }
    else if(playerSelection === "rock" && computerSelection === "paper")
    {
        computerScore ++;
        const content = document.createElement("p");
        content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        results.appendChild(content);
        displayScores();
        winner();
    }
    else if(playerSelection === "scissors" && computerSelection === "rock")
    {
        computerScore ++;
        const content = document.createElement("p");
        content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        results.appendChild(content);
        displayScores();
        winner();
    }
    else if(playerSelection === "paper" && computerSelection === "scissors")
    {
        computerScore ++;
        const content = document.createElement("p");
        content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
        results.appendChild(content);
        displayScores();
        winner();
    }
    else if(playerSelection === "rock" && computerSelection === "scissors")
    {
        playerScore ++;
        const content = document.createElement("p");
        content.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        results.appendChild(content);
        displayScores();
        winner();
    }
    else if(playerSelection === "paper" && computerSelection === "rock")
    {
        playerScore ++;
        const content = document.createElement("p");
        content.textContent = `You Win!${playerSelection} beats ${computerSelection}`
        results.appendChild(content);
        displayScores();
        winner();
    }
    else if(playerSelection === "scissors" && computerSelection === "paper")
    {
        playerScore ++;
        const content = document.createElement("p");
        content.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
        results.appendChild(content);
        displayScores();
        winner();
    }
    
}

function winner(){
    const end = document.querySelector("#winlose");
    if(computerScore === 5)
    {
        const lose = document.createElement("h2");
        lose.textContent = "YOU LOSE";
        end.appendChild(lose);
        rock.removeEventListener("click", rockListen);
        paper.removeEventListener("click", paperListen);
        scissors.removeEventListener("click", scissorsListen);
    }
    else if(playerScore === 5)
    {
        const win = document.createElement("h2");
        win.textContent = "YOU WIN";
        end.appendChild(win);
        rock.removeEventListener("click", rockListen);
        paper.removeEventListener("click", paperListen);
        scissors.removeEventListener("click", scissorsListen);
    }
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    rock.addEventListener('click', rockListen);
    paper.addEventListener('click', paperListen);
    scissors.addEventListener('click', scissorsListen);
}

function game()
{
    //console.log(`Round ${i + 1}`)
    winner();
    resetGame();
}