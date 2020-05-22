import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'

//components
import Header from './components/headerComponent/header.js'
import Footer from './components/FooterComponent/footer.js';
import HomePage from './components/pages/homePage.js';
import Episodes from './components/pages/episodes.js';
import SpotifyWebApi from "spotify-web-api-js";

function Spotify(){

    var CLIENT_ID = 'c7c7b784cb0a439b9540bf64711046c9';
    var CLIENT_SECRET = '283bd27886864f739e6bc3fdbdfd6190';




    var spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken("BQChIs4oP3D_3LMdqGZ0YDPvUAy84yETTVhU8Sp4RqplWNueDhJclaTxpENWDKsKNvQ6srRmzslLnFt3D8Qd-iw5pjYTip93iQQRKN5J6YjLyh6E0y4aXUPc93cpmr1L5dMmb_zEePhWaZ9loP14MhU");
    return (spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);


    }));



}

function App() {

  return (
    <Router>
        <React.Fragment>
    <div className="App">
      <Header />
          <Spotify />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/episodes' component={Episodes} />
      <Footer />
    </div>
        </React.Fragment>
    </Router>

  );

}

export default App;
