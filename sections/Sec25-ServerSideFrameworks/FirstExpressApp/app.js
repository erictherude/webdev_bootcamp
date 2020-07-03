let express = require("express");
let app = express();

// "/" => "Hi there!"
app.get("/",function(req, res){
	res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye",function(req, res){
	res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
	console.log("Someone made a request");
	res.send("MEOW!!!");
});

// Using route parameters :variableName
app.get("/r/:subreddit", function(req, res){
	let sub = req.params.subreddit;
	res.send("WELCOME TO THE " + sub.toUpperCase() + " SUB!!!");
});

app.get("/r/:subreddit/comments/:id/:title", function(req, res){
	console.log(req.params);
	res.send("WELCOME TO THIS OTHER PAGE!!!");
});

// "*" => catch-all for all other paths
app.get("*", function(req, res){
	res.send("YOU ARE A STAR!!!");
});

// Tell Express to listen for requests
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});