import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './episodes.css'
import Spotify from '../SpotifyComponent/spotify.js'

class Episodes extends Component {
    render() {
        return (
            <body className="containerEpisodes">
            <div className = "episodesDiv">
                <p className="episodesTitle">All Episodes</p>
            </div>
            </body>
        );
    }
}

export default Episodes;