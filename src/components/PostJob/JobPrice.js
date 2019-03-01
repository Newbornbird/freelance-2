import React, { Component } from 'react';

class JobPrice extends Component {
  render() {
    return (
      <div className="form-block-section">
        <div className="form-block-header">
          <div className="form-block-title">
            Job Price
          </div>
        </div>
        <div className="job-price-input-wrapper">
          <input
            name='price' 
            className="form-control" 
            type="text" 
            value={ this.props.requestForPostJob.price } 
            onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
            style={ this.props.requestForPostJob.price ? {  } : { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }}
            /> $
          <p className="small">Enter here how much you think it should cost you..</p>
        </div>
      </div>
    )
  }
}

export default JobPrice;

