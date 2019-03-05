import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortNavTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeCheckbox: 'Revelance',
      queryParamKey: 'sort',
    };
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeFilter = event => {
    this.setState({ isOpen: false, activeCheckbox: event.target.id });
  };

  render() {
    const { meta, sort, inputData } = this.props;
    return (
      <div className="sort-nav" key="talent">
        <span className="sort-nav-title">Sort By</span>
        <button onClick={this.openCloseFilter} className="btn button">
          <div className={this.state.isOpen ? 'my-select-box open' : 'my-select-box'}>
            <span className="my-select-result">
              <span className="text">{this.state.activeCheckbox}</span>
              <span className="icon icon-down-arrow" />
            </span>
            <div className="my-select-options">
              <div className="caret-block">
                <span className="caret-top" />
              </div>
              <div className="radio-block">
                <div className="radio">
                  <input
                    type="radio"
                    name="jobs-sort-option"
                    id="Revelance"
                    value="revelance"
                    checked=""
                    onChange={event => {
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event);
                    }}
                  />
                  <label htmlFor="Revelance">
                    <span className="check-mark icon icon-check-mark" />
                    <span className="radio-text">Revelance</span>
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="jobs-sort-option"
                    id="Most saved"
                    value="saved"
                    onChange={event => {
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event);
                    }}
                  />
                  <label htmlFor="Most saved">
                    <span className="check-mark icon icon-check-mark" />
                    <span className="radio-text">Most saved</span>
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="jobs-sort-option"
                    id="Highest score"
                    value="rate"
                    onChange={event => {
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event);
                    }}
                  />
                  <label htmlFor="Highest score">
                    <span className="check-mark icon icon-check-mark" />
                    <span className="radio-text">Highest score</span>
                  </label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    name="jobs-sort-option"
                    id="Most hired"
                    value="hired"
                    onChange={event => {
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event);
                    }}
                  />
                  <label htmlFor="Most hired">
                    <span className="check-mark icon icon-check-mark" />
                    <span className="radio-text">Most hired</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </button>
        <span className="sort-result">
          Result:
          <span className="sort-result-numb">{meta.total_count}</span>
        </span>
      </div>
    );
  }
}

SortNavTalent.propTypes = {
  meta: PropTypes.object,
  sort: PropTypes.func,
  inputData: PropTypes.object,
};

export default SortNavTalent;
