import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JobPrice extends Component {
  render() {
    const { requestForPostJob, changeStrInpForPostJob } = this.props;
    return (
      <div className="form-block-section">
        <div className="form-block-header">
          <div className="form-block-title">Job Price</div>
        </div>
        <div className="job-price-input-wrapper">
          <input
            name="price"
            className="form-control"
            type="text"
            value={requestForPostJob.price}
            onChange={event => {
              changeStrInpForPostJob(event);
            }}
            style={requestForPostJob.price ? {} : { backgroundColor: '#fff1f5', border: '2px solid #cb001f' }}
          />{' '}
          $ $<p className="small">Enter here how much you think it should cost you..</p>
        </div>
      </div>
    );
  }
}

JobPrice.propTypes = {
  requestForPostJob: PropTypes.object,
  changeStrInpForPostJob: PropTypes.func,
};

export default JobPrice;
