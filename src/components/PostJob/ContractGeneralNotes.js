import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContractGeneralNotes extends Component {
  render() {
    let { requestForPostJob, changeStrInpForPostJob } = this.props;
    return (
      <div className="form-block-section col-100">
        <div className="form-block-header">
          <div className="form-block-title">
            Contract General Notes
          </div>
        </div>
        <div>
          <textarea 
            className="form-control comments-area" 
            name='contract_general_notes'
            placeholder="Enter here Comments for the contract"
            value={ requestForPostJob.contract_general_notes }
            onChange={ (event) => { changeStrInpForPostJob(event) } }>
          </textarea>
        </div>
      </div>
    )
  }
}

ContractGeneralNotes.propTypes = {
  requestForPostJob: PropTypes.object,
  changeStrInpForPostJob: PropTypes.func,
}

export default ContractGeneralNotes;
