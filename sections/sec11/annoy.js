// let answer = prompt("Are we there yet?");

// while(answer !== "yes" && answer !== "yeah"){
// 	let answer = prompt("Are we there yet?");
// }

// alert("Yay! We made it!");



// v2.0

let answer = prompt("Are we there yet?");

while(answer.indexOf("yes") === -1){
	let answer = prompt("Are we there yet?"); 
}

alert("Yay! We made it!");