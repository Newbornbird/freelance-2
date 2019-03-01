import React, { Component } from 'react';

class CheckboxPayment extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'payment',
      'p_to': '',
      'p_from': '',
      paymentFilterIsOpen: true
    }
  }

  changePaymentFilter = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
            checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('fixed_price') >= 0 ? true : false) : false }
            onChange={ (event) => {
              this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
            } }>
          </input>
          <label htmlFor="checkbox-7.1">
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
            checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('hourly') >= 0 ? true : false) : false }
            onChange={ (event) => {
              this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
            } }>
          </input>
          <label htmlFor="checkbox-7.2">
            <span className="filter-checkbox">
              <span className="icon icon-check-mark"></span>
            </span>
            <span className="checkbox-text">Hourly</span>
          </label>
        </div>
      </div>
      <div 
        className="filter-inputs flexbox justify-space-between" 
        style={ this.props.inputData['payment'] === 'fixed_price' ? {'display': 'none'} : {  } } >
        <input 
          name="p_from" 
          type="text" 
          value={ this.state['p_from'] } 
          className="form-control"
          onChange={ (event) => { this.changePaymentFilter(event) } }>

        </input> 
        <span>to</span>
        <input 
          name="p_to" 
          type="text" 
          value={ this.state['p_to'] } 
          className="form-control"
          onChange={ (event) => { this.changePaymentFilter(event) } }>
        </input>
      </div>
      <button 
        onClick={ ()=> { 
          this.props.CHANGE_INPUT_DATA_PAYMENT(this.state['p_from'], this.state['p_to'], this.props.inputData) 
        }}
        style={{"width": "100%"}} className="btn btn-primary">
        Find
      </button>
    </div>
    )
  }
}

export default CheckboxPayment;