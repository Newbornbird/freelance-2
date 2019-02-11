import React, { Component } from 'react';

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
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('i_100') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_SINGLE(this.state.queryParamKey, this.props.inputData, event) 
              }}>
              </input>
            <label for="checkbox-2.1">
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
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('m_95') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_SINGLE(this.state.queryParamKey, this.props.inputData, event) 
              }}>
            </input>
            <label for="checkbox-2.2">
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
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('i_85_95') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_SINGLE(this.state.queryParamKey, this.props.inputData, event) 
              }}>
            </input>
            <label for="checkbox-2.3">
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
              checked={ this.props.inputData[this.state.queryParamKey] ? 
                          (this.props.inputData[this.state.queryParamKey].indexOf('l_85') >= 0 ? true : false) : false }
              onClick = { (event) => { 
                this.props.CHANGE_CHECKBOX_DATA_SINGLE(this.state.queryParamKey, this.props.inputData, event) 
              }}>
            </input>
            <label for="checkbox-2.4">
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

export default CheckboxJDSTalent;