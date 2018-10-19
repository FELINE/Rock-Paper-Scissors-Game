/**********************************************************
 * RPS GUI : view / controls
 *    Abstracts the Graphical User Interface for the game of RPS
 *    The goal is to hide the details of how the GUI is defined from the rest of the system.
 **********************************************************/

//#### C O N T R O L S #########
// Define a 'Global Variable' for each "control" on the user interface

// For example, here is a variable to store a reference to the "rock" button.
// Now when the program wants to reference this GUI control, it can use the variable rockButton
var rockButton = document.getElementById('rock-button');



//#### V I E W #########
// Define a 'Global Variable' for each "visual element" on the user interface
// And define a function that will update the visual display of that element.

// For example, here is a variable to store a reference to the "message" area.
var messageElement = document.getElementById('message');
	
// and here is a function to post a new message on the UI:
function sendMessage(newMessage) {
	messageElement.innerHTML = newMessage;
}



/* TRY IT:  
 *   -  Load the page and in the console, type:  sendMessage('hello');
 *   -  assign a function value to the rockButton's onclick handler like this:
 *           rockButton.onclick = function(event) { alert("You picked " + event.target.value); };
 */

