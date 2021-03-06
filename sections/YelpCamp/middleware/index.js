const Campground = require("../models/campground"),
	  Comment = require("../models/comment");

let middlewareObj = {};

// check for user logged in
middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "You need to be logged in to do that.");
	res.redirect("/login");
};

// check that user owns campground
middlewareObj.checkCampgroundOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		// does user own campground?
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err || !foundCampground){
				req.flash("error", "Campground not found.");
				res.redirect("back");
			}
			if(foundCampground.author.id.equals(req.user._id)){
				next();				
			} else {
				req.flash("error", "You don't have permission to do that.");
				res.redirect("back");
			}
	});
	} else {
		req.flash("error", "You need to be logged in to do that.");
		res.redirect("back");
	}
};

// check that user owns comment
middlewareObj.checkCommentOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		// does user own comment?
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err || !foundComment){
				req.flash("error", "Comment not found.");
				res.redirect("back");
			}
			if(foundComment.author.id.equals(req.user._id)){
				next();				
			} else {
				req.flash("error", "You don't have permission to do that.");
				res.redirect("back");
			}
	});
	} else {
		req.flash("error", "You need to be logged in to do that.");
		res.redirect("back");
	}
};

module.exports = middlewareObj;