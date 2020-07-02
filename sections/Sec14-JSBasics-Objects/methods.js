let obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function(x,y) {
		return x + y;
	}
};

let sum = obj.add(12,134);

console.log(sum);


let comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];
comments.print = function(){
	this.data.forEach(function(el) {
		console.log(el);
	});
};

comments.print();