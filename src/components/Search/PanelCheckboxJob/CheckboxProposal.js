import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxProposal extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'prop',
    };
  }

  render() {
    const { changeCheckboxDataSingle, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Proposals:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('i0_5') >= 0 : false
              }
              name="i0_5"
              type="checkbox"
              id="checkbox-9.1"
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-9.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">0-5</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('i5_10') >= 0 : false
              }
              name="i5_10"
              type="checkbox"
              id="checkbox-9.2"
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-9.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">5-10</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('i10_20') >= 0 : false
              }
              name="i10_20"
              type="checkbox"
              id="checkbox-9.3"
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-9.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">10-20</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('m_20') >= 0 : false
              }
              name="m_20"
              type="checkbox"
              id="checkbox-9.4"
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-9.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">>20</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={
                inputData[this.state.queryParamKey]
                  ? inputData[this.state.queryParamKey].indexOf('undefined') >= 0
                  : false
              }
              name="undefined"
              type="checkbox"
              id="checkbox-9.5"
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-9.5">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">None</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxProposal.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataSingle: PropTypes.func,
};

export default CheckboxProposal;
