import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SortNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      activeCheckbox: 'Revelance',
      queryParamKey: 'sort'
    }
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeFilter = (event) => {
    this.setState({ isOpen: false, activeCheckbox: event.target.id  });
  }

  render() {
    let { meta, sort,  inputData } = this.props;
    return (
      <div className="sort-nav" key='job'>
        <span className="sort-nav-title">Sort By</span>
        <button onClick = { this.openCloseFilter } className="btn button">
          <div className= { this.state.isOpen ? "my-select-box open" : "my-select-box" }>
            <span className="my-select-result">
              <span className="text">{ this.state.activeCheckbox }</span> 
              <span className="icon icon-down-arrow"></span>
            </span>
            <div className="my-select-options">
              <div className="caret-block">
                <span className="caret-top"></span>
              </div>
              <div className="radio-block">
                <div className="radio">
                  <input 
                    type="radio" 
                    name="jobs-sort-option" 
                    id="Newest" 
                    value="newest" 
                    checked=""
                    onChange={ (event) => { 
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event); 
                    } }>
                  </input>
                  <label htmlFor="Newest">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Newest</span>
                  </label>
                </div>
                <div className="radio">
                  <input 
                    type="radio" 
                    name="jobs-sort-option" 
                    id="Highest budget" 
                    value="budget"
                    onChange={ (event) => { 
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event); 
                    } }>
                  </input>
                  <label htmlFor="Highest budget">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Highest budget</span>
                  </label>
                </div>
                <div className="radio">
                  <input 
                    type="radio" 
                    name="jobs-sort-option" 
                    id="Relevance" 
                    value="relevance"
                    onChange={ (event) => { 
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event); 
                    } }>
                  </input>
                  <label htmlFor="Relevance">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Relevance</span>
                  </label>
                </div>
                <div className="radio">
                  <input 
                    type="radio" 
                    name="jobs-sort-option" 
                    id="Long term" 
                    value="longterm"
                    onChange={ (event) => { 
                      sort(inputData, this.state.queryParamKey, event);
                      this.closeFilter(event); 
                    } }>
                  </input>
                  <label htmlFor="Long term">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Long term</span>
                  </label>
                </div>
              </div>	
            </div>
          </div>
        </button>
        <span className="sort-result">
          Result: 
        <span className="sort-result-numb">{ meta.total_count }</span>
        </span>
      </div>
    )
  }
}

SortNav.propTypes = {
  meta: PropTypes.object,
  sort: PropTypes.func,
  inputData: PropTypes.object,
}

export default SortNav;