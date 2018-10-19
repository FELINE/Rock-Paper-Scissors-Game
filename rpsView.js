//buttons
var rockButton = document.getElementById("rock-button");

var paperButton = document.getElementById("paper-button");

var scissorsButton = document.getElementById("scissors-button");

var userThrow = document.getElementById("human-throw");
//this is the image element that will represent the throw selected by the user

var computerThrow = document.getElementById("computer-throw"); //this is the image element that will represent the throw selected by the computer

var giveMessage = document.getElementById("message");

/*
var messageWin = document.getElementsByName("human-wins");//this is the element that will report the results for the round
var messageLoss = document.getElementsByName("computer-wins");//this is the element that will report the results for the round
var messageTie = document.getElementsByName("tie-games");//this is the element that will report the results for the round */

var scoreboard = document.getElementById("scoreboard");//user's score, computer's score, number of ties - the 3 elements of the scoreboard.

//images
rockImage = document.getElementById('rock-image').src;

paperImage = document.getElementById('paper-image').src;

scissorsImage = document.getElementById('scissors-image').src;




function showUserThrow( symbol ) {
    if (symbol === "rock") {
        userThrow.src = rockImage;
    }
    else if (symbol === "scissors") {
        userThrow.src = scissorsImage;
    }
    else {
        userThrow.src = paperImage;}
}  

function showCompThrow( symbol ) {
    if (symbol === "rock") {
        computerThrow.src = rockImage;
    }
    else if (symbol === "scissors") {
        computerThrow.src = scissorsImage;
    }
    else {
        computerThrow.src = paperImage;}
    }

function sendMessage(newMessage) {
    giveMessage.innerHTML = symbol;
}

function sendMessage( theMessage ) {
    scoreboard.innerHTML = theMessage;
    }

function updateScoreboard( win, lose, tie ) {
    userScore.innerHTML = win;
    computerScore.innerHTml = lose;
    ties.innerHTML = tie;
}

// Tom 100266942