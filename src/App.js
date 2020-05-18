import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//components
import Header from './components/headerComponent/header.js'
import Footer from './components/FooterComponent/footer.js';
import HomePage from './components/pages/homePage.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
          <Route exact path='/home' component={HomePage} />
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;
