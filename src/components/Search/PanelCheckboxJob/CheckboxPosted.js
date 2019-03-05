import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxPosted extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'post',
    };
  }

  render() {
    const { changeCheckboxDataSingle, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Posted:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              name="i24"
              type="checkbox"
              id="checkbox-2.1"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('i24') >= 0 : false
              }
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-2.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">24h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="i1w"
              type="checkbox"
              id="checkbox-2.2"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('i1w') >= 0 : false
              }
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-2.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">1w</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="i3d"
              type="checkbox"
              id="checkbox-2.3"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('i3d') >= 0 : false
              }
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-2.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">3d </span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="m_1w"
              type="checkbox"
              id="checkbox-2.4"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('m_1w') >= 0 : false
              }
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-2.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">&gt; 1 W</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxPosted.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataSingle: PropTypes.func,
};

export default CheckboxPosted;
