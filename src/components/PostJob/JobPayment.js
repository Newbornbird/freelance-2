import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JobPayment extends Component {
  render() {
    const { requestForPostJob, changeStrInpForPostJob, changeCheckboxForPostJob } = this.props;
    return (
      <div className="form-block-section">
        <div className="form-block-header">
          <div className="form-block-title">Job Payment</div>
        </div>
        <div className="radio-block">
          <div className="radio">
            <input
              type="checkbox"
              name="fixed_price"
              id="fixed-payment"
              value="fixed-payment"
              checked={requestForPostJob.payment === 'fixed_price'}
              onChange={event => {
                changeCheckboxForPostJob(event, 'payment');
              }}
            />
            <label htmlFor="fixed-payment">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark" />
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
              checked={requestForPostJob.payment === 'hourly'}
              onChange={event => {
                changeCheckboxForPostJob(event, 'payment');
              }}
            />
            <label htmlFor="hourly-payment">
              <span className="checkbox-circle">
                <span className="icon icon-check-mark" />
              </span>
              <span className="radio-text">Hourly</span>
              <span className="job-payment-input-wrapper">
                <input
                  type="text"
                  name="hourly_price"
                  value={requestForPostJob.hourly_price}
                  className="form-control"
                  disabled={requestForPostJob.payment === 'fixed_price'}
                  onChange={event => {
                    changeStrInpForPostJob(event);
                  }}
                />
                $ / hour
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

JobPayment.propTypes = {
  requestForPostJob: PropTypes.object,
  changeStrInpForPostJob: PropTypes.func,
  changeCheckboxForPostJob: PropTypes.func,
};

export default JobPayment;
