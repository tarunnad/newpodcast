import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './homePage.css'

class HomePage extends Component {
    render() {
        return (
            <body className="container">
                <section className="title-page">
                    <div>
                        <h1 className="title"> An Interesting Discussion, sometimes*</h1>
                        <span className="subtitle"> A podcast about anything and everything. </span>
                        <span>
                            <button className="listen-now">
                                <a href = "https://open.spotify.com/show/0nJ3wHwLmoXHpzeFMb8pZF"> LISTEN NOW </a>
                            </button>
                            <Link className="all-episodes" to = "/episodes"> VIEW ALL EPISODES </Link>
                        </span>
                    </div>
                </section>
            </body>
        );
    }
}

export default HomePage;