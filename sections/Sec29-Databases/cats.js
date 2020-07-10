const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

const catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

const Cat = mongoose.model("Cat", catSchema);

// add a new cat to the DB
// let george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("Something went wrong");
// 	} else {
// 		console.log("Save completed.");
// 		console.log(cat);
// 	};
// });

Cat.create({
	name: "Snow White",
	age: 15,
	temperament: "Bland"
}, function(err, cat){
	if(err){
		console.log(err);
	} else {
		console.log(cat);
	}
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
	if(err){
		console.log("ERROR!");
	} else {
		console.log("ALL THE CATS!");
		console.log(cats);
	}
});
