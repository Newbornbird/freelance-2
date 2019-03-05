import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TalentLevel extends Component {
  render() {
    let { requestForPostJob,  changeCheckboxForPostJob } = this.props;
    return (
      <div className="form-block-section">
        <div className="form-block-header">
          <div className="form-block-title">
            Talent Level
          </div>
        </div>
        <div className="radio-block">
          <div className="radio">
            <input 
              type="checkbox" 
              name="intern" 
              id="level-int" 
              value="level-int" 
              checked={ requestForPostJob.level === 'intern' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'level') } }
              />
            <label htmlFor="level-int">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Intern</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="junior" 
              id="level-jun" 
              value="level-jun"
              checked={ requestForPostJob.level === 'junior' } 
              onChange={ (event) => { changeCheckboxForPostJob(event, 'level') } }
              />
            <label htmlFor="level-jun">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Junior</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="senior" 
              id="level-sen" 
              value="level-sen" 
              checked={ requestForPostJob.level === 'senior' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'level') } }
              />
            <label htmlFor="level-sen">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Senior</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="expert" 
              id="level-exp" 
              value="level-exp"
              checked={ requestForPostJob.level === 'expert' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'level') } }
              />
            <label htmlFor="level-exp">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Expert</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

TalentLevel.propTypes = {
  requestForPostJob: PropTypes.object,
  changeCheckboxForPostJob: PropTypes.func,
}

export default TalentLevel;
