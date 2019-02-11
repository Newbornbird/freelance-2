import React, { Component } from 'react';

class CheckboxAvailabilityTalent extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'avl'
    }
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">
          Availability:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input 
              name='per_week_up_to_20'  
              type="checkbox" 
              id="checkbox-7.1"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('per_week_up_to_20') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event) 
              }}>

            </input>
            <label for="checkbox-7.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">&lt; 20 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='per_week_30' 
              type="checkbox" 
              id="checkbox-7.2"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('per_week_30') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event) 
              }}>
            </input>
            <label for="checkbox-7.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text"> 30 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='per_week_more_than_30' 
              type="checkbox" id="checkbox-7.3"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('per_week_more_than_30') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event) 
              }}>
            </input>
            <label for="checkbox-7.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text"> 30 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='per_week_full_time' 
              type="checkbox" 
              id="checkbox-7.4"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('per_week_full_time') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event) 
              }}>
            </input>
            <label for="checkbox-7.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Full time</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxAvailabilityTalent;