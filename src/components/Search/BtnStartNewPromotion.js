import React from 'react';

const BtnStartNewPromotion = props => (
  <div className="panel panel-default panel-btn">
    <a href={window.location.pathname}>
      <i className="icon icon-new" />
      <span> Start New Promotion </span>
    </a>
  </div>
);

export default BtnStartNewPromotion;
