import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Finish extends Component {
  render() {
    const { consent, toggleConsent } = this.props;
    return (
      <div className="form-block-section finish-block col-100">
        <div className="form-block-header">
          <div className="form-block-title">Finish</div>
        </div>
        <div className="checkbox-block">
          <span style={consent ? { display: 'none' } : { color: 'red' }}>
            You need to agree with terms of use to continue
          </span>
          <br />
          <input type="checkbox" id="terms-agree" checked={consent} onChange={toggleConsent} />
          <label htmlFor="terms-agree">
            <span className="checkbox-circle">
              <span className="icon icon-check-mark" />
            </span>
            <span className="checkbox-text">I agree for the terms of use</span>
          </label>
        </div>
      </div>
    );
  }
}

Finish.propTypes = {
  consent: PropTypes.bool,
  toggleConsent: PropTypes.func,
};

export default Finish;
