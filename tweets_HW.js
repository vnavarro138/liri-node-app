// fs is a core Node package for reading and writing files
var fs = require("fs");
fs.readFile("keys.js", "utf8", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }

  // We will then print the contents of data
  console.log(data);

  // Then split it by commas (to make it more readable)
  var dataArr = data.split(",");

  // We will then re-display the content as an array for later use.
  console.log(dataArr);
    console.log(dataArr[1]);

});
var Twitter = require('twitter');
//user based authentication
var client = new Twitter({
  consumer_key: 'eZAmAiqSD08TOfgZLJthhaiB9',
  consumer_secret: '8ADgZYTHSnfpleEbqpsM079dDroe3IeDCHfIU4HemTowgBq2dU',
  access_token_key: '950968339018362880-KccIbPnMmmdgIbanvFLHds6tCSAIwQT',
  access_token_secret: 'SSnUyKRQenrpo7o8tHVKAJRHAdO2qOv3qOAOKcpi8je00',
});
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
    //console log when they were created
    console.log('Created on: ' + individualTweet.created_at);
    })
  }
});
};