// ********************************
// SETUP
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgrounds = [
		{
			name: "Salmon Creek",
			image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_333,q_75,w_500/https://assets.simpleviewinc.com/simpleview/image/upload/crm/lanecounty/salmon-creek-campground-by-colin-morton-2018-14--54a7f39c5056b3a_54a8010b-5056-b3a8-49a1afccddf9b8ab.jpg",
		},
		{
			name: "Inn Town Campground",
			image: "https://inntowncampground.com/wp-content/uploads/2014/03/A41A7122-e1464303231462-1030x727.jpg",
		},
		{
			name: "Rob Hill Campground",
			image: "https://www.parksconservancy.org/sites/default/files/styles/basic/public/programs/PRSF_130326_APAZ_179_2x1.JPG?itok=YguufFlB",
		}, 
		{
			name: "Salmon Creek",
			image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_333,q_75,w_500/https://assets.simpleviewinc.com/simpleview/image/upload/crm/lanecounty/salmon-creek-campground-by-colin-morton-2018-14--54a7f39c5056b3a_54a8010b-5056-b3a8-49a1afccddf9b8ab.jpg",
		},
		{
			name: "Inn Town Campground",
			image: "https://inntowncampground.com/wp-content/uploads/2014/03/A41A7122-e1464303231462-1030x727.jpg",
		},
		{
			name: "Rob Hill Campground",
			image: "https://www.parksconservancy.org/sites/default/files/styles/basic/public/programs/PRSF_130326_APAZ_179_2x1.JPG?itok=YguufFlB",
		} // ,
		// {
		// 	name: "Kirby Cove Campground",
		// 	image: "https://cdn.recreation.gov/public/images/66049.jpg"
		// }
	];

// ********************************
// ROUTE

// Landing Page
app.get("/", function (req, res) {
	res.render("landing");
});

// Campgrounds Listing
app.get("/campgrounds", function (req, res) {
	res.render("campgrounds", {campgrounds: campgrounds});
});

// Campgrounds POST
app.post("/campgrounds", function(req,res){
	// get data from form and add to campgrounds
	let name = req.body.name;
	let image = req.body.image;
	let newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	
	// redirect back to campgrounds page
	res.redirect("/campgrounds");
});

// New Campgrounds Form
app.get("/campgrounds/new", function(req,res){
	res.render("new");
});

// ********************************
// LISTENER
app.listen(3000, function () {
	console.log("YelpCamp Server is running on Port 3000.");
});