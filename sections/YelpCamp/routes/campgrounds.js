const express 		= require("express"),
	  router 		= express.Router(),
	  Campground 	= require("../models/campground"),
	  Comment 		= require("../models/comment");



// ********************************
// ROUTES

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

// Edit Campground Form (GET)
router.get("/:id/edit", checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			res.redirect("/campgrounds");
		} else {
			res.render("campgrounds/edit", {campground: foundCampground});
		}
	});
});

// Update Campground (PUT)
router.put("/:id", checkCampgroundOwnership, function(req, res){
	// find and update campgrounds
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err){
			res.redirect("/campgrounds");
		} else {
			// redirect to show page
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
});

// Destroy Campground (DELETE)
router.delete("/:id", checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndDelete(req.params.id, function(err, campgroundRemoved){
		if(err){
			res.redirect("/campgrounds");
		} else {
			Comment.deleteMany( {_id: { $in: campgroundRemoved.comments } }, (err) => {
            if (err) {
                console.log(err);
            }
			res.redirect("/campgrounds");
		});
	}});
});



// ********************************
// MIDDLEWARE

// check that user is logged in
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
};

// check that user owns campground
function checkCampgroundOwnership(req, res, next){
	if(req.isAuthenticated()){
		// does user own campground?
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
				res.redirect("back");
			}
			if(foundCampground.author.id.equals(req.user._id)){
				next();				
			} else {
				res.redirect("back");
			}
	});
	} else {
		res.redirect("back");
	}
};



// ********************************
// EXPORT

module.exports = router;