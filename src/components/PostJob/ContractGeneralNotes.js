import React, { Component } from 'react';

class ContractGeneralNotes extends Component {
  render() {
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
            value={ this.props.requestForPostJob.contract_general_notes }
            onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }>
          </textarea>
        </div>
      </div>
    )
  }
}

export default ContractGeneralNotes;
