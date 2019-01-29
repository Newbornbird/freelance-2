import React from 'react';
import SortNav from './SortNav';

const Panel = (props) => (
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
      <SortNav />
    </nav>
  </div>
)

export default Panel;