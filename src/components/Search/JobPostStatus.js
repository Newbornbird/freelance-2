import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JobPostStatus extends Component {
  render() {
    let { hideMessageSuccessPosting,  successMessage } = this.props;
    return (
      <div className="job-post-status flexbox justify-space-between" style={ successMessage ? {  } : { 'display': 'none' } }>
        <div>
          <span className="status-text"><em>Job was posted successfully</em></span>
          <a href={ window.location.pathname }>Preview</a>
          <a href={ window.location.pathname }>Go to My Jobs</a>
        </div>
        <button 
          className="btn btn-bg-transparent close-btn icon-btn"
          onClick={ hideMessageSuccessPosting }>
          <span className="glyphicon glyphicon-remove">
          </span>
        </button>
      </div>
    )
  }
}
  
JobPostStatus.propTypes = {
  hideMessageSuccessPosting: PropTypes.func,
  successMessage: PropTypes.bool
}

export default JobPostStatus;
