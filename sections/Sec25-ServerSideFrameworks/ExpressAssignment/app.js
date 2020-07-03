let express =	require("express");
let app = express();

// ************
// Routes
// ************

// Visiing */* should print *Hi there, welcome to my assignment!*
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

// One route */speak* that takes an animal and prints animal and it's sound for at least five animals
app.get("/speak/:animal", function(req, res){
	let animal = req.params.animal;
	let sound = "";
	
	if(animal === "pig"){
		sound = "Oink.";
	} else if(animal === "cow") {
		sound = "Moo.";
	} else if(animal === "dog") {
		sound = "WOOF!";
	} else if(animal === "cat") {
		sound = "MEOW!!!";
	} else if(animal === "horse") {
		sound = "Neigh.";
	} else {
		sound = "Huh?"
	}
	
	res.send("The " + animal + " says, \"" + sound + "\"");
});

// One route */repeat* that takes a word and a number and prints the word number times
app.get("/repeat/:str/:num", function(req, res){
	let str = req.params.str;
	let num = req.params.num;
	let response = "";
	
	for(i = 0; i < num; i++) {
		response += str + " ";
	}
	res.send(response);	
});

// All other routes should print *Sorry, page not found...What are you even doing?*
app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you even doing?");
})



// Listen for requests
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});