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

// Tell Express to listen for requests
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});