const express 		= require("express"),
	  router 		= express.Router({mergeParams: true}),
	  middleware	= require("../middleware"),
	  Campground 	= require("../models/campground"),
	  Comment 		= require("../models/comment");

// Comments Routes
// New Comment Form (GET)
router.get("/new", middleware.isLoggedIn, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err || !foundCampground){
			req.flash("error", "Campground not found.");
			res.redirect("back");
		} else {
			res.render("comments/new", {campground: foundCampground});
		}
	});	
});

// Create comment (POST)
router.post("/", middleware.isLoggedIn, function(req, res){
	// lookup campground by ID
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err || !foundCampground){
			req.flash("error", "Campground not found.");
			res.redirect("back");
		} else {
			// create new comments
			Comment.create(req.body.comment, function(err, createdComment){
				if(err || !createdComment){
					req.flash("error", "Comment could not be created.");
					res.redirect("back");
				} else {
					// add user to comment and save
					createdComment.author.id = req.user._id;
					createdComment.author.username = req.user.username;
					createdComment.save();
					// connect new comment to campground
					foundCampground.comments.push(createdComment);
					foundCampground.save();
					req.flash("success", "Comment added.");	
					res.redirect("/campgrounds/" + foundCampground._id);
				}
			});
		}
	});
});

// Edit comment (GET)
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
	Comment.findById(req.params.comment_id, function(err, foundComment){
		if(err || !foundComment){
			req.flash("error", "Comment not found.");
			res.redirect("back");
		} else {
			res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
		}
	});
});

// Update comment (PUT)
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
	Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
		if(err || !updatedComment){
			req.flash("error", "Comment could not be updated.");
			res.redirect("back");
		} else {
			req.flash("success", "Comment updated.")
			res.redirect("/campgrounds/" + req.params.id);
		}
	})
});

// Destroy Comment (DELETE)
router.delete("/:comment_id", middleware.checkCommentOwnership, function(req, res){
	Comment.findByIdAndRemove(req.params.comment_id, function(err){
		if(err){
			req.flash("error", "Comment could not be deleted.");
			res.redirect(back);
		} else {
			req.flash("success", "Comment deleted.");
			res.redirect("/campgrounds/" + req.params.id);
		}
	});
});

module.exports = router;