import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';



class JobBox extends Component {

  render() {
    let { closeActiveModal, makeModalActive, activeModal, styleForModal, commitment,  
      created_at,  description,  hourly_price,  id, level,  payment,  period, period_type, price, 
      promotion_description, promotion_title,  time_type, title, user } = this.props;
    return (
      <div className="job-box-block" onClick={ () => { makeModalActive(id) } }>
        <div 
          className={ activeModal === id ? 
            "panel panel-default job-box left-details open" : 
            "panel panel-default job-box left-details"}>
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-title">
              <div className="post-date">
                { moment(created_at).fromNow() }
              </div> 
              <div className="job-title">
                { title }
              </div>
            </div>
            <div className="panel panel-default">
              <div className="flexbox justify-space-between">
                <div className="job-box-photo-block">
                  <div 
                    className="job-box-photo bg-cover circul-shape" 
                    style={{ 'backgroundImage': `url( ${user.image.url} )` }}>
                    <i className="notif"></i>
                  </div>
                </div>
                <div className="award">
                  <span className="icon icon-badge-flat"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
                </div>
                <div className="job-box-rate">
                  <span className="icon icon-star-full"></span>
                  <span className="rate-result">{ user.total_rate ? user.total_rate : 'N/A' }</span>
                </div>
              </div>
              <div className="blue-color">{ user.full_name }</div>
            </div>
          </div>
          <div className="job-box-body">
            <div className="job-box-tips flexbox justify-space-between">
              <div className="tip">
                  <span className="icon icon-location"></span>
                  <span className="text">{ user.country }</span>
                </div>
                <div className="tip">
                  <span className="icon icon-clock-1"></span>
                  <span className="text">
                    { (commitment === 'per_week_more_than_30') ? '>30h':
                      (commitment === 'per_week_up_to_30') ? '<30h' :
                      (commitment === 'per_week_10') ? '10h' : 'N/A'
                    }

                  </span>
                </div>
              <div className="tip">
                  <span className="icon icon-award"></span>
                  <span className="text">{ level }</span>
                </div>
                <div className="tip">
                  <span className="icon icon-timer"></span>
                  <span className="text">{ (period ? period : '') + 
                    (period_type ? period_type.toUpperCase()[0] : 'N/A') }
                  </span>
                </div>
                
                <div className="tip">
                  <span className="icon icon-clock-1"></span>
                  <span className="text">{ time_type ? time_type : 'N/A' }</span>
                </div>
            </div>
            <div className="job-box-deskr" style={{ 'height': '100px' }}>
              <div className="text">
                { description.length > 172 ? description.substring(0,173) + '...' : description }
              </div>
              <div className="skill-tags-block clearfix">
                {/* <div className="skill-tag">HTML5</div> */}
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between">
            <div className="additional-info blue-color">{promotion_title}
              <br/>
              <span style={{ 'fontSize': '13px', 'color': '#4b5053' }}>{ promotion_description }</span>
            </div>
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        <div className="caret-block" >
          <span className="caret-top"></span>
        </div>
        <div className="panel panel-default job-box-details" style={styleForModal}>
          <button 
            className="btn btn-bg-transparent close-btn icon-btn"
            onClick={ (event) => { 
              closeActiveModal();
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
                    <div 
                      className="job-box-photo bg-cover circul-shape" 
                      style={{ 'backgroundImage': `url( ${user.image.url} )` }} >
                    </div>
                    <div className="job-box-rate">
                      <span className="icon icon-star-full"></span>
                      <span className="rate-result">{ user.total_rate ? user.total_rate : 'N/A' }</span>
                    </div>
                  </div>
                  <div className="job-box-title">
                    <div className="job-box-name blue-color">{ user.full_name }</div>
                  </div>
                </div>
              
              <div className="info-block">
                <div className="title">
                  $0,00 Total Spent 
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  { user.skill_test_send + ' Skill test / ' + user.total_jobs + ' jobs' }
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
                  { user.place_to_work ?  user.place_to_work : ''}
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
                    <span className="stat-title blue-color">{ payment ? payment.toUpperCase() : 'N/A' }</span>
                    <span className="stat-info">{ hourly_price ? hourly_price + '$/hour' : '' }</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-comments"></span>
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-accounts"></span>
                    <span className="stat-title blue-color">BUDGET</span>
                    <span className="stat-info">{ price + '$' }</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-clock-1"></span>
                    <span className="stat-title blue-color">COMPLETE</span>
                    <span className="stat-info">{ 
                      (period ? period : '') + 
                        ' ' + 
                      (period_type ? period_type.toUpperCase()[0] : 'N/A') }</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                <div className="job-details-descr" >
                  <div className="job-title">
                    { title }
                  </div>
                  <div className="job-descr-text">
                    <p>{ description }</p>
                  </div>
                </div>
              </div>
              <div className="other-details" style={{  }}>
                <div className="panel flexbox justify-space-between panel-blue">
                  <div className="other-title">{promotion_title}
                    <br/>
                    <span style={{ 'fontSize': '13px', 'color': '#4b5053', 'fontWeight': 'normal' }}>
                      { promotion_description }
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

JobBox.propTypes = {
  closeActiveModal: PropTypes.func,
  makeModalActive: PropTypes.func,
  activeModal: PropTypes.string,
  styleForModal: PropTypes.func,
  commitment: PropTypes.string,
  contract_general_notes: PropTypes.string,
  created_at: PropTypes.string,
  description: PropTypes.string,
  have_bid: PropTypes.bool,
  hourly_price: PropTypes.func,
  id: PropTypes.number,
  level: PropTypes.string,
  offers: PropTypes.array,
  owner: PropTypes.bool,
  payment: PropTypes.string,
  period: PropTypes.number,
  period_type: PropTypes.string,
  price: PropTypes.number,
  privacy: PropTypes.string,
  promotion_description: PropTypes.string,
  promotion_title: PropTypes.string,
  skill_tags: PropTypes.array,
  status: PropTypes.number,
  time_type: PropTypes.string,
  title: PropTypes.string,
  user: PropTypes.object
}



export default JobBox;