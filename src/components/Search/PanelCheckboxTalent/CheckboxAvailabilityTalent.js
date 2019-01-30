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
              name='per_week_10'  
              type="checkbox" 
              id="checkbox-7.1"
              onClick={ (event) => { 
                this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
              } }>

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
              name='per_week_up_to_30' 
              type="checkbox" 
              id="checkbox-7.2"
              onClick={ (event) => { 
                this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
              } }>
            </input>
            <label for="checkbox-7.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">&gt;  20 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='per_week_more_than_30' 
              type="checkbox" id="checkbox-7.3"
              onClick={ (event) => { 
                this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
              } }>
            </input>
            <label for="checkbox-7.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Full time</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='decide_later' 
              type="checkbox" 
              id="checkbox-7.4"
              onClick={ (event) => { 
                this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
              } }>
            </input>
            <label for="checkbox-7.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Undefined</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxAvailabilityTalent;