/**********************************************************
 * RPS App : app / model
 *    Implements the modle and the main app (controller) for the game of RPS
 **********************************************************/

//#### M O D E L #########
/*
 * The "Model" is the state data and "business logic" for the application.
 * For RPS, the "state data" is just the scoreboard, 
 *  and the "business logic" is the rules of the game.
 */

// Score Data - stores and manages the 3 score data items.
Score = {  // This is an OBJECT!!  It defines 3 varialbes:  Score.wins, Score.ties, Score.loses
	wins: 0,
	ties: 0,
	loses: 0,
}	
// If you prefer, you may convert the above into 3 separate global varialbes using var statements.


// Here are some of the MODEL algorithms from Lab 10 to get us started.
function getComputerThrow() {
	var randThrow = Math.floor(Math.random() * 3);
	if (randThrow === 0) {
		return "rock";
	}
	else if (randThrow === 1) {
		return "paper";
	}
	else {
		return "scissors";
	}
}

function rpsCompare(userThrow, computerThrow) {
	if (userThrow === computerThrow) {
		return "tie";
	}
	else if (userThrow === "rock"     && computerThrow === "scissors" ||
					 userThrow === "paper"    && computerThrow === "rock"     ||	
					 userThrow === "scissors" && computerThrow === "paper" ) {
		return "win";
	}
	else {
		return "lose";
	}
}

function scoreMatch( userThrow, computerThrow ) {
	var outcome = rpsCompare( userThrow, computerThrow );

	if (outcome === "win") {
	  Score.wins++;
		return  "Winner! " + userThrow + " beats " + computerThrow;
	}
	else if (outcome === "lose") {
	  Score.loses++;
		return   "Loser! " + computerThrow + " beats " + userThrow;
	}
	else {
	  Score.ties++;
		return  "Tie! Both threw " + userThrow;
	}
}


//#### C O N T R O L E R #########
/*
 * The "Controller" coordinates the View and the Model to work together.
 * All "event handlers" are part of the controller, but they should just call on the 
 * Model to perform any computations and/or retreive any data, then call on the View to
 * update the visual display.
 * For RPS, your controller will just have a single event handler that responds to 
 *   all the button presses.  Hint:  use event.target.value to determine which button was pressed!
 */
// For example, here is a controller for the main game algorithm -- see how it coordinates the model and view compontents, but doesn't do much workd itself!
function playOneRound( userThrow ) {
  var computerThrow = getComputerThrow();
	var message = scoreMatch( userThrow, computerThrow );
	sendMessage( message );
	
	// Probaby need to update the scoreboard and perhaps the game history here
	// ...
}

/*  TRY IT:
 *   -- load the page and in the console, type:  playOneRound('rock');
 *   -- after doing this a few times, type Score to see the current state of the scoreboard.
 */


// Code your event handler(s) here -- respond to button clicks by calling playOneRound()



// Finally, configure the RPS "controls" to call your event handler...
startRPS = function() {
	console.log("RPS App started...");
	// here you will simply assign an 'event handler' function to each of your controls.
};

// Here's where it all begins - when the window's load event fires, it will call the startApp function declared above...
window.onload = startRPS;
