import React, { Component } from 'react';

class CheckboxPayment extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'payment',
    }
  }

  render() {
    return (
      <div className="filter-block">
      <div className="filter-title">
        Payment:
      </div>
      <div className="checkbox-list-block clearfix">
        <div className="checkbox-block">
          <input 
            name="fixed_price" 
            type="checkbox" 
            id="checkbox-7.1"
            onClick={ (event) => {
              this.props.SEND_JOB_REQUEST_ARR(this.props.request, this.props.checkboxDataJob, this.state.queryParamKey, event);
            } }>
          </input>
          <label for="checkbox-7.1">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark"></span>
            </span>
            <span className="checkbox-text">Fixed price</span>
          </label>
        </div>
        <div className="checkbox-block">
        <input 
            name="hourly" 
            type="checkbox" 
            id="checkbox-7.2"
            onClick={ (event) => {
              this.props.SEND_JOB_REQUEST_ARR(this.props.request, this.props.checkboxDataJob, this.state.queryParamKey, event);
            } }>
          </input>
          <label for="checkbox-7.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark"></span>
            </span>
            <span className="checkbox-text">Hourly</span>
          </label>
        </div>
      </div>
      <div className="filter-inputs flexbox justify-space-between"  >
        <input 
          name="p_from" 
          type="text" 
          value={ this.props.checkboxDataJob['p_from'] } 
          className="form-control"
          onChange={ (event) => { this.props.SAVE_CHECKBOX_DATA_JOB(event.target.name, event.target.value) } }>

        </input> 
        <span>to</span>
        <input 
          name="p_to" 
          type="text" 
          value={ this.props.checkboxDataJob['p_to'] } 
          className="form-control"
          onChange={ (event) => { this.props.SAVE_CHECKBOX_DATA_JOB(event.target.name, event.target.value) } }>
        </input>
      </div>
      <button 
        onClick={ ()=> { 
          this.props.SEND_JOB_REQUEST_PAYMENT(this.props.request, this.props.checkboxDataJob) } }  
        style={{"width": "100%"}} className="btn btn-primary">
        Find
      </button>
    </div>
    )
  }
}

export default CheckboxPayment;