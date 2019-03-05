import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckboxExp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParamKey: 'exp',
    };
  }

  render() {
    const { changeCheckboxDataArr, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Experience:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              onChange={event => {
                this.props.changeCheckboxDataArr(this.state.queryParamKey, this.props.inputData, event);
              }}
              name="intern"
              type="checkbox"
              id="checkbox-1.1"
              checked={
                this.props.inputData[this.state.queryParamKey]
                  ? this.props.inputData[this.state.queryParamKey].indexOf('intern') >= 0
                  : false
              }
            />
            <label htmlFor="checkbox-1.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Intern</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
              name="junior"
              type="checkbox"
              id="checkbox-1.2"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('junior') >= 0 : false
              }
            />
            <label htmlFor="checkbox-1.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Junior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
              name="senior"
              type="checkbox"
              id="checkbox-1.3"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('senior') >= 0 : false
              }
            />
            <label htmlFor="checkbox-1.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Senior</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              onChange={event => {
                changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
              }}
              name="expert"
              type="checkbox"
              id="checkbox-1.4"
              checked={
                inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].indexOf('expert') >= 0 : false
              }
            />
            <label htmlFor="checkbox-1.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Expert</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

CheckboxExp.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataArr: PropTypes.func,
};

export default CheckboxExp;
