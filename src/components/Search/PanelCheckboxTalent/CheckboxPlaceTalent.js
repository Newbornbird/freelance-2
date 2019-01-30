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
              onClick={ (event) => {
                this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
              } }>

            </input>
            <label for="checkbox-8.1">
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
              onClick={ (event) => {
                this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
              } }>
            </input>
            <label for="checkbox-8.2">
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