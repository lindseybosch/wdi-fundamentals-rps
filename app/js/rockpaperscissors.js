////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = move || getInput();
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = move || randomPlay();
    return move;
}

// getWinner();
// getWinner("rock", "scissors");


function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    // computerMove = getComputerMove();
    // playerMove = getPlayerMove();

    if (computerMove === playerMove) {
        winner = "tie";
    } else if ((computerMove === "rock" && playerMove === "scissors") || (computerMove === "scissors" && playerMove === "paper") || (computerMove === "paper" && playerMove === "rock")) {
        winner = "computer";
    } else {
        winner = "player";
    }
    return winner;
}

function playGame() {
    var winner;
    var playerMove;
    var computerMove;

    playerMove = getPlayerMove(); // scissors
    computerMove = getComputerMove(); // rock

    winner = getWinner(playerMove, computerMove); // "computer"
    console.log("You chose " + playerMove + ", and your opponent chose " + computerMove + ".");
    console.log(winner + " wins!");

    return winner; // "computer"
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0; // count how many times the player has won
    var computerWins = 0;


    while(playerWins < 5 && computerWins < 5) {
        var winner = playGame();
        if (winner === 'player'){
            playerWins += 1;
        }
        else if (winner === 'computer'){
            computerWins += 1;
        }
        console.log("The score is " + playerWins + " to " + computerWins);
    }
    return [playerWins, computerWins];
}
playToFive();
