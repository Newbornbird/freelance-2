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
                this.props.SEND_JOB_REQUEST_ARR(this.props.request, this.props.checkboxDataJob, this.state.queryParamKey, event)} 
              } 
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
              onClick = { (event) => this.props.SEND_JOB_REQUEST_ARR(this.props.request, this.props.checkboxDataJob, this.state.queryParamKey, event) }
              name="junior" 
              type="checkbox" 
              id="checkbox-1.2"></input>
            <label for="checkbox-1.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Junior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              onClick = { (event) => this.props.SEND_JOB_REQUEST_ARR(this.props.request, this.props.checkboxDataJob, this.state.queryParamKey, event) } 
              name="senior" 
              type="checkbox" 
              id="checkbox-1.3">
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
              onClick = { (event) => this.props.SEND_JOB_REQUEST_ARR(this.props.request, this.props.checkboxDataJob, this.state.queryParamKey, event) }
              name="expert" 
              type="checkbox" 
              id="checkbox-1.4">
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