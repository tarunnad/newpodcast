import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className = "wholeFooter">
                <div className = "col1">
                    <p className = "title">
                        An Interesting Discussion, Sometimes*
                    </p>
                    <p className="copy">
                        Copyright © 2020 All Rights Reserved by An Interesting Discussion, Sometimes
                    </p>
                </div>
                <div className = "col2">
                    <h1>PAGES</h1>
                    <nav className="footer-pages">
                        <Link to="/home"> HOME </Link>
                        <Link to="/episodes"> EPISODES </Link>
                        <Link to="/aboutus"> ABOUT US </Link>
                        <Link className="last" to="/contact"> CONTACT </Link>
                    </nav>
                </div>
                <div className = "col3">
                    <h1>FOLLOW US</h1>
                    <nav className="footer-links">
                        <Link to="/home"> Spotify </Link>
                        <Link to="/episodes"> Apple Podcasts </Link>
                        <Link to="/aboutus"> Google Podcasts </Link>
                        <Link className="last" to="/contact"> Gmail </Link>
                    </nav>
                </div>
            </footer>
        );
    }
}

export default Footer;