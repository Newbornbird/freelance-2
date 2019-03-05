import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class JobTalentSwitch extends Component {
  render() {
    const { switchSearch } = this.props;
    return (
      <div className="panel panel-default panel-gray job-boxes-filter">
        <div className="search-filter radio-block flexbox justify-space-center">
          <div className="radio">
            <input type="radio" name="job-boxes-filter" id="jobs-filter-2" value="jobs-filter" />
            <label htmlFor="jobs-filter-2">
              <span className="radio-text">
                <Link to="/board/search/job">Jobs</Link>
              </span>
            </label>
          </div>
          <button
            type="button"
            className={
              window.location.pathname === '/board/search/job'
                ? 'btn radio-switcher clearfix left'
                : 'btn radio-switcher clearfix right'
            }
            onClick={() => {
              switchSearch(window.location.pathname);
            }}
          >
            <div className="circul-shape">
              <span className="icon icon-check-mark" />
            </div>
          </button>
          <div className="radio">
            <input type="radio" name="job-boxes-filter" id="talents-filter-2" value="talents-filter" />
            <label htmlFor="talents-filter-2">
              <span className="radio-text">
                <Link to="/board/search/talent">Talents</Link>
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

JobTalentSwitch.propTypes = {
  pathName: PropTypes.string,
  switchSearch: PropTypes.func,
};

export default JobTalentSwitch;
