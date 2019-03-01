import React, { Component } from 'react';
import * as moment from 'moment';
export class TalentBox extends Component {
  
  render() {
    return (
      <div className="job-box-block" onClick={ () => { this.props.makeModalActive(this.props.id) } }>
        <div className={ this.props.activeModal === this.props.id ? 
          "panel panel-default job-box awarded left-details open" :
          "panel panel-default job-box awarded left-details" }>
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-photo-block">
              <div 
                className="job-box-photo bg-cover circul-shape" 
                style={ this.props.image.url ? { 'backgroundImage': 'url' + '(' + this.props.image.url + ')' } : { } }
                >
                <i className="notif"></i>
                <i className="award">
                  <span className="icon icon-badge-flat"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span><span className="path6"></span><span className="path7"></span><span className="path8"></span><span className="path9"></span><span className="path10"></span></span>
                </i>
              </div>
            </div>
            <div className="job-box-title">
              <div className="job-box-name blue-color">{ this.props.full_name }</div>
              <div className="job-box-prof">
                {/* { this.props.profession ? this.props.profession : '' } */}
              </div>
              {/* Разобраться с дивом выше. */}
            </div>
            <div className="job-box-rate">
              <span className="icon icon-star-full"></span>
              <span className="rate-result">{ this.props.total_rate ? this.props.total_rate : 'N/A'}</span>
            </div>
          </div>
          <div className="job-box-body flexbox justify-space-between">
            <div className="job-box-tips">
              <div className="tip">
                  <span className="icon icon-award"></span>
                  <span className="text">{ this.props.total_rate ? this.props.total_rate : '95%'}</span>
                </div>
                <div className="tip">
                  <span className="icon icon-jobs"></span>
                  <span className="text">
                    { this.props.total_jobs ? this.props.total_jobs : ''}
                    h / j
                  </span>
                </div>
                <div className="tip">
                  <span className="icon icon-location"></span>
                  <span className="text">{ this.props.country ? this.props.country : 'N/A' }</span>
                </div>
                <div className="tip">
                  <span className="icon icon-clock-1"></span>
                  <span className="text">{ this.props.total_hours ? this.props.total_hours : 'N/A'}</span>
                </div>
                <div className="tip">
                  <span className="icon icon-wallet"></span>
                  <span className="text">{ this.props.price ? '$' + this.props.price : 'N/A'}</span>
                </div>
            </div>
            <div className="job-box-deskr">
              <div className="text">
                No Introduction set yet
              </div>
              <div className="skill-tags-block clearfix">
                { this.props.skill_tags.map( tag => (<div key={ tag.id } className="skill-tag">{ tag.name }</div>) ) }
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between" style={{ 'min-height': '80px' }}>
            <div className="additional-info blue-color"> 
              { this.props.promotions[0] ? this.props.promotions[0].title : 'The user has not promoted himself yet' }
              <br/>
              <span style={{ 'fontSize': '13px', 'color': '#4b5053', 'fontWeight': 'normal' }}>
                {  this.props.promotions[0] ? this.props.promotions[0].description : '' }
              </span> 
            </div>
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        <div className="caret-block">
          <span className="caret-top"></span>
        </div>
        <div className="panel panel-default job-box-details" style={ this.props.styleForModal }>
          <button 
            className="btn btn-bg-transparent close-btn icon-btn"
            onClick={ (event) => { 
              this.props.closeActiveModal();
              event.stopPropagation() } }>
            <span className="glyphicon glyphicon-remove">

            </span>
          </button>
          <div className="flexbox justify-space-between">
            <div className="about-block-wrapper">
              <div className="photo-block">
                <div className="job-box-photo bg-cover circul-shape" 
                  style={{ 'backgroundImage': 'url' + '(' + this.props.image.url + ')' }}
                >
                </div>
                <div className="job-box-title">
                  <div className="job-box-name blue-color">{ this.props.full_name }</div>
                  <div className="job-box-prof">
                    { this.props.profession ? this.props.profession.title  : ''}
                  </div>
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Available 
                </div>
                <div className="text">
                  { this.props.availability ?  this.props.availability : ''}
                </div>
              </div>
              <div className="info-block">
                <div className="text">
                  { this.props.total_hours }  hrs / { this.props.total_jobs } jobs
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Languages 
                </div>
                <div className="text">
                { this.props.languages[0] ? 
                  this.props.languages.map( (lang, index) => { 
                    return <span key={ index }>lang<span>fluent</span></span> } ) : '' }
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Place of Work 
                </div>
                <div className="text">
                  { this.props.place_to_work ? this.props.place_to_work : '' }
                </div>
              </div>
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard"></span>
                    <span className="btn-text">Hire</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-jobs"></span>
                    <span className="btn-text">Portfolio</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output"></span>
                    <span className="btn-text">View Page</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-comment"></span>
                    <span className="btn-text">Message</span>
                  </div>
                </button>	
              </div>
            </div>
            <div className="job-details-right">
              <div className="job-details-right-header flexbox">
                <div className="likes flexbox">
                  <span className="icon icon-shape"></span>
                    
                  <ul className="likes-list list-unstyled">
                    No recommendation yet
                    {/* <li className="like-item like-item--1 bg-cover circul-shape"></li>
                    <li className="like-item like-item--2 bg-cover circul-shape"></li>
                    <li className="like-item like-item--3 bg-cover circul-shape"></li>
                    <li className="like-item like-item--1 bg-cover circul-shape"></li> */}
                  </ul>
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-comments"></span>
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-calendar2"></span>
                    <span className="stat-title blue-color">LAST ACTIVE</span>
                    <span className="stat-info">{ moment(this.props.last_seen_at).fromNow() }</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-saved"></span>
                    <span className="stat-title blue-color">SAVED</span>
                    <span className="stat-info">{ this.props.saved_count ? this.props.saved_count : '0'}</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                { this.props.offers[0] ?
                    this.props.offers.map( (offer, index) => (
                      <div className="feedback-item flexbox" key={ index }>
                        <div className="left-col">
                          <div className="item-header">
                            <div className="item-photo circul-shape bg-cover item-photo--1"
                              style={{ 'backgroundImage': 'url' + '(' + offer.job.user.image.url + ')' }}>

                            </div>
                            <div className="item-name blue-color">{ offer.job.user.full_name }</div>
                          </div>
                          <div className="item-message">
                            <span className="job-title">{ offer.job.title }</span>
                            <span className="feedback-text">{ offer.feedback }</span>
                          </div>
                        </div>
                        <div className="right-col job-box-rate">
                          <span className="icon icon-star-full"></span>
                          <span className="rate-result">{ offer.rate }</span>
                        </div>
                      </div>
                    ) ) : <div className="feedback-item flexbox" style={ { 'height': '200px' } }>No feedback yet</div>  }    
                {/* <div className="feedback-item flexbox">
                  No feedback yet 
                  <div className="left-col">
                    <div className="item-header">
                      <div className="item-photo circul-shape bg-cover item-photo--1"></div>
                      <div className="item-name blue-color"></div>
                    </div>
                    <div className="item-message">
                      <span className="job-title">PSD to HTML</span>
                      <span className="feedback-text"> Another bang up job! Clifford is the most dependable web design resource I've worked with, and I've worked with... many!</span>
                    </div>
                  </div>
                  <div className="right-col job-box-rate">
                    <span className="icon icon-star-full"></span>
                    <span className="rate-result">5.8</span>
                  </div>
                </div> */}

                {/* <div className="feedback-item flexbox">
                  <div className="left-col">
                    <div className="item-header">
                      <div className="item-photo circul-shape bg-cover item-photo--2"></div>
                      <div className="item-name blue-color">Clifford Love</div>
                    </div>
                    <div className="item-message">
                      <span className="job-title">PSD to HTML</span>
                      <span className="feedback-text"> Another bang up job! Clifford is the most dependable web design resource I've worked with, and I've worked with... many!</span>
                    </div>
                  </div>
                  <div className="right-col job-box-rate">
                    <span className="icon icon-star-full"></span>
                    <span className="rate-result">5.8</span>
                  </div>
                </div>

                <div className="feedback-item flexbox">
                  <div className="left-col">
                    <div className="item-header">
                      <div className="item-photo circul-shape bg-cover item-photo--3"></div>
                      <div className="item-name blue-color">Clifford Love</div>
                    </div>
                    <div className="item-message">
                      <span className="job-title">PSD to HTML</span>
                      <span className="feedback-text"> Another bang up job! Clifford is the most dependable web design resource I've worked with, and I've worked with... many!</span>
                    </div>
                  </div>
                  <div className="right-col job-box-rate">
                    <span className="icon icon-star-full"></span>
                    <span className="rate-result">5.8</span>
                  </div>
                </div> */}

                {/* <button className="btn btn-bg-transparent more-feedbacks" type="button">+ 10 feedbacks</button> */}

              </div>
              <div className="other-details">
                { this.props.promotions[0] ? 
                this.props.promotions.map( 
                    (prom, index) => (
                    <div className="panel flexbox justify-space-between panel-blue" key={ index } 
                      style={ index % 2 === 0 ? {  } : { 'backgroundColor': '#ffeecd' } }>
                      <div className="other-title" >
                        { prom.title }
                        <br/>
                        <span style={{ 'fontSize': '13px', 'color': '#4b5053', 'fontWeight': 'normal' }}>{ prom.description }</span>
                      </div>
                      <span className="btn btn-blue-border btn-bold">Free</span>
                    </div> ) 
                ) : (<div className="panel flexbox justify-space-between panel-blue">
                      <div className="other-title">
                        <span style={{ 'fontSize': '13px', 'color': '#4b5053', 'fontWeight': 'normal' }}>
                          User has not promoted himself yet
                        </span>
                      </div>
                      <span className="btn btn-blue-border btn-bold">
                        Free
                      </span>
                    </div> ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TalentBox;