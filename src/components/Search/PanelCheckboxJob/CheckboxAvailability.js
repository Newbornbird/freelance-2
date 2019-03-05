import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxAvailability extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'avl',
    };
  }

  render() {
    const { changeCheckboxDataArr, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Availability:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              name="per_week_10"
              type="checkbox"
              id="checkbox-6.1"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_10') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-6.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&lt; 20 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="per_week_up_to_30"
              type="checkbox"
              id="checkbox-6.2"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_up_to_30') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-6.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&gt; 20 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="per_week_more_than_30"
              type="checkbox"
              id="checkbox-6.3"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_more_than_30') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-6.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Full time</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="decide_later"
              type="checkbox"
              id="checkbox-6.4"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('decide_later') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-6.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Undefined</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxAvailability.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataArr: PropTypes.func,
};

export default CheckboxAvailability;
