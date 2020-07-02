// Print all numbers between -10 and 19.
console.log("Print all numbers between -10 and 19");

for(let n = -10; n <= 19; n++){
	console.log(n);
}

// Print all even numbers between 10 and 40.
console.log("Print all even numbers between 10 and 40");

for(let n = 10; n <= 40; n++){
	if(n % 2 === 0){
		console.log(n);
	}
}

// Print all odd numbers between 300 and 333.
console.log("Print all odd numbers between 300 and 333");

for(let n = 300; n <= 333; n++){
	if(n % 2 === 1){
		console.log(n);
	}
}

// Print all numbers divisible by both 3 and 5 between 5 and 50.
console.log("Print all numbers divisible by both 3 and 5 between 5 and 50");

for(let n = 5; n <= 50; n++){
	if(n % 3 === 0 && n % 5 === 0){
		console.log(n);
	}
}