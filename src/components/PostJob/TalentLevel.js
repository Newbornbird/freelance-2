import React, { Component } from 'react';

class TalentLevel extends Component {
  render() {
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
              checked={ this.props.requestForPostJob.level === 'intern' }
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
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
              checked={ this.props.requestForPostJob.level === 'junior' } 
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
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
              checked={ this.props.requestForPostJob.level === 'senior' }
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
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
              checked={ this.props.requestForPostJob.level === 'expert' }
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'level') } }
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

export default TalentLevel;
