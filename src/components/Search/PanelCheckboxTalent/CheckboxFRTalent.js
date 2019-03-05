import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxFRTalent extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'rate',
    };
  }

  render() {
    const { changeCheckboxDataSingle, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Freelance Rate:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              name="i_5"
              type="checkbox"
              id="checkbox-4.1"
              checked={inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey] === 'i_5' : false}
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-4.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Best(5)</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="i_5_4"
              type="checkbox"
              id="checkbox-4.2"
              checked={inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey] === 'i_5_4' : false}
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-4.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">5-4.8</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="i_4"
              type="checkbox"
              id="checkbox-4.3"
              checked={inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey] === 'i_4' : false}
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-4.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">4.8-4.5</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="l_4"
              type="checkbox"
              id="checkbox-4.4"
              checked={inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey] === 'l_4' : false}
              onChange={event => {
                changeCheckboxDataSingle(this.state.queryParamKey, inputData, event);
              }}
            />
            <label htmlFor="checkbox-4.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">4.5</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxFRTalent.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataSingle: PropTypes.func,
};

export default CheckboxFRTalent;
