import React, { Component } from 'react';


class BtnStartNewProject extends Component {
  render () {
    return(
      <div className="panel panel-default panel-btn" onClick={ this.props.openModal }>
        <a >
          <i className="icon icon-hand"></i>
          <span> Start New Project </span>
        </a>
      </div>
    )
  }
}



export default BtnStartNewProject;