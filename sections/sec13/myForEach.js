let colors = ["red", "orange", "yellow"];

let friends = ["charlie", "dave", "maddy", "caitlin"]

// function myForEach(arr, func) {
// 	// loop through array
// 	for(let i = 0; i < arr.length; i++){
// 		// call func() for each item in array
// 		func(arr[i]);
// 	}
	
// }

// myForEach(colors,alert);

Array.prototype.myForEach = function(func) {
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}
}

colors.myForEach(function(color) {
    console.log(color);
});

friends.myForEach(function(name) {
	console.log("I love " + name);
});