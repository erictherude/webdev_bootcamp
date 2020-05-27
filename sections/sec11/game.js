// create secretNumber
let secretNumber = 4;

// ask user to guess secretNumber
let guess = prompt("Guess a number.");
let nGuess = Number(guess);

// check user's guess
if(nGuess === secretNumber){
	alert("You got it right!");
}
else if (nGuess > secretNumber) {
	alert("Too high! Guess again.");
}
else {
	alert("Too low! Guess again.");
}