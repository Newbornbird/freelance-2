import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxAvailabilityTalent extends Component {
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
              name="per_week_up_to_20"
              type="checkbox"
              id="checkbox-7.1"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_up_to_20') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-7.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&lt; 20 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="per_week_30"
              type="checkbox"
              id="checkbox-7.2"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_30') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-7.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text"> 30 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="per_week_more_than_30"
              type="checkbox"
              id="checkbox-7.3"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_more_than_30') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-7.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text"> 30 h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="per_week_full_time"
              type="checkbox"
              id="checkbox-7.4"
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('per_week_full_time') >= 0
                  : false
              }
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-7.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Full time</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxAvailabilityTalent.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataArr: PropTypes.func,
};

export default CheckboxAvailabilityTalent;
