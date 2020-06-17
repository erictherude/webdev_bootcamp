let p1Button = document.querySelector("#p1");
let p1Display = document.querySelector("#p1Display");

let p2Button = document.querySelector("#p2");
let p2Display = document.querySelector("#p2Display");

let resetButton = document.querySelector("#reset");

let p1Score = 0;
let p2Score = 0;

let gameOver = false;
let winnigScore = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		p1Display.textContent = p1Score;

		if (p1Score === winnigScore) {
			gameOver = true;
		}
	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		p2Display.textContent = p2Score;

		if (p2Score === winnigScore) {
			gameOver = true;
		}
	}
});


resetButton.addEventListener("click", function() {
	p1Score = 0;
	p1Display.textContent = p1Score;
	p2Score = 0;
	p2Display.textContent = p2Score;

	gameOver = false;
});