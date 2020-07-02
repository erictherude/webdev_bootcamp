// MY SOULTION
function average(arr){
	let count = arr.length;
	let sum = 0;
	
	for(let i = 0; i < count; i++){
		sum += arr[i];
	}
	
	return Math.round(sum / count);
}

// OFFICIAL SOLUTION
// function average(scores){
// 	// add all scores together
// 	var total = 0;
// 	scores.forEach(function(score){
// 		total += score;
// 	});
	
// 	//divide total by number of scores
// 	var avg = total/scores.length;
	
// 	// round average
// 	return Math.round(avg);
// }

let scores1 = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores1)); // should return 94

let scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); // should return 68