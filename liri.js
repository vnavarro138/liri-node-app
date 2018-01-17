// fs is a core Node package for reading and writing files
var fs = require("fs");

// Include the request for npm packages
var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
//spotify keys
var spotify = new Spotify (keys);
//keys
var keys =require("./keys.js");
//user based authentication
var client = new Twitter (keys);

// Store all of the arguments in an array
var nodeArgs = process.argv;
// Parses the command line argument to capture the command request and the movie or song title
// Create an empty variable for holding the movie name
var movieName = "";
var songName = "";
var params = {screen_name: 'Queen V', count: 20};
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

//TO DO: create a switch condition for the three accepted input commands
switch (nodeArgs[2]){
	case "movie-this":
	movieThis();
	break;

	case "my-tweets":
	tweets();
	break;

	case "spotify-me":
	spotifyThis();
	break;
}


function movieThis () {
	  if (nodeArgs[3] === undefined) { 
    movieName = "Mr+nobody";
    }else {
    for (var i = 2; i < nodeArgs.length; i++) {
      if (i > 2 && i < nodeArgs.length) {
       movieName = movieName + "+" + nodeArgs[i];
      }
      else {
        movieName += nodeArgs[i];
      }
    }
  }
// Then run a request to the OMDB API with the movie specified
//console.log(nodeArgs[2]);
//console.log(movieName);
//since movieName was defined as movieName+'the actual movie title', I used this to remove movie-this+ that was in front of movie title
movieName = movieName.replace("movie-this+","");
//console.log(movieName);
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
//console.log(queryUrl);
//console.log(nodeArgs[2]);
request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200){

    // Parse the body of the site and recover just the imdbRating
    //console log the title of the movie
    console.log("The movie's title is: " + JSON.parse(body).Title);
    //console log the year the movie came out
    console.log("The movie came out in the year: " + JSON.parse(body).Year);
    //console log the imdb rating of movie
    console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    //console log the imdb rating of movie
    //console.log("The movie's Rotten Tomatoes score is: " + JSON.parse(body).Ratings[1].Value);
    //console log the Country where movie was produced
    console.log("The movie was produced in: " + JSON.parse(body).Country);
    //console log the language in which the movie was produced
    console.log("The movie language is: " + JSON.parse(body).Language);
    //console log the movie plot
    console.log("Movie Plot: " + JSON.parse(body).Plot);
    //console log the actors
    console.log("Movie Actors: " + JSON.parse(body).Actors);
  }
});
}

function tweets () {
	client.get('statuses/user_timeline', params, function(error, tweets, response) {

  	if (!error) {
  		//for all tweets data
  		//console.log(tweets);
  		//limit data to only text
  	  tweets.forEach(function (individualTweet) {
  	  console.log('My Tweet: ' + individualTweet.text);
  	  //console log when they were created, added the "\n" to include a break for easier read
  	  console.log('Created on: ' + individualTweet.created_at + "\n");
  	  })
  	}
	});
};

function spotifyThis () {
  for (var i = 3; i < nodeArgs.length; i++) {
   if (i > 3 && i < nodeArgs.length) {
     songName = songName + "+" + nodeArgs[i];

  }
   else {
     songName += nodeArgs[i];
   }
 }
//Test for songName variable: 
//console.log(songName);
spotify.search({ type: 'track', query: songName, limit: 1}, function(err, data) {
  if (err) {
    console.log("CHECK");
    console.log('Error occurred: ' + err);
  }
//console log the artist name
console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
//console log song name
console.log("Song Title: " + data.tracks.items[0].name);
//console log preview link of song
console.log("Link to Song: " + data.tracks.items[0].preview_url);
//console log album song is in
console.log("Album Title: " + data.tracks.items[0].album.name);
});
};