import React  from 'react';
//import { BrowserRouter as Router, Route} from 'react-router-dom'
import SpotifyWebApi from "spotify-web-api-js";


function Spotify(state) {


     var spotifyApi = new SpotifyWebApi();
     spotifyApi.setAccessToken("BQBSkSzZtfk8LzxvdTRxzRFm2aJxLg9mSFZnjResOIsNv7g9tawsr-g22cx8XrEsBGQ1Jbo2Gx9gt_vLHr2efSBttVZCA7BEmStCsd2YHnpdXhzVfKDPyXYB9FlbbFqzUwR6KSmy7cjMQR38KL5bMLw");
     return (spotifyApi.getShowEpisodes('0nJ3wHwLmoXHpzeFMb8pZF', function (err, data) {
         if (err) console.error(err);
         else return {data: data};


     }));


 }

export default connect(Spotify);



