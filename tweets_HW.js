// fs is a core Node package for reading and writing files
var fs = require("fs");
//need to give an absolute file path for keys.js
var keys =require("./keys.js");

var Twitter = require('twitter');
//user based authentication
var client = new Twitter (keys);


 //enter twitter screen name you want to pull tweets from here under the parameters array created and named params(ie. Queen V)
 //count can also be set here (we want last 20 tweets)
var params = {screen_name: 'Queen V', count: 20};
if (process.argv[2] === "my-tweets") {
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