import React, { Component } from 'react';

class JobPayment extends Component {
  render() {
    return (
      <div className="form-block-section">
        <div className="form-block-header">
          <div className="form-block-title">
            Job Payment
          </div>
        </div>
        <div className="radio-block">
          <div className="radio">
            <input 
              type="checkbox" 
              name="fixed_price" 
              id="fixed-payment" 
              value="fixed-payment" 
              checked={ this.props.requestForPostJob.payment === 'fixed_price' }
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'payment') } } />
            <label htmlFor="fixed-payment">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Fixed Price</span>
            </label>
          </div>
          <div className="radio">
            <input 
              type="checkbox" 
              name="hourly" 
              id="hourly-payment" 
              value="hourly-payment" 
              checked={ this.props.requestForPostJob.payment === 'hourly' }
              onChange={ (event) => { this.props.CHANGE_CHECKBOX_FOR_POSTJOB(event, 'payment') } } />
            <label htmlFor="hourly-payment">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="radio-text">Hourly</span>
              <span className="job-payment-input-wrapper">
                <input 
                  type="text"
                  name='hourly_price' 
                  value={ this.props.requestForPostJob['hourly_price'] } 
                  className="form-control"  
                  disabled={ this.props.requestForPostJob.payment === 'fixed_price' } 
                  onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
                  />
                $ / hour
              </span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default JobPayment;