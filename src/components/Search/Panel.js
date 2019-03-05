import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import SortNav from './SortNav';
import SortNavTalent from './SortNavTalent';

class Panel extends Component {
  render() {
    let { meta, sort, inputData } = this.props;
    return (
      <div className="panel panel-default panel-gray job-boxes-nav">
        <nav className="flexbox justify-space-between">
          <div className="filter-nav">
            <span className="filter-list-title">Jobs for me</span>
            <ul className="filter-list list-unstyled">
              <li className="blue-color">UI design</li>
              <li className="blue-color">CSS/HTML</li>
              <li className="blue-color">
                <span className="icon icon-plus-button"></span>
              </li>
            </ul>
          </div>
          <Switch>
            <Route 
              path="/board/search/talent" 
              render={ props => 
                <SortNavTalent 
                  meta = { meta } 
                  sort = { sort } 
                  inputData = { inputData } /> } />
            <Route 
              path="/board/search/job" 
              render={ props => 
                <SortNav 
                  meta = { meta } 
                  sort = { sort } 
                  inputData = { inputData } /> } />
            
          </Switch>
        </nav>
      </div>
    )
  }
}  

Panel.propTypes = {
  meta: PropTypes.object,
  sort: PropTypes.func,
  pathName: PropTypes.string,
  inputData: PropTypes.object,
}

export default Panel;