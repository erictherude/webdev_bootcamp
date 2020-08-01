const mongoose = require("mongoose");

// Schema Setup
const campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		},
		username: String
	},
	comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Comment"
	}]
});

module.exports = mongoose.model("Campground", campgroundSchema);