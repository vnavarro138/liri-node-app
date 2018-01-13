// Include the request npm package
var request = require("request");
// Store all of the arguments in an array
var nodeArgs = process.argv;
// Parses the command line argument to capture the command request and the movie or song title
// Create an empty variable for holding the movie name
var movieName = "";
var songTitle = "";
//nodeArgs[2];
//TO DO: Write code to grab data from keys.js

//TO DO: Store keys in a variable
//TO DO: have accept inputstring "my-tweets"
//TO DO: have liri accept inputstring "spotify-this-song '<song name here>'"
//TO DO: in console, show artist, song name, preview link of the song from spotify, 
        // and the album the song is from. if no song is selected return "the sign - ace of base" 

//TO DO: output title of the movie, year movie came out, IMDB rating, rottentomatoes rating
	    //cont'd country of production, movie language, plot, actors. 
//TO DO: default movie is Mr Nobody (if no movie name is entered)
//TO DO: have liri accept inputstring "do-what-it-says"

//TO DO: have liri accept inputstring "movie-this '<moviename here?'"
if (process.argv[2] === "movie-this") {

	for (var i = 2; i < nodeArgs.length; i++) {
	  if (i > 2 && i < nodeArgs.length) {
	    movieName = movieName + "+" + nodeArgs[i];

	  }
	  else {
	    movieName += nodeArgs[i];
  	  }
	}
		    
}


else if (process.argv[2] === "spotify-this-song") {
  for (var i = 2; i < nodeArgs.length; i++) {
	  if (i > 2 && i < nodeArgs.length) {
	    songTitle = songTitle + "+" + nodeArgs[i];

	  }
	  else {
	    songTitle += nodeArgs[i];
  	  }
	}
		    
}


// else if (process.argv[2] === "my-tweets") {

// }

console.log(movieName);

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover the following...
    console.log("The movie's title is: " + JSON.parse(body).Title);
    //console log the year the movie came out
    console.log("The movie came out in the year: " + JSON.parse(body).Year);
    //console log the imdb rating of movie
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    //console log the imdb rating of movie
    console.log("The movie's Rotten Tomatoes score is: " + JSON.parse(body).Ratings[1].Value);
    //console log the Country where movie was produced
    console.log("The movie was produced in: " + JSON.parse(body).Country);
    //console log the language in which the movie was produced
    console.log("The movie language is: " + JSON.parse(body).Language);
    //console log the movie plot
    console.log("Movie Plot: " + JSON.parse(body).Plot);
    //console log the actors
    console.log("Movie Actors: " + JSON.parse(body).Actors);
    console.log("end of file");
  }
});



