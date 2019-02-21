import React, { Component } from 'react';

class Hello extends Component  {
  render() {
    return(
      <div className="hello-header">
        <div className="blue-color hello-header-name">
          <span className="user-name">{ 'Hi, ' + this.props.userName }</span>
        </div>
        <div className="hello-header-text">What are you looking for toady?</div>
      </div>
    )
  }
}
  


export default Hello;