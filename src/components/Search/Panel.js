import React, { Component } from 'react';
import SortNav from './SortNav';

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
          <SortNav 
            meta = { this.props.meta }
            // request={ this.props.request }
            // GET_MORE_JOBS = { this.props.GET_MORE_JOBS }
            SORT = { this.props.SORT }
            inputData = { this.props.inputData }
            // searchTalentIsActive = { this.props.searchTalentIsActive }
          />
        </nav>
      </div>
    )
  }
}  


export default Panel;