const express = require("express");
const app = express();
const request = require("request");

app.set("view engine", "ejs");

// ****************
// ROUTES
// Search URL: http://www.omdbapi.com/?apikey=thewdb&

app.get("/", function(req,res){
	res.render("search");
});

app.get("/results", function(req,res){
	const query = req.query.search;
	const url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
	request(url, function(error, response, body){
		if(!error && response.statusCode ===200){
			const data = JSON.parse(body);
			// res.send(data.Search[0].Title);
			res.render("results", {data: data});
		};
	});
});


// ****************
// LISTENER

app.listen(3000, function(){
	console.log("MovieApp listening on Port 3000.");
});