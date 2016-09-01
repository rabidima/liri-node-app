// What Each Command Should Do

// node liri.js my-tweets

        // * This will show your last 20 tweets and when they were created at in your terminal/bash window.



// Include the twitter NPM package (Remember to run "npm install twitter")
var Twitter = require('twitter');

// Take in the command line arguments
var input = process.argv;

// Create an empty string for holding the action
var action = "";

// Capture all the words in the input ( ignoring the first two Node arguments)
for (var i=2; i<input.length; i++){

        // Build a string with the action.
        action = action + "" + input[i];
       
}


if ( action === 'my-tweets'){


// Include key.js file
        var keys = require('./keys');

        var client = new Twitter(keys.twitterKeys);

        var params = {screen_name: 'nodejs', count: 4, screen_name: 'RabinDima'};

        client.get('statuses/user_timeline', params, function(error, tweets, response) {
          
          if (!error) {
            console.log(tweets);
          }
        });
 }else if (action === 'spotify-this-song'){
        }else {
        console.log("Dont understand your request!");       
        }
// client.get('favorites/list', function(error, tweets, response) {
//   if(error) throw error;
//   console.log(tweets);  // The favorites. 
//   console.log(response);  // Raw response object. 
// });



                // // Then use the Google Geocoder to geocode the address
                // geocoder.geocode(address, function(err, data){

                //         // Then console log the result and stringify it.
                //         // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
                //         // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
                //         console.log(JSON.stringify(data, null, 2));
                // });

// node liri.js spotify-this-song '<song name here>'
        // * This will show the following information about the song in your terminal/bash window
        //     * Artist(s)
        //     * The song's name
        //     * A preview link of the song from Spotify
        //     * The album that the song is from
                            
        // * if no song is provided then your program will default to
        //     * "The Sign" by Ace of Base
        
// node liri.js movie-this '<movie name here>'
        // * This will output the following information to your terminal/bash window:

        //     * Title of the movie.
        //     * Year the movie came out.
        //     * IMDB Rating of the movie.
        //     * Country where the movie was produced.
        //     * Language of the movie.
        //     * Plot of the movie.
        //     * Actors in the movie.
        //     * Rotten Tomatoes Rating.
        //     * Rotten Tomatoes URL.

        // * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        //     * If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
        //     * It's on Netflix!

// node liri.js do-what-it-says
        // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
        // Feel free to change the text in that document to test out the feature for other commands.
// BONUS

// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.
