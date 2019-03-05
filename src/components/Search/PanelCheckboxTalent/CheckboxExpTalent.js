import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxExpTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParamKey: 'exp'
    }
  }

  render() {
    let { changeCheckboxDataArr,  inputData } = this.props;
    return (
      <div className="filter-block">   
        <div className="filter-title">
          Experience:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              checked = { inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('intern') >= 0 ? true : false) : false } 
              onChange = { (event) => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event)
              }} 
              name="intern" 
              type="checkbox" 
              id="checkbox-1.1"
              >
            </input>
            <label htmlFor="checkbox-1.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Intern</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('junior') >= 0 ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event) 
              }}
              name="junior" 
              type="checkbox" 
              id="checkbox-1.2"></input>
            <label htmlFor="checkbox-1.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Junior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('senior') >= 0 ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event) 
              }}
              name="senior" 
              type="checkbox" 
              id="checkbox-1.3">
            </input>
            <label htmlFor="checkbox-1.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Senior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              checked={ inputData[this.state.queryParamKey] ? 
                          (inputData[this.state.queryParamKey].indexOf('expert') >= 0 ? true : false) : false }
              onChange = { (event) => { 
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event) 
              }}
              name="expert" 
              type="checkbox" 
              id="checkbox-1.4">
            </input>
            <label htmlFor="checkbox-1.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Expert</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

CheckboxExpTalent.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataArr: PropTypes.func,
}

export default CheckboxExpTalent;