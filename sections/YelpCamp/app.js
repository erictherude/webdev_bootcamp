
// ********************************
// SETUP
const express 			= require("express"),
	  app 				= express(),
	  bodyParser		= require("body-parser"),
	  mongoose			= require('mongoose'),
	  passport			= require("passport"),
	  expressSession 	= require("express-session"), 
	  LocalStrategy		= require("passport-local"),
	  Campground		= require("./models/campground"),
	  Comment			= require("./models/comment"),
	  User 				= require("./models/user"),
	  seedDB			= require("./seeds");


// Configure Mongoose
mongoose.connect('mongodb://localhost:27017/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// Configure Environment
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(expressSession({
	secret: "BananaCat is a jerk and HellerCat is a hider.",
	resave: false,
	saveUninitialized: false
}));

// Configure Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ********************************
// MIDDLEWARE
// make user info available to all templates
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

// check for user logged in
function isLoggedIn(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login");
};

// seedDB();

// ********************************
// ROUTES

// Landing Page (GET)
app.get("/", function (req, res) {
	res.render("landing");
});

// Campground Roues
// Campgrounds Listing (GET)
app.get("/campgrounds", function (req, res) {
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err)
		} else {
			res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
	res.render("campgrounds/new");
});

// Show campground detail (GET)
app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			// console.log(foundCampground);
			res.render("campgrounds/show", {campground: foundCampground});
		}
	});
	
});

// Comments Routes
// New Comment Form (GET)
app.get("/campgrounds/:id/comments/new", isLoggedIn, function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: foundCampground});
		}
	});	
});

// Create comment (POST)
app.post("/campgrounds/:id/comments", isLoggedIn, function(req, res){
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
					// connect new comment to campground
					foundCampground.comments.push(createdComment);
					foundCampground.save();
					res.redirect("/campgrounds/" + foundCampground._id);
				}
			});
		}
	});
});

// Registration Routes
// Show registration form
app.get("/register", function(req, res){
	res.render("register");
});

// Create new user
app.post("/register", function(req, res){
	const newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, createdUser){
		if(err){
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, function(){
			res.redirect("/campgrounds");
		});
	});
});

// Login Routes
// Show login form
app.get("/login", function(req, res){
	res.render("login");
});

// Log user in
app.post("/login", passport.authenticate("local", {
	successRedirect: "/campgrounds",
	failureRedirect: "/login"
}), function(req,res){
});

// Logout Route
app.get("/logout", function(req, res){
	req.logout();
	res.redirect("/campgrounds");
});



// ********************************
// LISTENER
app.listen(3000, function () {
	console.log("YelpCamp Server is running on Port 3000.");
});