import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <a className="logo"> LOGO </a>
                <nav className="header-right">
                    <Link to="/home"> HOME </Link>
                    <Link to="/episodes"> EPISODES </Link>
                    <Link to="/aboutus"> ABOUT US </Link>
                    <Link className="last" to="/contact"> CONTACT </Link>
                </nav>
            </header>
        );
    }
}

export default Header;