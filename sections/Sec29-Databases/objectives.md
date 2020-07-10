# Section 29 - Databases
### Lesson 301 - What is a Database?
* What is a database?
	* A collection of information/data
	* Has an interface that allows us to view/interact with contents
* SQL vs. NoSQL
	* SQL 
		* relational database
		* tabular
		* flat
		* not flexible
	* NoSQL
		* non-relational database
		* BSON - Binary JSON objects
		* flexible

### Lesson 303 - Intro to MongoDB
* What is MongoDB?
	* NoSQL Database
* Why MongoDB?
	* Most popular for use with NodeJS at this time
	* Good tools
* Install MongoDB
	* Updated video - https://youtu.be/jNxBu_HZf9Y
	* mongod launches mongoDB
	* create script to turn off journaling in workingmongo directory
		* `echo "mongod --nojournal" > mongod` - creates script file
		* `chmod a+x mongod` - change perms on script to allow execution
		* `./mongod`

### Lesson 304 - Mongo Shell Basics
* `mongod` - (Mongo Daemon) launches MongoDB 
* `mongo` - Launches Mongo Shell
* `help` - list commands
* `show dbs` - show list of db names
* `use` - use or create a database
* `insert` - add to db
	* `db.[_COLLECTION_NAME_].insert({_INSERT_})`
	* `db.dogs.insert({name: "Rusty", breed: "Mutt"})`
* `find` - retrieve records from a database
	* `db.[_COLLECTION_NAME_].find({_SELECT_})`
	* `db.dogs.find({breed: "Mutt"})`
* `update` - modify existing record
	* `db.[_COLLECTION_NAME_].update({_SELECT_}, {_UPDATE_})`
	* `db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"})`
		* rewrites entire object
	* `db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCute: true}})`
		* `$set` only changes specified items 
* `remove` - delete oblects
	* `db.[_COLLECTION_NAME_].remove({_SELECT_})`
	* `db.dogs.remove({breed: "Labradoodle"})`
		* Add `.limit(_NUM_)` to control number of records deleted

### Lesson 306 & 307 - Intro to Mongoose
* What is Mongoose?
	* MongoDB object modeling solution
* Why are we using it?
* Interact with Mongo DB using Mogoose
* Mongoose Connection Code:

`const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db_name", {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
.then(() => console.log("Connected to DB!"));
.catch(error => console.log(error.message));`