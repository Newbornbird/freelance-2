import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BtnStartNewProject extends Component {
  render() {
    return (
      <div className="panel panel-default panel-btn" onClick={this.props.openModal} style={{ cursor: 'pointer' }}>
        <a>
          <i className="icon icon-hand" />
          <span> Start New Project </span>
        </a>
      </div>
    );
  }
}

BtnStartNewProject.propTypes = {
  openModal: PropTypes.func,
};

export default BtnStartNewProject;
