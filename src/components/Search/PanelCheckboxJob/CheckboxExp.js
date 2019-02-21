import React, { Component } from 'react';

class CheckboxExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParamKey: 'exp'
    }
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">
          Experience:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input 
              onClick = { (event) => {
                 this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
                // this.props.changeLocation(event, this.state.queryParamKey)
              } }
              name="intern" 
              type="checkbox" 
              id="checkbox-1.1"
              checked = { this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('intern') >= 0 ? true : false) : false }
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
              onClick = { ( event ) => {
                 this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
                // this.props.changeLocation(event, this.state.queryParamKey)
              } }
              name="junior" 
              type="checkbox" 
              id="checkbox-1.2"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('junior') >= 0 ? true : false) : false }
            >
            </input>
            <label for="checkbox-1.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Junior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              onClick = { ( event ) => {
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
                // this.props.changeLocation(event, this.state.queryParamKey)
              } }
              name="senior" 
              type="checkbox" 
              id="checkbox-1.3"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('senior') >= 0 ? true : false) : false }
            >
            </input>
            <label for="checkbox-1.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Senior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              onClick = { ( event ) => {
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
                // this.props.changeLocation(event, this.state.queryParamKey)
              } }
              name="expert" 
              type="checkbox" 
              id="checkbox-1.4"
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('expert') >= 0 ? true : false) : false }
            >
            </input>
            <label for="checkbox-1.4">
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

export default CheckboxExp;