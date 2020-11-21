import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import Character from './components/Character';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home />} />
      {/* <Route exact path="/" render={() => <Home />} />
      <Route exact path="/search" render={() => <Cards />} />
      <Route exact path="/character/:id" render={() => <Character />} />
      <Route path="/" render={() => <Footer />} /> */}
    </Router>
  );
}

export default App;
