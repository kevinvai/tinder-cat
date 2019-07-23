import React from 'react';
import TinderCard from './components/tindercard/TinderCard'
import FavoritesContainer from './components/favoritescontainer/FavoritesContainer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import TinderNav from './components/tindernav/TinderNav'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
            <TinderNav />
            <Route exact path='/' component={TinderCard} />
            <Route exact path='/favs' component={FavoritesContainer}/>
        </Router>
      </div>
    </div>
  );
}

export default App;
