let p1Button = document.querySelector("#p1");
let p1Display = document.querySelector("#p1Display");

let p2Button = document.querySelector("#p2");
let p2Display = document.querySelector("#p2Display");

let resetButton = document.querySelector("#reset");

let numInput = document.querySelector("#goal");
let winningScoreDisplay = document.querySelector("#winningScore") 

let p1Score = 0;
let p2Score = 0;

let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;

		if (p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;

		if (p2Score === winningScore) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
	}
});

function resetGame() {
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove("winner");

	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.classList.remove("winner");

	gameOver = false;
};

resetButton.addEventListener("click", function() {
	resetGame();
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	console.log(Number(this.value));
	resetGame();
});