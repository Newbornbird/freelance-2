import React, { Component } from 'react';

class LeftCol extends Component {
  render() {
    return (
      <div className="right-col">
        {/* <!-- Nav tabs --> */}
        <ul className="nav nav-pills nav-stacked my-sidebar" role="tablist">
          <li role="presentation" className="">
            <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab" aria-expanded="false">
              <span className="icon icon-overview" />
              Overview
            </a>
          </li>
          <li role="presentation">
            <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">
              <span className="icon icon-message" />
              Messages
            </a>
          </li>
          <li role="presentation">
            <a href="#my-jobs" aria-controls="my-jobs" role="tab" data-toggle="tab">
              <span className="icon icon-jobs" />
              My Jobs
            </a>
          </li>
          <li role="presentation" className="">
            <a href="#my-promo" aria-controls="my-promo" role="tab" data-toggle="tab" aria-expanded="false">
              <span className="icon icon-promo" />
              My Promo
            </a>
          </li>
          <li role="presentation" className="active">
            <a href="#skills" aria-controls="skills" role="tab" data-toggle="tab" aria-expanded="true">
              <span className="icon icon-skills" />
              My Skills
            </a>
          </li>
          <li role="presentation" className="">
            <a href="#saved" aria-controls="saved" role="tab" data-toggle="tab" aria-expanded="false">
              <span className="icon icon-saved" />
              Saved
            </a>
          </li>
          <li role="presentation">
            <a href="#media" aria-controls="media" role="tab" data-toggle="tab">
              <span className="icon icon-media" />
              My Media
            </a>
          </li>
          <li role="presentation">
            <a href="#accounts" aria-controls="accounts" role="tab" data-toggle="tab">
              <span className="icon icon-accounts" />
              Accounts
            </a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
              <span className="icon icon-profile" />
              Profile
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftCol;
