// printReverse
let myArray = ["first", "second", "third", 4, false, "last"];

function printReverse(array) {
	let count = array.length - 1

	for(let i = count; i >= 0; i--) {
		console.log(array[i]);
	}

	// from solution:
	// for(let i = array.length - 1; i >= 0; i--) {
	// 	console.log(array[i]);
	// }
}


console.log("********************************");
console.log("printReverse");
printReverse(myArray);

// isUniform()

let array1 = [1,1,1,1,1,1,1,1];
let array2 = [1,1,1,11,1,1,1,1];
let array3 = [1,1,1,1,1,1,1,1];
let array4 = [1,1,1,1,1,"1",1,1];
let array5 = [1,1,1,1,1,1,1,1];

function isUniform(array) {
	let val = array[0];
	let state = true;

	array.forEach(function(elem) {
		if(elem !== val) {
			state = false;
		} 
	})
	console.log(state);
}

	// from solution
	// function isUniform(arr) {
	// 	let first = arr[0];
	// 	FOR(var i = 1; i < arr.length; i++) {
	// 		if(arr[i] != first) {
	// 			return false;
	// 		}
	// 	}
	// 	return true;
	// }


console.log("********************************");
console.log("isUniform");
isUniform(array1);
isUniform(array2);
isUniform(array3);
isUniform(array4);
isUniform(array5);

// sumArray()

let nArray1 = [1,2,3,4,5,6,7,8,9,10];
let nArray2 = [1,2,3,4,5,6,7,8,9,10,11];
let nArray3 = [1,2,3,4,5,6,7,8,9,10,11,12];

function sumArray(array) {
	let sum = 0;

	array.forEach(function(n) {
		sum = sum + n; // sum += n;
	})
	console.log(sum);
}

console.log("********************************");
console.log("sumArray");
sumArray(nArray1);
sumArray(nArray2);
sumArray(nArray3);

// max()
let list1 = [1,2,3,4,5,6,7,8,9,10];
let list2 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,-1];
let list3 = [1324,6356345673,1231,74747,4];

function max(array) {
	let high = array[0];

	for(let i = 0; i < array.length; i++) {
		let num = array[i];
		if(num > high) {
			high = num;
		}
	}
	console.log(high);
}

console.log("********************************");
console.log("max");
max(list1);
max(list2);
max(list3);