const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/blog_demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// POST - title, content
const postSchema = new mongoose.Schema({
	title: String,
	content: String
});

const Post = mongoose.model("Post", postSchema);

// USER - email, name
const userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]		// embeded data
});

const User = mongoose.model("User", userSchema);

// let newUser = new User({
// 	email: "hermione@brown.edu",
// 	name: "Hermione Granger"
// });

// newUser.posts.push({
// 	title: "How to Brew Polyjuice Potion",
// 	content: "Lol, jk! Go to potions class!"
// });

// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// // const newPost = new Post({
// // 	title: "Reflections on Apples",
// // 	content: "They are delicious."
// // });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

User.findOne({name: "Hermione Granger"}, function(err, user){
	if(err){
		console.log(err);
	} else {
		user.posts.push({
			title: "Three Things I really Hate",
			content: "Voldemort, Voldemort, Voldemort."
		});
		user.save(function(err, user){
			if (err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});