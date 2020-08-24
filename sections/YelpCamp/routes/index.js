const express 		= require("express"),
	  router 		= express.Router(),
	  passport 		= require("passport"),
	  User 			= require("../models/user");

// Landing Page (GET)
router.get("/", function (req, res) {
	res.render("landing");
});

// Registration Routes
// Show registration form
router.get("/register", function(req, res){
	res.render("register");
});

// Create new user
router.post("/register", function(req, res){
	const newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, createdUser){
		if(err){
			console.log(err);
			req.flash("error", err.message + ".");
			res.redirect("/register");
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to YelpCamp " + newUser.username + ".");
			res.redirect("/campgrounds");
		});
	});
});

// Login Routes
// Show login form
router.get("/login", function(req, res){
	res.render("login");
});

// Log user in
router.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
}), function(req,res){
});

// Logout Route
router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged you out!");
	res.redirect("/campgrounds");
});

module.exports = router;
