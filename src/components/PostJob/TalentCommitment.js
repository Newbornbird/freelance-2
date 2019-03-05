import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TalentCommitment extends Component {
  render() {
    let { requestForPostJob,  changeCheckboxForPostJob } = this.props;
    return (
      <div className="form-block-section col-30">
        <div className="form-block-header">
          <div className="form-block-title">
            Talent Commitment
          </div>
        </div>
        <div className="radio-block">
          <div className="radio">
            <input 
              type="checkbox" 
              name="decide_later" 
              id="later" 
              value="later" 
              checked={ requestForPostJob.commitment === 'decide_later' }
              onChange={ (event) => { changeCheckboxForPostJob(event, 'commitment') } } />
            <label htmlFor="later">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">I will Decide Later</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="per_week_10" 
              id="10hrs" 
              value="10hrs" 
              checked={ requestForPostJob.commitment === 'per_week_10' } 
              onChange={ (event) => { changeCheckboxForPostJob(event, 'commitment') } }
              />
            <label htmlFor="10hrs">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">10 hrs per week</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="per_week_up_to_30" 
              id="30hrs" 
              value="30hrs" 
              checked={ requestForPostJob.commitment === 'per_week_up_to_30' } 
              onChange={ (event) => { changeCheckboxForPostJob(event, 'commitment') } }
              />
            <label htmlFor="30hrs">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Up to 30 hrs per week</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="per_week_more_than_30" 
              id="30morehrs" 
              value="30morehrs"
              checked={ requestForPostJob.commitment === 'per_week_more_than_30' } 
              onChange={ (event) => { changeCheckboxForPostJob(event, 'commitment') } }
              />
            <label htmlFor="30morehrs">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">More than 30 hrs per week</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

TalentCommitment.propTypes = {
  requestForPostJob: PropTypes.object,
  changeCheckboxForPostJob: PropTypes.func,
}

export default TalentCommitment;
