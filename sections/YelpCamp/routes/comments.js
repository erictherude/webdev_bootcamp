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

// Edit comment (GET)
router.get("/:comment_id/edit", checkCommentOwnership, function(req, res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err){
			res.redirect("back");
		} else {
			res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
		}
	});
});

// Update comment (PUT)
router.put("/:comment_id", checkCommentOwnership, function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if(err){
			res.redirect("back");
		} else {
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
});

// Destroy Comment (DELETE)
router.delete("/:comment_id", checkCommentOwnership, function(req, res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if(err){
			res.redirect(back);
		} else {
			res.redirect("/campgrounds/" + req.params.id);
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

// check that user owns comment
function checkCommentOwnership(req, res, next){
	if(req.isAuthenticated()){
		// does user own comment?
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){
				res.redirect("back");
			}
			if(foundComment.author.id.equals(req.user._id)){
				next();				
			} else {
				res.redirect("back");
			}
	});
	} else {
		res.redirect("back");
	}
};

module.exports = router;