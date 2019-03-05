import React, { Component } from 'react';

class CheckboxJobDelivery extends Component {
  constructor() {
    super();
    this.state = {
      groupName: 'job_delivery',
    };
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">Job Delivery:</div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-10.1" />
            <label htmlFor="checkbox-10.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Not defined</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input type="checkbox" id="checkbox-10.2" />
            <label htmlFor="checkbox-10.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark" />
              </span>
              <span className="checkbox-text">Less 1W</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckboxJobDelivery;
