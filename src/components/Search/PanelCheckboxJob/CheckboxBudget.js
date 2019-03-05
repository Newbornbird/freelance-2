import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxBudget extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      queryParamKey: 'bud'
    }
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let { changeCheckboxDataSingle, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">
          Languages:
        </div>
        <div className={ this.state.isOpen ? "filter-dropdown-block clearfix open" : "filter-dropdown-block clearfix" }>
          <button onClick={this.openCloseFilter} type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">Budget:</span>
              <span className="icon icon-down-arrow"></span>
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top"></span>
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                <div className="checkbox-block">
                  <input
                    checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('i0_100') >= 0 ? true : false) : false } 
                    name='i0_100' 
                    type="checkbox" 
                    id="checkbox-8.1"
                    onChange={ (event) => {  
                      changeCheckboxDataSingle(this.state.queryParamKey, inputData, event) } } >
                  </input>
                    <label htmlFor="checkbox-8.1">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">$0 - $100</span>
                    </label>
                </div>
                <div className="checkbox-block">
                  <input
                    checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('i100_300') >= 0 ? true : false) : false }  
                    name="i100_300" 
                    type="checkbox" 
                    id="checkbox-8.2"
                    onChange={ (event) => { 
                      changeCheckboxDataSingle(this.state.queryParamKey, inputData, event)
                    } }>
                  </input>
                    <label htmlFor="checkbox-8.2">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">$100 - $300</span>
                    </label>
                </div>
                <div className="checkbox-block">
                  <input
                    checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('i300_1000') >= 0 ? true : false) : false } 
                    name="i300_1000" 
                    type="checkbox" 
                    id="checkbox-8.3"
                    onChange={ (event) => {  
                      changeCheckboxDataSingle(this.state.queryParamKey, inputData, event)
                    } }>
                  </input>
                    <label htmlFor="checkbox-8.3">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">$300 - $1000</span>
                    </label>
                </div>
                <div className="checkbox-block">
                  <input
                    checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('more_1000') >= 0 ? true : false) : false } 
                    name="more_1000" 
                    type="checkbox" 
                    id="checkbox-8.4"
                    onChange={ (event) => {  
                      changeCheckboxDataSingle(this.state.queryParamKey, inputData, event)
                    } }>
                  </input>
                    <label htmlFor="checkbox-8.4">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">> $1000</span>
                    </label>
                </div> 
                <div className="checkbox-block">
                  <input
                    checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('undefined') >= 0 ? true : false) : false }  
                    name="undefined" 
                    type="checkbox" 
                    id="checkbox-8.5"
                    onChange={ (event) => { 
                      changeCheckboxDataSingle(this.state.queryParamKey, inputData, event)
                    } }>
                  </input>
                    <label htmlFor="checkbox-8.5">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Not defined (Empty)</span>
                    </label>
                </div>                                                           
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CheckboxBudget.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataSingle: PropTypes.func
}

export default CheckboxBudget;