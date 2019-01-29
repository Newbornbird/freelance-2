import React, { Component } from 'react';

class SortNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="sort-nav">
        <span className="sort-nav-title">Sort By</span>
        <button onClick = { this.openCloseFilter } className="btn button">
          <div className= { this.state.isOpen ? "my-select-box open" : "my-select-box" }>
            <span className="my-select-result">
              <span className="text">Relevance</span> 
              <span className="icon icon-down-arrow"></span>
            </span>
            <div className="my-select-options">
              <div className="caret-block">
                <span className="caret-top"></span>
              </div>
              <div className="radio-block">
                <div className="radio">
                  <input type="radio" name="jobs-sort-option" id="jobs-sort-option-1" value="jobs-sort-option-1" checked=""></input>
                  <label for="jobs-sort-option-1">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Relevance</span>
                  </label>
                </div>
                <div className="radio">
                  <input type="radio" name="jobs-sort-option" id="jobs-sort-option-2" value="jobs-sort-option-2"></input>
                  <label for="jobs-sort-option-2">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Most saved</span>
                  </label>
                </div>
                <div className="radio">
                  <input type="radio" name="jobs-sort-option" id="jobs-sort-option-3" value="jobs-sort-option-3"></input>
                  <label for="jobs-sort-option-3">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Highest Score</span>
                  </label>
                </div>
                <div className="radio">
                  <input type="radio" name="jobs-sort-option" id="jobs-sort-option-4" value="jobs-sort-option-4"></input>
                  <label for="jobs-sort-option-4">
                    <span className="check-mark icon icon-check-mark"></span>
                    <span className="radio-text">Most Hired</span>
                  </label>
                </div>
              </div>	
            </div>
          </div>
        </button>
        <span className="sort-result">
          Result: 
          <span className="sort-result-numb">25</span>
        </span>
      </div>
    )
  }
}

export default SortNav;