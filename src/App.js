import React, { Component } from 'react';
import './bootstrap/css/bootstrap.min.css';
import './styles/media.css'
import './styles/styles.css';
import './App.css';
import Authorization from './components/Authorization';
// import Skills from './components/Skills/Skills';
import { Switch, Route } from 'react-router-dom';
import Board from './components/Board';
import Search from './components/Search/Search';
import PostJob from './components/PostJob.js/PostJob';

class App extends Component {
  render() {
    return (
      <Switch> 
        <Route exact path="/" component={ Authorization }/>
        <Route exact path="/board" component={ Board } />
        {/* <Route exact path="/board/skills" component={ Skills } /> */}
        <Route path="/board/search" component={ Search } /> 
        <Route path="/board/skills" component={ PostJob } />  
      </Switch>
    );
  }
}

export default App;
