let express = require("express");
let app = express();

// SETUP
app.use(express.static("public"));
app.set("view engine", "ejs");

// ROUTES
app.get("/", function(req, res){
	res.render("home");
});


app.get("/fallinlovewith/:thing", function(req, res){
	var thing = req.params.thing;
	res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Susy"},
		{title: "My adorable pet Bunny", author: "Charlie"},
		{title: "Can you believe this pomsky?", author: "Colt"}
	];
	
	res.render("posts", {posts: posts});
});


// LISTENER
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});