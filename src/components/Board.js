import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Board extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/board/skills'>Skills</Link></li>
          <li><Link to='/board/search/job'>Searching</Link></li>
        </ul>
      </div>

    )
  }
}

export default Board;