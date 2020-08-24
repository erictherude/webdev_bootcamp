const express 		= require("express"),
	  router 		= express.Router(),
	  middleware	= require("../middleware"),
	  Campground 	= require("../models/campground"),
	  Comment 		= require("../models/comment");



// ********************************
// ROUTES

// Campgrounds Listing (GET)
router.get("/", function (req, res) {
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			req.flash("error", err.message);
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
		}
	});
});

// Create Campground (POST)
router.post("/", middleware.isLoggedIn, function(req,res){
	// get data from form and add to campgrounds
	let newCampground =  req.body.campground;	
	newCampground.author = {
			  id: req.user._id, 
			  username: req.user.username
		  };
	
	Campground.create(newCampground, function(err, newlyCreated){
		if(err || !newlyCreated){
			req.flash("error", "There was a problem creating your campground.");
			res.redirect("back");
		} else {
		// redirect back to campgrounds page
		res.redirect("/campgrounds");
		}
	});
});

// New Campgrounds Form (GET)
router.get("/new", middleware.isLoggedIn, function(req,res){
	res.render("campgrounds/new");
});

// Show campground detail (GET)
router.get("/:id", function(req, res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err || !foundCampground){
			req.flash("error", "Campground not found.");
			res.redirect("back");
		} else {
			// console.log(foundCampground);
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
	
});

// Edit Campground Form (GET)
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err || !foundCampground){
			req.flash("error", "Campground not found.");
			res.redirect("back");
		} else {
			res.render("campgrounds/edit", {campground: foundCampground});
		}
	});
});

// Update Campground (PUT)
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
	// find and update campgrounds
	Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
		if(err || !updatedCampground){
			req.flash("error", "Campground not found.");
			res.redirect("back");
		} else {
			// redirect to show page
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
});

// Destroy Campground (DELETE)
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
	Campground.findByIdAndDelete(req.params.id, function(err, campgroundRemoved){
		if(err || !campgroundRemoved){
			req.flash("error", "Campground not found.");
			res.redirect("back");
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
// EXPORT

module.exports = router;