import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectType extends Component {
  render() {
    let { requestForPostJob,  changeCheckboxForPostJob } = this.props;
    return (
      <div className="form-block-section col-30">
        <div className="form-block-header">
          <div className="form-block-title">
            Project type
          </div>
        </div>
        <div className="radio-block">
          <div className="radio">
            <input 
              type="checkbox" 
              name="one_time" 
              id="quantity-1" 
              value="quantity-1" 
              checked={ requestForPostJob.time_type === 'one_time' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'time_type') } }
              />
            <label htmlFor="quantity-1">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">One time</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="long_term" 
              id="quantity-3" 
              value="quantity-3"
              checked={ requestForPostJob.time_type === 'long_term' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'time_type') } }
              />
            <label htmlFor="quantity-3">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Long term</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="short" 
              id="quantity-5" 
              value="quantity-5"
              checked={ requestForPostJob.time_type === 'short' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'time_type') } }
              />
            <label htmlFor="quantity-5">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Short</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="not_sure" 
              id="quantity-infinity" 
              value="quantity-infinity" 
              checked={ requestForPostJob.time_type === 'not_sure' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'time_type') } }
              />
            <label htmlFor="quantity-infinity">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Not sure</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

ProjectType.propTypes = {
  requestForPostJob: PropTypes.object,
  changeCheckboxForPostJob: PropTypes.func,
}

export default ProjectType;
