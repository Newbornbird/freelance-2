import React, { Component } from 'react';

class JobPostStatus extends Component {
  render() {
    return (
      <div className="job-post-status flexbox justify-space-between" style={ this.props.successMessage ? {  } : { 'display': 'none' } }>
        <div>
          <span className="status-text"><em>Job was posted successfully</em></span>
          <a href="#">Preview</a>
          <a href="#">Go to My Jobs</a>
        </div>
        <button 
          className="btn btn-bg-transparent close-btn icon-btn"
          onClick={ this.props.HIDE_MESSAGE_SUCCESS_POSTING }>
          <span className="glyphicon glyphicon-remove">

          </span>
        </button>
      </div>
    )
  }
}
  


export default JobPostStatus;
