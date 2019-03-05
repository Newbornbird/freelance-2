import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JobTitleDescription extends Component {
  render() {
    const { changeStrInpForPostJob, requestForPostJob } = this.props;
    return (
      <div className="form-block">
        <div className="post-job-inputs form-block-wrapper">
          <input
            name="title"
            type="text"
            placeholder="Job Title"
            className="job-title form-control"
            style={requestForPostJob.title ? {} : { backgroundColor: '#fff1f5', border: '2px solid #cb001f' }}
            value={requestForPostJob.title}
            onChange={event => {
              changeStrInpForPostJob(event);
            }}
          />
          <textarea
            placeholder="Job Description"
            className="form-control job-descr"
            rows="4"
            style={requestForPostJob.description ? {} : { backgroundColor: '#fff1f5', border: '2px solid #cb001f' }}
            name="description"
            onChange={event => {
              changeStrInpForPostJob(event);
            }}
            value={requestForPostJob.description}
          />
        </div>
      </div>
    );
  }
}

JobTitleDescription.propTypes = {
  requestForPostJob: PropTypes.object,
  changeStrInpForPostJob: PropTypes.func,
};

export default JobTitleDescription;
