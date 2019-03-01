import React from 'react';

const BtnTellOthers = (props) => (
  <div className="panel panel-default panel-btn">
    <a href={ window.location.pathname }>
      <i className="icon icon-share"></i>
      <span> Share Your Project</span>
    </a>
  </div>
)

export default BtnTellOthers;