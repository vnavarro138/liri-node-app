var fs = require("fs");
var Spotify = require('node-spotify-api');
var keys =require("./keys.js");
var spotify = new Spotify (keys);

 
var nodeArgs = process.argv;
var songName = "";


if (nodeArgs[2] === "spotify-me") {
  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      songName = songName + "+" + nodeArgs[i];

    }
    else {
      songName += nodeArgs[i];
    }
 }
//Test for songName variable: 
console.log(songName);
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
  //if no song, default is ace of base - the sign