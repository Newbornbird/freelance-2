import React, { Component } from 'react';

class Finish extends Component {
  render() {
    return (
      <div className="form-block-section finish-block col-100">
        <div className="form-block-header">
          <div className="form-block-title">
            Finish
          </div>
        </div>
        <div className="checkbox-block">
          <span style={ this.props.consent ? { 'display': 'none' } : { 'color': 'red' }}>
            You need to agree with terms of use to continue
          </span>
          <br/>
          <input 
            type="checkbox" 
            id="terms-agree" 
            checked={ this.props.consent }
            onChange={ this.props.toggleConsent }
            />
          <label htmlFor="terms-agree">
            <span className="checkbox-circle">
              <span className="icon icon-check-mark"></span>
            </span>
            <span className="checkbox-text">I agree for the terms of use</span>
          </label>
        </div>
      </div>
    )
  }
}

export default Finish;
