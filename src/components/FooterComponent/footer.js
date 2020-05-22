import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <body className = "footerBody">
            <footer className = "wholeFooter">
                <div className= "Row">
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
                </div>
                    <div className = "pages">
                    <nav className="LinkPages">
                        <ul>
                            <li>
                                <Link to="/home"> HOME </Link>
                            </li>
                            <li>
                                <Link to="/episodes"> EPISODES </Link>
                            </li>
                            <li>
                                <Link to="/aboutus"> ABOUT US </Link>
                            </li>
                            <li>
                                <Link to="/contact"> CONTACT </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className = "col3">
                    <h1>FOLLOW US</h1>
                </div><div className="follow">
                    <nav className="LinkFollow">
                        <ul>
                            <li>
                                <Link to="/home"> Spotify </Link></li>
                            <li>
                                <Link to="/episodes"> Apple Podcasts </Link></li>
                            <li>
                                <Link to="/aboutus"> Google Podcasts </Link></li>
                            <li>
                                <Link to="/contact"> Gmail </Link></li>
                        </ul>
                    </nav>
                </div>
                </div>
            </footer>
            </body>
        );
    }
}

export default Footer;