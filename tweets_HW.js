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
    console.log('My Recent Tweets: ' + individualTweet.text);
    })
  }
});
};