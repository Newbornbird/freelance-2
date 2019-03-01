import React, { Component } from 'react';

class TalentCommitment extends Component {
  render() {
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
              checked={ this.props.requestForPostJob.commitment === 'decide_later' }
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } } />
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
              checked={ this.props.requestForPostJob.commitment === 'per_week_10' } 
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } }
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
              checked={ this.props.requestForPostJob.commitment === 'per_week_up_to_30' } 
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } }
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
              checked={ this.props.requestForPostJob.commitment === 'per_week_more_than_30' } 
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'commitment') } }
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

export default TalentCommitment;
