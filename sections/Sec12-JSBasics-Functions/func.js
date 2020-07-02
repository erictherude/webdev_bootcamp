// isEven() - takes a single numeric argument and returns true 
// for even numbers and false for others.

/*function isEven(num) {
	if(num % 2 === 0) {
		return true;
	} else {
		return false;
	}
}*/

// refactor from solution vid
function isEven(num) {
	return num % 2 === 0;
}

// isEven(4);		// true
// isEven(21);		// false
// isEven(68);		// true
// isEven(333);		// false

// factorial() - takes a single numeric argument and returns 
// it's factorial.

function factorial(num) {
	let numFac = 1;

	for(i = num; i > 1; i--) {
		numFac *= i;
	}

	return numFac;
}

// factorial(5);	// 120
// factorial(2);	// 2
// factorial(10);	// 3628800
// factorial(0);	// 1

// kebabToSnake() - takes a single kebab-cased string argument
// and returns the snake_cased version.

function kebabToSnake(str) {
	return str.replace(/-/g,"_");
}

// kebabToSnake("hello-world");
// kebabToSnake("dogs-are-awesome");
// kebabToSnake("blah");