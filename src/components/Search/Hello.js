import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component  {
  render() {
    return(
      <div className="hello-header">
        <div className="blue-color hello-header-name">
          <span className="user-name">{ 'Hi, ' + this.props.userName }</span>
        </div>
        <div className="hello-header-text">What are you looking for today?</div>
      </div>
    )
  }
}

Hello.propTypes = {
  userName: PropTypes.string,
}

export default Hello;