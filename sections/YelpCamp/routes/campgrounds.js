const express = require("express"),
	  router = express.Router(),
	  Campground = require("../models/campground");


// Campground Roues
// Campgrounds Listing (GET)
router.get("/", function (req, res) {
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err)
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});
});

// Create Campground (POST)
router.post("/", isLoggedIn, function(req,res){
	// get data from form and add to campgrounds
	const name 				= req.body.name, 
		  image				= req.body.image,
		  desc 				= req.body.description,
		  author 			= {
			  id: req.user._id, 
			  username: req.user.username
		  };
	let newCampground = {
		name: name, 
		image: image, 
		description: desc,
		author: author
	};
	
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
router.get("/new", isLoggedIn, function(req,res){
	res.render("campgrounds/new");
});

// Show campground detail (GET)
router.get("/:id", function(req, res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// console.log(foundCampground);
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
	
});

// check for user logged in
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
};

module.exports = router;