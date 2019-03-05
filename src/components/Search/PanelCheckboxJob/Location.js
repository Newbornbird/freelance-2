import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      queryParamKey: 'loc',
    };
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    this.props.getLocations();
  }

  render() {
    const { changeCheckboxDataArr, locations, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Location:</div>
        <div className={this.state.isOpen ? 'filter-dropdown-block clearfix open' : 'filter-dropdown-block clearfix'}>
          <button onClick={this.openCloseFilter} type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">
                {`Country(
                    ${
                      inputData[this.state.queryParamKey]
                        ? inputData[this.state.queryParamKey].split(',').length
                        : 'All'
                    }  
                )`}
              </span>
              <span className="icon icon-down-arrow" />
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top" />
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                {locations.map((location, index) => (
                  <div className="checkbox-block" key={`${index}a`}>
                    <input
                      name={location.name}
                      type="checkbox"
                      id={`checkbox-4.${index + 1}`}
                      onChange={event => {
                        changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
                      }}
                      checked={
                        inputData[this.state.queryParamKey]
                          ? inputData[this.state.queryParamKey].indexOf(location.name) >= 0
                          : false
                      }
                    />
                    <label htmlFor={`checkbox-4.${index + 1}`}>
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark" />
                      </span>
                      <span className="checkbox-text">{location.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Location.propTypes = {
  inputData: PropTypes.object,
  locations: PropTypes.array,
  changeCheckboxDataArr: PropTypes.func,
  getLocations: PropTypes.func,
};

export default Location;
