Score = { // This is an OBJECT!!  It defines 3 varialbes:  Score.wins, Score.ties, Score.loses
    wins: 0,
    ties: 0,
    loses: 0,
}

function getComputerThrow() {
    var randThrow = Math.floor(Math.random() * 3);
    if (randThrow === 0) {
        return "rock";
    } else if (randThrow === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function rpsCompare(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return "tie";
    } else if (userThrow === "rock" && computerThrow === "scissors" ||
        userThrow === "paper" && computerThrow === "rock" ||
        userThrow === "scissors" && computerThrow === "paper") {
        return "win";
    } else {
        return "lose";
    }
}

function scoreMatch(userThrow, computerThrow) {
    var outcome = rpsCompare(userThrow, computerThrow);

    if (outcome === "win") {
        Score.wins++;
        return "Winner! " + userThrow + " beats " + computerThrow;
    } else if (outcome === "lose") {
        Score.loses++;
        return "Loser! " + computerThrow + " beats " + userThrow;
    } else {
        Score.ties++;
        return "Tie! Both threw " + userThrow;
    }
}


function playOneRound(event) {
    console.log(event.target);
    var userThrow = event.target.id;
    var computerThrow = getComputerThrow();
    var message = scoreMatch(userThrow, computerThrow);
    sendMessage(message);
    showCompThrow(computerThrow);
	showUserThrow(userThrow);
	console.log(">_< !!!");
}

rockButton.onclick = playOneRound;
paperButton.onclick = playOneRound;
scissorsButton.onclick = playOneRound;
