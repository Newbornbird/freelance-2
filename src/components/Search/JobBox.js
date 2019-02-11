import React, { Component } from 'react';


class JobBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="job-box-block">
        <div className="panel panel-default job-box">
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-title">
              <div className="post-date">
                { Math.floor((Date.now() - Date.parse(this.props.created_at)) / 1000 / 60 / 60) + ' hours ago' }
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
                  <span className="rate-result">5.8</span>
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
                  <span className="text">{ this.props.period + ' ' + this.props.period_type }</span>
                </div>
                
                <div className="tip">
                  <span className="icon icon-wallet"></span>
                  <span className="text">{ this.props.hourly_price }</span>
                </div>
            </div>
            <div className="job-box-deskr">
              <div className="text">
                { this.props.description }
              </div>
              <div className="skill-tags-block clearfix">
                <div className="skill-tag">HTML5</div>
                <div className="skill-tag">Node.js</div>
                <div className="skill-tag">CSS3</div>
                <div className="skill-tag">PHP</div>
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between">
            <div className="additional-info blue-color">{this.props.promotion_title}</div>
            {/* <div>{this.props.promotion_description}</div> */}
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        <div className="caret-block">
          <span className="caret-top"></span>
        </div>
        <div className="panel panel-default job-box-details">
          <button className="btn btn-bg-transparent close-btn icon-btn"><span className="glyphicon glyphicon-remove"></span></button>
          <div className="flexbox justify-space-between">
            <div className="about-block-wrapper">
                <div className="photo-block">
                  <div className="flexbox justify-space-between">
                    <div className="award">
                      <span className="icon icon-badge-solid"></span>
                    </div>
                    <div className="job-box-photo bg-cover circul-shape">
                    </div>
                    <div className="job-box-rate">
                      <span className="icon icon-star-full"></span>
                      <span className="rate-result">5.8</span>
                    </div>
                  </div>
                  <div className="job-box-title">
                    <div className="job-box-name blue-color">Clifford Love</div>
                  </div>
                </div>
              
              <div className="info-block">
                <div className="title">
                  $7,832 Total Spent 
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  30  Samples  / 20 jobs
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Languages 
                </div>
                <div className="text">
                  English: <span>fluent</span>;
                  Russian: <span>native</span>
                </div>
              </div>
              <div className="info-block">
                <div className="title">
                  Place of Work 
                </div>
                <div className="text">
                  Online
                </div>
              </div>
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard"></span>
                    <span className="btn-text">Send a bid</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output"></span>
                    <span className="btn-text">More Info</span>
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
                    <li className="like-item like-item--1 bg-cover circul-shape"></li>
                    <li className="like-item like-item--2 bg-cover circul-shape"></li>
                    <li className="like-item like-item--3 bg-cover circul-shape"></li>
                    <li className="like-item like-item--1 bg-cover circul-shape"></li>
                  </ul>
                </div>
                <div className="stat flexbox justify-space-center flex-wrap">
                  <div className="stat-block">
                    <span className="icon icon-tag"></span>
                    <span className="stat-title blue-color">FIXED</span>
                    <span className="stat-info">$200</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-comments"></span>
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-accounts"></span>
                    <span className="stat-title blue-color">BUDGET</span>
                    <span className="stat-info">$1000</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-clock-1"></span>
                    <span className="stat-title blue-color">COMPLETE</span>
                    <span className="stat-info">5</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                <div className="job-details-descr">
                  <div className="job-title">
                    Looking for back end programmer
                  </div>
                  <div className="job-descr-text">
                    <p>Experience Level: Expert Description of requirements/features: Looking for experts at coding in Wordpress for Mobile use.</p>
                    <p>Must be excellent at design/frontend/backend programming in the popular programming languages. You will combine elements from our current with a modified theme site on the Wordpress platform.</p>
                    <p>The new site will be responsive/mobile.</p>
                    <p>The new site should load quickly and be user friendly on Mac, PC, Android phone/tablet, Apple phone/tablet and Windows phone/tablet, Chrome, IE, Windows, Opera and Firefox browsers. Once these items are complete, if things go well we will hire your company as a site administrator on an hourly basis (performing changes when required). Your company should have excellent and excellent rating and feedback. You should be able to quickly complete assignments. Please submit your website portfolio (links of sites you have created).</p>
                    <p>Make sure all links you submit are working links (not dead links). IMPORTANT: Please DO NOT submit websites you have not created. This will disqualify you. Please be prepared to show us proof of the work you have performed on all websites you have created.</p>
                  </div>
                </div>
                
              </div>
              <div className="other-details">
                <div className="panel flexbox justify-space-between panel-blue">
                  <div className="other-title">Math  Home Tutoring</div>
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