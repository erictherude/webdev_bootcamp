// ********************************
// SETUP
const express = require("express"),
	  app = express(),
	  bodyParser = require("body-parser"),
	  mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// Mongoose Schema
const campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

const Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 			name: "Rob Hill Campground",
// 			image: "https://www.parksconservancy.org/sites/default/files/styles/basic/public/programs/PRSF_130326_APAZ_179_2x1.JPG?itok=YguufFlB",
// 			description: "A campground in The Presidio of San Francisco."
// 	}, 
// 	function(err, campground){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log(campground);
// 		}
// 	}
// );

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// ********************************
// ROUTE

// Landing Page (GET)
app.get("/", function (req, res) {
	res.render("landing");
});

// Campgrounds Listing (GET)
app.get("/campgrounds", function (req, res) {
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err)
		} else {
			res.render("index", {campgrounds: allCampgrounds});
		}
	});
});

// Create Campground (POST)
app.post("/campgrounds", function(req,res){
	// get data from form and add to campgrounds
	let name = req.body.name;
	let image = req.body.image;
	let desc = req.body.description;
	let newCampground = {name: name, image: image, description: desc};
	
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		} else {
		// redirect back to campgrounds page
		res.redirect("/campgrounds");
		}
	});
});

// New Campgrounds Form (GET)
app.get("/campgrounds/new", function(req,res){
	res.render("new");
});

// Show campground detail (GET)
app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("show", {campground: foundCampground});
		}
	});
	
});

// ********************************
// LISTENER
app.listen(3000, function () {
	console.log("YelpCamp Server is running on Port 3000.");
});