let age = prompt("Hom many years old are you?");

console.log(age);

if(age < 0){
	console.log("ERROR! That isn't a real age.");
}
else if(age == 21){
	console.log("You are " + age + " years old. Happy 21st birthday!");
}
else if(age % 2 === 1){
	console.log("You are " + age + " years old. Your age is odd!");
}
else if(Math.sqrt(age) % 1 === 0){
	console.log("You are " + age + " years old. That's a PERFECT SQUARE!")
}
else {
	console.log("You are " + age + " years old.");
}
