import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxJDSTalent extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'ds',
      activeCheckbox: {}
    }
  }

  changeCheckbox = (event) => {
    this.setState( { activeCheckbox: { [event.target.name]: event.target.checked } } );
  }

  render() {
    let { changeCheckboxDataSingle,  inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">
          Job Done Success:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input 
              name='i_100' 
              type="checkbox" 
              id="checkbox-2.1" 
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey] === 'i_100' ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event) 
              }}>
              </input>
            <label htmlFor="checkbox-2.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">100%</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='m_95' 
              type="checkbox" 
              id="checkbox-2.2" 
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey] === 'm_95' ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event) 
              }}>
            </input>
            <label htmlFor="checkbox-2.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">>95%</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='i_85_95' 
              type="checkbox" 
              id="checkbox-2.3" 
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey] === 'i_85_95' ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event) 
              }}>
            </input>
            <label htmlFor="checkbox-2.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">85-95%</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='l_85' 
              type="checkbox" 
              id="checkbox-2.4" 
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey] === 'l_85' ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event) 
              }}>
            </input>
            <label htmlFor="checkbox-2.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">85%</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

CheckboxJDSTalent.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataSingle: PropTypes.func,
}

export default CheckboxJDSTalent;
