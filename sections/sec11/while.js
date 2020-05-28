// Print all numbers between -10 and 19.
console.log("Print all numbers between -10 and 19.");

let n1 = -10;

while(n1 < 20){
	console.log(n1);
	n1++;
}

// Print all even number between 10 and 40.
console.log("Print all even number between 10 and 40.");

let n2 = 10;

while(n2 < 41){
	if(n2 % 2 === 0){
		console.log(n2);
	}
	n2++;
}

// Print all odd numbers between 300 and 333.
console.log("Print all odd numbers between 300 and 333.");

let n3 = 300;

while(n3 <= 333){
	if(n3 % 2 === 1){
		console.log(n3);
	}
	n3++;
}

// Print all numbers divisible by 3 and 5 between 5 and 50.
console.log("Print all numbers divisible by 3 and 5 between 5 and 50.");

let n4 = 5;

while(n4 <= 50){
	if(n4 % 3 === 0 || n4 % 5 === 0){
		console.log(n4);
	}
	n4++;
}