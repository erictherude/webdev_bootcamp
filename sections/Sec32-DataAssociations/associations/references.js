const mongoose = require("mongoose");
const Post = require("./models/post");
const User = require("./models/user");

mongoose.connect('mongodb://localhost:27017/blog_demo_2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });

// Post.create({
// 	title: "How to cook the best burger, Part 4",
// 	content: "SERIOUSLY, WHAT DON'T YOU GET?!?!?!?!?!"
// }, function(err, post){
// 	User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 		if(err){
// 			console.log(err);
// 		} else {
// 			foundUser.posts.push(post);
// 			foundUser.save(function(err, data){
// 				if(err){
// 					console.log(err);
// 				} else {
// 					console.log(data);
// 				}
// 			});
// 		}
// 	});
// });

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });

// Post.findById("5f1946424cc7720fa4e39d57", function(err, foundPost){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
// 			if(err){
// 				console.log(err);
// 			} else {
// 				foundUser.posts.push(foundPost);
// 				foundUser.save(function(err, data){
// 					if(err){
// 						console.log(err);
// 					} else {
// 						console.log(data);
// 					}
// 				});
// 			}
// 		});
// 	}
// });