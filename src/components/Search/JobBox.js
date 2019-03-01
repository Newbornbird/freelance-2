import React, { Component } from 'react';
import * as moment from 'moment';



class JobBox extends Component {

  render() {
    return (
      <div className="job-box-block" onClick={ () => { this.props.makeModalActive(this.props.id) } }>
        <div 
          className={ this.props.activeModal === this.props.id ? 
            "panel panel-default job-box left-details open" : 
            "panel panel-default job-box left-details"}>
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-title">
              <div className="post-date">
                { moment(this.props.created_at).fromNow() }
              </div> 
              <div className="job-title">
                { this.props.title }
              </div>
            </div>
            <div className="panel panel-default">
              <div className="flexbox justify-space-between">
                <div className="job-box-photo-block">
                  <div 
                    className="job-box-photo bg-cover circul-shape" 
                    style={{ 'backgroundImage': 'url' + '(' + this.props.user.image.url + ')' }}>
                    <i className="notif"></i>
                  </div>
                </div>
                <div className="award">
                  <span className="icon icon-badge-flat"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
                </div>
                <div className="job-box-rate">
                  <span className="icon icon-star-full"></span>
                  <span className="rate-result">{ this.props.user.total_rate ? this.props.user.total_rate : 'N/A' }</span>
                </div>
              </div>
              <div className="blue-color">{ this.props.user.full_name }</div>
            </div>
          </div>
          <div className="job-box-body">
            <div className="job-box-tips flexbox justify-space-between">
              <div className="tip">
                  <span className="icon icon-location"></span>
                  <span className="text">{ this.props.user.country }</span>
                </div>
                <div className="tip">
                  <span className="icon icon-clock-1"></span>
                  <span className="text">
                    { (this.props.commitment === 'per_week_more_than_30') ? '>30h':
                      (this.props.commitment === 'per_week_up_to_30') ? '<30h' :
                      (this.props.commitment === 'per_week_10') ? '10h' : 'N/A'
                    }

                  </span>
                </div>
              <div className="tip">
                  <span className="icon icon-award"></span>
                  <span className="text">{ this.props.level }</span>
                </div>
                <div className="tip">
                  <span className="icon icon-timer"></span>
                  <span className="text">{ (this.props.period ? this.props.period : '') + 
                    (this.props.period_type ? this.props.period_type.toUpperCase()[0] : 'N/A') }
                  </span>
                </div>
                
                <div className="tip">
                  <span className="icon icon-clock-1"></span>
                  <span className="text">{ this.props.time_type ? this.props.time_type : 'N/A' }</span>
                </div>
            </div>
            <div className="job-box-deskr" style={{ 'height': '100px' }}>
              <div className="text">
                { this.props.description.length > 172 ? this.props.description.substring(0,173) + '...' : this.props.description }
              </div>
              <div className="skill-tags-block clearfix">
                {/* <div className="skill-tag">HTML5</div> */}
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between">
            <div className="additional-info blue-color">{this.props.promotion_title}
              <br/>
              <span style={{ 'fontSize': '13px', 'color': '#4b5053' }}>{ this.props.promotion_description }</span>
            </div>
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        <div className="caret-block" >
          <span className="caret-top"></span>
        </div>
        <div className="panel panel-default job-box-details" style={this.props.styleForModal}>
          <button 
            className="btn btn-bg-transparent close-btn icon-btn"
            onClick={ (event) => { 
              this.props.closeActiveModal();
              event.stopPropagation(); } }>
            <span className="glyphicon glyphicon-remove">
            </span>
          </button>
          <div className="flexbox justify-space-between">
            <div className="about-block-wrapper">
                <div className="photo-block">
                  <div className="flexbox justify-space-between">
                    <div className="award">
                      <span className="icon icon-badge-solid"></span>
                    </div>
                    <div className="job-box-photo bg-cover circul-shape" style={{ 'backgroundImage': 'url' + '(' + this.props.user.image.url + ')' }} >
                    </div>
                    <div className="job-box-rate">
                      <span className="icon icon-star-full"></span>
                      <span className="rate-result">{ this.props.user.total_rate ? this.props.user.total_rate : 'N/A' }</span>
                    </div>
                  </div>
                  <div className="job-box-title">
                    <div className="job-box-name blue-color">{ this.props.user.full_name }</div>
                  </div>
                </div>
              
              <div className="info-block">
                <div className="title">
                  $0,00 Total Spent 
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  { this.props.user.skill_test_send + ' Skill test / ' + this.props.user.total_jobs + ' jobs' }
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Languages 
                </div>
                <div className="text">
                  {/* { this.props.user.languages.length ? 
                    this.props.user.languages.map( ( lang ) => { return lang } ) : '' } */}
                  {/* English: <span>fluent</span>
                  Russian: <span>native</span> */}
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Place of Work 
                </div>
                <div className="text">
                  { this.props.user.place_to_work ?  this.props.user.place_to_work : ''}
                </div>
              </div>
              <div className="info-block info-block--btns">
                {/* <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard"></span>
                    <span className="btn-text">Send a bid</span>
                  </div>
                </button> */}
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output"></span>
                    <span className="btn-text">More Info</span>
                  </div>
                </button>
                {/* <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-comment"></span>
                    <span className="btn-text">Message</span>
                  </div>
                </button>	 */}
              </div>
            </div>
            <div className="job-details-right">
              <div className="job-details-right-header flexbox">
                <div className="likes flexbox">
                  <span className="icon icon-shape"></span>
                    
                  <ul className="likes-list list-unstyled">
                    No recommendation yet
                    {/* <li className="like-item like-item--1 bg-cover circul-shape"></li> */}
                    {/* <li className="like-item like-item--2 bg-cover circul-shape"></li>
                    <li className="like-item like-item--3 bg-cover circul-shape"></li>
                    <li className="like-item like-item--1 bg-cover circul-shape"></li> */}
                  </ul>
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-tag"></span>
                    <span className="stat-title blue-color">{ this.props.payment ? this.props.payment.toUpperCase() : 'N/A' }</span>
                    <span className="stat-info">{ this.props.hourly_price ? this.props.hourly_price + '$/hour' : '' }</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-comments"></span>
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-accounts"></span>
                    <span className="stat-title blue-color">BUDGET</span>
                    <span className="stat-info">{ this.props.price + '$' }</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-clock-1"></span>
                    <span className="stat-title blue-color">COMPLETE</span>
                    <span className="stat-info">{ 
                      (this.props.period ? this.props.period : '') + 
                        ' ' + 
                      (this.props.period_type ? this.props.period_type.toUpperCase()[0] : 'N/A') }</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                <div className="job-details-descr" >
                  <div className="job-title">
                    { this.props.title }
                  </div>
                  <div className="job-descr-text">
                    <p>{ this.props.description }</p>
                  </div>
                </div>
              </div>
              <div className="other-details" style={{  }}>
                <div className="panel flexbox justify-space-between panel-blue">
                  <div className="other-title">{this.props.promotion_title}
                    <br/>
                    <span style={{ 'fontSize': '13px', 'color': '#4b5053', 'fontWeight': 'normal' }}>
                      { this.props.promotion_description }
                    </span>    
                  </div>
                  <span className="btn btn-blue-border btn-bold">Free</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default JobBox;