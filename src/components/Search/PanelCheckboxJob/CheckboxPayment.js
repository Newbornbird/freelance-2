import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxPayment extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'payment',
      p_to: '',
      p_from: '',
      paymentFilterIsOpen: true,
    };
  }

  changePaymentFilter = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { changeCheckboxDataArr, changeInputDataPayment, inputData } = this.props;
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
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('fixed_price') >= 0
                    ? true
                    : false
                  : false
              }
            onChange={ (event) => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
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
            checked={ inputData[this.state.queryParamKey] ? 
                  ? inputData[this.state.queryParamKey].indexOf('hourly') >= 0
                    ? true
                    : false
                  : false
              }
              onChange={event => {
              changeCheckboxDataArr(this.state.queryParamKey, inputData, event)
              }}
            />
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
          style={inputData['payment'] === 'fixed_price' ? { display: 'none' } : {}}
        >
        <input 
          name="p_from" 
          type="text" 
            value={this.state['p_from']}
            className="form-control"
            onChange={event => {
              this.changePaymentFilter(event);
            }}
          />
          <span>to</span>
        <input 
          name="p_to" 
            type="text"
            value={this.state['p_to']}
            className="form-control"
            onChange={event => {
              this.changePaymentFilter(event);
            }}
          />
      </div>
      <button 
        onClick={ ()=> { 
          changeInputDataPayment(this.state.p_from, this.state.p_to, inputData) 
        }}
          style={{ width: '100%' }}
          className="btn btn-primary"
        >
        Find
      </button>
    </div>
    );
  }
}

CheckboxPayment.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataArr: PropTypes.func,
  changeInputDataPayment: PropTypes.func,
};

export default CheckboxPayment;
