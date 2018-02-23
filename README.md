# liri-node-app

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

This application send requests to the Twitter, Spotify and OMDB APIs. The following Node packages were used:Twitter, Spotify. and Request.

Request is used to grab data from the OMDB API.

LIRI will accept the following commands from the terminal:
node liri.js my-tweets
node liri.js spotify-this-song '<song name here>'
node liri.js movie-this '<movie name here>'
  
node liri.js my-tweets
This will show your last 20 tweets and when they were created at in your terminal/bash window.

node liri.js spotify-this-song '<song name here>'
This will show the following information about the song in your terminal/bash window

Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from
If no song is provided then your program will default to "The Sign" by Ace of Base.

node liri.js movie-this '<movie name here>'
This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

Have fun getting schooled on song, or movie information, and have fun cringing at your latest tweets! What were you thinking posting that?!

