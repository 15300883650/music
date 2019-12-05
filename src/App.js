import React from 'react';
import './App.css';
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
    
            <Route path="/" component={Home}></Route>
            <Route path="/player" component={Player}></Route>
            <Route path="/rank" component={Rank}></Route>
            <Route path="/recommend" component={Recommend}></Route>
            <Route path="/search" component={Search}></Route>
            <Route path="/songList" component={SongList}></Route>
           
    </Router>
    </div>
  );
}

export default App;
