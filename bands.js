var axios = require("axios");

var artist = process.argv[2];

axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("Name of the venue: " + response.data);
    // console.log("Venue location: " + response.data.venue.name);
    // console.log("Date of the event: " + response.data.venue.name);
  }
);