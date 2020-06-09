// my answer

let movies = [
	{
		title: "Hail Caesar", 
		rating: 3, 
		hasWatched: false
	}, 
	{
		title: "Barton Fink", 
		rating: 4.5, 
		hasWatched: true
	},
	{
		title: "Raising Arizona", 
		rating: 5, 
		hasWatched: true}
];

movies.forEach(function(movie) {
	let strWatched = "watched ";
	if(!movie.hasWatched) {
		strWatched = "not seen ";
	}

	console.log("You have " + strWatched + "\"" + movie.title + "\" - " + movie.rating + " stars.");
})

// offical solution

// var movies = [
// 	{
// 		title: "In Bruges",
// 		hasWatched: true,
// 		rating: 5
// 	},
// 	{
// 		title: "Frozen",
// 		hasWatched: false,
// 		rating: 4.5
// 	},
// 	{
// 		title: "Les Miserables",
// 		hasWatched: false,
// 		rating: 3.5
// 	}
// ];

// movies.forEach(function(movie) {
// 	console.log(buildString(movie));
// })

// function buildString(movie) {
// 	var result = "You have ";
// 	if(movie.hasWatched) {
// 		result += "watched ";
// 	} else {
// 		result += "not seen ";
// 	}
// 	result += "\"" + movie.title + "\" - ";
// 	result += movie.rating + " stars";
// 	return result;
// }