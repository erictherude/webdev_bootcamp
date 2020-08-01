const express 		= require("express"),
	  router 		= express.Router({mergeParams: true}),
	  Campground 	= require("../models/campground"),
	  Comment 		= require("../models/comment");

// Comments Routes
// New Comment Form (GET)
router.get("/new", isLoggedIn, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: foundCampground});
		}
	});	
});

// Create comment (POST)
router.post("/", isLoggedIn, function(req, res){
	// lookup campground by ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// create new comments
			Comment.create(req.body.comment, function(err, createdComment){
				if(err){
					console.log(err);
				} else {
					// add user to comment and save
					createdComment.author.id = req.user._id;
					createdComment.author.username = req.user.username;
					createdComment.save();
					// connect new comment to campground
					foundCampground.comments.push(createdComment);
					foundCampground.save();
					res.redirect("/campgrounds/" + foundCampground._id);
				}
			});
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