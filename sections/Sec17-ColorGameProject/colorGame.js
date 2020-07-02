
let numSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");

let h1 = document.querySelector("h1");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");

let resetButton = document.getElementById("reset");
let modeBtns = document.querySelectorAll(".mode");

init();

function init() {
	// mode button event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons() {
	for(let i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function() {
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			reset();
		});
	}
}

function setupSquares() {
	for(let i = 0; i < squares.length; i++) {
	// add eventListeners
	squares[i].addEventListener("click", function() {
		// grab color of clicked square
		let clickedColor = this.style.backgroundColor;
		// compare color to goal
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again.";
		};
	});
}
}

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change color display
	colorDisplay.textContent = pickedColor;
	// change colors of square
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = 'block';
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}

	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColors (color) {
	// loop through all squares
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	};
}

function pickColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	// make an array
	let arr = [];
	// add num randm color to array
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//  return array
	return arr;
}

function randomColor() {
	// pick a red from 0-255
	let r = randomColorNum();
	// pick a green from 0-255
	let g = randomColorNum();
	// pick a blue from 0-255
	let b = randomColorNum();

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function randomColorNum() {
	return Math.floor(Math.random() * 256);
}