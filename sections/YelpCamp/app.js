// ********************************
// SETUP

// Require Code Packages
const express 			= require("express"),
	  app 				= express(),
	  bodyParser		= require("body-parser"),
	  mongoose			= require('mongoose'),
	  passport			= require("passport"),
	  expressSession 	= require("express-session"), 
	  LocalStrategy		= require("passport-local"),
	  seedDB			= require("./seeds");

// Require Mongoose Models
const Campground		= require("./models/campground"),
	  Comment			= require("./models/comment"),
	  User 				= require("./models/user");

// require Routes
const campgroundRoutes 	= require("./routes/campgrounds"),
	  commentRoutes 	= require("./routes/comments"),
	  indexRoutes 		= require("./routes/index");

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
// seedDB(); // seed the database

// Configure Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
// make user info available to all templates
app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

// pull in routes
app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

// ********************************
// LISTENER
app.listen(3000, function () {
	console.log("YelpCamp Server is running on Port 3000.");
});