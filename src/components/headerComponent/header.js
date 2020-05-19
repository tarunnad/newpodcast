import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component {
    render() {
        return (
            <body className="container">
                <header className = "main-header">
                    <Link to="/home" className="brand-logo"> 
                        <div className="brand-logo-name"> LOGO </div>
                    </Link>
                    <nav className="main-nav">
                        <ul>
                            <li><Link to="/home"> HOME </Link></li>
                            <li><Link to="/episodes"> EPISODES </Link></li>
                            <li><Link to="/aboutus"> ABOUT US </Link></li>
                            <li><Link className="last" to="/contact"> CONTACT </Link></li>
                        </ul>    
                    </nav>
                </header>
            </body>
        );
    }
}

export default Header;