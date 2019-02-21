import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SortNav from './SortNav';
import SortNavTalent from './SortNavTalent';

class Panel extends Component {
  render() {
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
                  meta = { this.props.meta } 
                  SORT = { this.props.SORT } 
                  inputData = { this.props.inputData } /> } />
            <Route 
              path="/board/search/job" 
              render={ props => 
                <SortNav 
                  meta = { this.props.meta } 
                  SORT = { this.props.SORT } 
                  inputData = { this.props.inputData } /> } />
            
          </Switch>
          {/* <SortNav 
            meta = { this.props.meta }
            // request={ this.props.request }
            // GET_MORE_JOBS = { this.props.GET_MORE_JOBS }
            SORT = { this.props.SORT }
            inputData = { this.props.inputData }
            // searchTalentIsActive = { this.props.searchTalentIsActive } /> */}
          
        </nav>
      </div>
    )
  }
}  


export default Panel;