
// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// if (process.argv[2] === "") {
// request("http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&apikey=trilogy", function(error, response, body) {
//if (!error && response.statusCode === 200) {
//then console.log all movie info
// }else{
  for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
      movieName = movieName + "+" + nodeArgs[i];
    }
    else {
      movieName += nodeArgs[i];
    }
  }
// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    //console log the title of the movie
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
}
});
