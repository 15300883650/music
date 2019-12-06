import React from 'react';
import Home from './components/home'
import Player from './components/player'
import Rank from './components/rank'
import Recommend from './components/recommend'
import Search from './components/search'
import SongList from './components/songList'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>        
   <Switch>
            <Route path="/songList/:id" component={SongList}></Route>
            <Route path="/player" component={Player}></Route>
          <Route path="/" component={Home}></Route>
          </Switch>
    </Router>
    </div>
  );
}

export default App;
