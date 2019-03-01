import React, { Component } from 'react';
import './styles/media.css'
import './styles/styles.css';
import './App.css';
import Authorization from './components/Authorization';
import Skills from './components/Skills';
import { Switch, Route } from 'react-router-dom';
import Board from './components/Board';
import Search from './components/Search/Search';


class App extends Component {
  render() {
    return (
      <Switch> 
        <Route exact path="/" component={ Authorization }/>
        <Route exact path="/board" component={ Board } />
        <Route exact path="/board/skills" component={ Skills } />
        <Route path="/board/search" component={ Search } /> 
      </Switch>
    );
  }
}

export default App;
