import React, { Component } from 'react';

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

  changeCheckbox = (event) => {
    this.setState({ activeCheckbox: event.target.id });
    
  }

  render() {
    return (
      <div className="sort-nav">
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
                      this.changeCheckbox(event);
                      this.props.searchTalentIsActive ? 
                        this.props.SORT_TALENTS(this.props.request, this.state.queryParamKey, event) :
                        this.props.SORT_JOBS(this.props.request, this.state.queryParamKey, event)
                      } }>
                  </input>
                  <label for="Newest">
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
                      this.changeCheckbox(event);
                      this.props.searchTalentIsActive ? 
                        this.props.SORT_TALENTS(this.props.request, this.state.queryParamKey, event) :
                        this.props.SORT_JOBS(this.props.request, this.state.queryParamKey, event)
                      } }>
                  </input>
                  <label for="Highest budget">
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
                      this.changeCheckbox(event);
                      this.props.searchTalentIsActive ? 
                        this.props.SORT_TALENTS(this.props.request, this.state.queryParamKey, event) :
                        this.props.SORT_JOBS(this.props.request, this.state.queryParamKey, event)
                      } }>
                  </input>
                  <label for="Relevance">
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
                      this.changeCheckbox(event);
                      this.props.searchTalentIsActive ? 
                        this.props.SORT_TALENTS(this.props.request, this.state.queryParamKey, event) :
                        this.props.SORT_JOBS(this.props.request, this.state.queryParamKey, event)
                      } }>
                  </input>
                  <label for="Long term">
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
        <span className="sort-result-numb">{ this.props.meta.total_count }</span>
        </span>
      </div>
    )
  }
}

export default SortNav;