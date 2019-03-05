import React, { Component } from 'react';
import Navigation from '../Navigation';
import SearchMain from './SearchMain';

class Search extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <SearchMain />
      </div>
    );
  }
}

export default Search;
