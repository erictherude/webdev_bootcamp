// ********************************
// SETUP
// Require Modules
const bodyParser		= require("body-parser"),
	  methodOverride	= require("method-override"),
	  expressSanitizer	= require("express-sanitizer"),
	  mongoose			= require("mongoose"),
	  express			= require("express"),
	  app				= express();

// Setup App Environment
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Connect to Mongoose
mongoose.connect('mongodb+srv://ekammerud:nbcWilOpYqNcxbhe@ekcluster.uqxns.mongodb.net/blog_app?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// Setup Mongoose Blog Schema & Model
const blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

const Blog = mongoose.model("Blog", blogSchema);

// ********************************
// ROUTES
app.get("/", function(req, res){
	res.redirect("/blogs");
})

// INDEX Route
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});
		}
	});	
});

// NEW Route
app.get("/blogs/new", function(req, res){
	res.render("new");
});

// CREATE Route
app.post("/blogs", function(req, res){
	// create blog post
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		} else {
			// redirect to index
			res.redirect("/blogs");
		};			
	});
});

// SHOW Route
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundBlog});	
		};
	});
});

// EDIT Route
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog});
		};
	});
});

// UPDATE Route
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);
		};
	});
});

// DELETE Route
app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs");
		};
	});
});


// ********************************
// LISTENER
app.listen(3000, function () {
	console.log("BlogApp Server is running on Port 3000.");
});