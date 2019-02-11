import React, { Component } from 'react';

class JobTalentSwitch extends Component {

  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="panel panel-default panel-gray job-boxes-filter">
        <div className="search-filter radio-block flexbox justify-space-center">
          <div className="radio">
            <input type="radio" name="job-boxes-filter" id="jobs-filter-2" value="jobs-filter" checked=""/>
            <label htmlFor="jobs-filter-2">
              <span className="radio-text">Jobs</span>
            </label>
          </div>
          <button 
            type="button" 
            className = {(window.location.pathname === '/board/search/job' ) ? 'btn radio-switcher clearfix left' : 'btn radio-switcher clearfix right'}
            onClick = { () => {
              this.props.SWITCH_SEARCH(window.location.pathname)}
            }>
            <div className="circul-shape">
              <span className="icon icon-check-mark"></span>
            </div>
          </button>
          <div className="radio">
            <input type="radio" name="job-boxes-filter" id="talents-filter-2" value="talents-filter"/>
            <label htmlFor="talents-filter-2">
              <span className="radio-text">Talents</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default JobTalentSwitch;