import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxPlaceTalent extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'place',
    };
  }

  render() {
    const { changeCheckboxDataArr, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Place of work:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              name="online"
              type="checkbox"
              id="checkbox-8.1"
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('online') >= 0 : false
              }
            />
            <label htmlFor="checkbox-8.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">On-line</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              name="onsite"
              type="checkbox"
              id="checkbox-8.2"
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('onsite') >= 0 : false
              }
            />
            <label htmlFor="checkbox-8.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">On-site</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxPlaceTalent.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataArr: PropTypes.func,
};

export default CheckboxPlaceTalent;
