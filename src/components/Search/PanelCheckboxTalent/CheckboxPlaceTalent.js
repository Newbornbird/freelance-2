import React, { Component } from 'react';

class CheckboxPlaceTalent extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'place'
    }
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">
          Place of work:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              name="online" 
              type="checkbox" 
              id="checkbox-8.1"
              onChange={ (event) => {
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
              } }
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('online') >= 0 ? true : false) : false }>

            </input>
            <label htmlFor="checkbox-8.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">On-line</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="onsite"  
              type="checkbox" 
              id="checkbox-8.2"
              onChange={ (event) => {
                this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
              } }
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('onsite') >= 0 ? true : false) : false }>
            </input>
            <label htmlFor="checkbox-8.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">On-site</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxPlaceTalent;