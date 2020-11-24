import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import Character from './components/Character';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  useEffect(() => {
    let db = [];
    let count = 1;
    while (count < 564) {
      const options = {
        method: 'GET',
        url: 'https://superhero-search.p.rapidapi.com/',
        params: { id: count },
        headers: {
          'x-rapidapi-key': '9c9edd910bmshc17f8a8d6eeafc8p174993jsn4a3f11e195eb',
          'x-rapidapi-host': 'superhero-search.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        db.push(response.data);
      }).catch(function (error) {
        console.error(error);
      });
      count++;
    }
    console.log(db)
  });
  return (
    <Router>
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path='/character/:id' render={() => <Character />} />
      <Route exact path="/search" render={() => <Cards />} />
      <Route path="/" render={() => <Footer />} />
      {/* <Route exact path="/" render={() => <Home />} />
      <Route exact path="/search" render={() => <Cards />} />
      <Route exact path="/character/:id" render={() => <Character />} />
      <Route path="/" render={() => <Footer />} /> */}
    </Router>
  );
}

export default App;
