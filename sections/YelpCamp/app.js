// ********************************
// SETUP
const express 		= require("express"),
	  app 			= express(),
	  bodyParser	= require("body-parser"),
	  mongoose		= require('mongoose'),
	  Campground	= require("./models/campground"),
	  Comment		= require("./models/comment"),
	  seedDB		= require("./seeds");


// Configure Environment
mongoose.connect('mongodb://localhost:27017/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedDB();

// ********************************
// ROUTE

// Landing Page (GET)
app.get("/", function (req, res) {
	res.render("landing");
});

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

// ********************************
// Comments Routes
app.get("/campgrounds/:id/comments/new", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		} else {
			res.render("comments/new", {campground: foundCampground});
		}
	});	
});

app.post("/campgrounds/:id/comments", function(req, res){
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
	
	
	// redirect to campground show page
});

// ********************************
// LISTENER
app.listen(3000, function () {
	console.log("YelpCamp Server is running on Port 3000.");
});