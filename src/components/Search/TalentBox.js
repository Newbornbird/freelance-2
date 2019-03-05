import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';

export class TalentBox extends Component {
  render() {
    const {
      availability,
      closeActiveModal,
      makeModalActive,
      activeModal,
      styleForModal,
      country,
      full_name,
      id,
      image,
      languages,
      last_seen_at,
      offers,
      place_to_work,
      saved_count,
      price,
      profession,
      promotions,
      skill_tags,
      total_hours,
      total_jobs,
      total_rate,
    } = this.props;
    return (
      <div
        className="job-box-block"
        onClick={() => {
          makeModalActive(id);
        }}
      >
        <div
          className={
            activeModal === id
              ? 'panel panel-default job-box awarded left-details open'
              : 'panel panel-default job-box awarded left-details'
          }
        >
          <div className="job-box-header flexbox justify-space-between">
            <div className="job-box-photo-block">
              <div
                className="job-box-photo bg-cover circul-shape"
                style={image.url ? { backgroundImage: `url(${image.url})` } : {}}
              >
                <i className="notif" />
                <i className="award">
                  <span className="icon icon-badge-flat">
                    <span className="path1" />
                    <span className="path2" />
                    <span className="path3" />
                    <span className="path4" />
                    <span className="path5" />
                    <span className="path6" />
                    <span className="path7" />
                    <span className="path8" />
                    <span className="path9" />
                    <span className="path10" />
                  </span>
                </i>
              </div>
            </div>
            <div className="job-box-title">
              <div className="job-box-name blue-color">{full_name}</div>
              <div className="job-box-prof">{/* { this.props.profession ? this.props.profession : '' } */}</div>
              {/* Разобраться с дивом выше. */}
            </div>
            <div className="job-box-rate">
              <span className="icon icon-star-full" />
              <span className="rate-result">{total_rate || 'N/A'}</span>
            </div>
          </div>
          <div className="job-box-body flexbox justify-space-between">
            <div className="job-box-tips">
              <div className="tip">
                <span className="icon icon-award" />
                <span className="text">{total_rate || '95%'}</span>
              </div>
              <div className="tip">
                <span className="icon icon-jobs" />
                <span className="text">{total_jobs || ''}h / j</span>
              </div>
              <div className="tip">
                <span className="icon icon-location" />
                <span className="text">{country || 'N/A'}</span>
              </div>
              <div className="tip">
                <span className="icon icon-clock-1" />
                <span className="text">{total_hours || 'N/A'}</span>
              </div>
              <div className="tip">
                <span className="icon icon-wallet" />
                <span className="text">{price ? `$${price}` : 'N/A'}</span>
              </div>
            </div>
            <div className="job-box-deskr">
              <div className="text">No Introduction set yet</div>
              <div className="skill-tags-block clearfix">
                {skill_tags.map(tag => (
                  <div key={tag.id} className="skill-tag">
                    {tag.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="job-box-footer flexbox justify-space-between" style={{ minHeight: '80px' }}>
            <div className="additional-info blue-color">
              {promotions[0] ? promotions[0].title : 'The user has not promoted himself yet'}
              <br />
              <span style={{ fontSize: '13px', color: '#4b5053', fontWeight: 'normal' }}>
                {promotions[0] ? promotions[0].description : ''}
              </span>
            </div>
            <button className="btn btn-blue btn-bold">Free</button>
          </div>
        </div>

        <div className="caret-block">
          <span className="caret-top" />
        </div>
        <div className="panel panel-default job-box-details" style={styleForModal}>
          <button
            className="btn btn-bg-transparent close-btn icon-btn"
            onClick={event => {
              closeActiveModal();
              event.stopPropagation();
            }}
          >
            <span className="glyphicon glyphicon-remove" />
          </button>
          <div className="flexbox justify-space-between">
            <div className="about-block-wrapper">
              <div className="photo-block">
                <div className="job-box-photo bg-cover circul-shape" style={{ backgroundImage: `url(${image.url})` }} />
                <div className="job-box-title">
                  <div className="job-box-name blue-color">{full_name}</div>
                  <div className="job-box-prof">{profession ? profession.title : ''}</div>
                </div>
              </div>
              <div className="info-block">
                <div className="title">Available</div>
                <div className="text">{availability || ''}</div>
              </div>
              <div className="info-block">
                <div className="text">
                  {total_hours} hrs / {total_jobs} jobs
                </div>
              </div>
              <div className="info-block">
                <div className="title">Languages</div>
                <div className="text">
                  {languages[0]
                    ? languages.map((lang, index) => (
                        <span key={index}>
                          lang<span>fluent</span>
                        </span>
                      ))
                    : ''}
                </div>
              </div>
              <div className="info-block">
                <div className="title">Place of Work</div>
                <div className="text">{place_to_work || ''}</div>
              </div>
              <div className="info-block info-block--btns">
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-clipboard" />
                    <span className="btn-text">Hire</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-jobs" />
                    <span className="btn-text">Portfolio</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-output" />
                    <span className="btn-text">View Page</span>
                  </div>
                </button>
                <button className="btn btn-blue-border btn-bold btn-blue-hover btn-with-icon" type="button">
                  <div className="button-content">
                    <span className="icon icon-comment" />
                    <span className="btn-text">Message</span>
                  </div>
                </button>
              </div>
            </div>
            <div className="job-details-right">
              <div className="job-details-right-header flexbox">
                <div className="likes flexbox">
                  <span className="icon icon-shape" />

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
                    <span className="icon icon-comments" />
                    <span className="stat-title blue-color">RESPONSIVE</span>
                    <span className="stat-info">Fair</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-calendar2" />
                    <span className="stat-title blue-color">LAST ACTIVE</span>
                    <span className="stat-info">{moment(last_seen_at).fromNow()}</span>
                  </div>
                  <div className="stat-block">
                    <span className="icon icon-saved" />
                    <span className="stat-title blue-color">SAVED</span>
                    <span className="stat-info">{saved_count || '0'}</span>
                  </div>
                </div>
              </div>
              <div className="job-details-right-body">
                {offers[0] ? (
                  offers.map((offer, index) => (
                    <div className="feedback-item flexbox" key={index}>
                      <div className="left-col">
                        <div className="item-header">
                          <div
                            className="item-photo circul-shape bg-cover item-photo--1"
                            style={{ backgroundImage: `url(${offer.job.user.image.url})` }}
                          />
                          <div className="item-name blue-color">{offer.job.user.full_name}</div>
                        </div>
                        <div className="item-message">
                          <span className="job-title">{offer.job.title}</span>
                          <span className="feedback-text">{offer.feedback}</span>
                        </div>
                      </div>
                      <div className="right-col job-box-rate">
                        <span className="icon icon-star-full" />
                        <span className="rate-result">{offer.rate}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="feedback-item flexbox" style={{ height: '200px' }}>
                    No feedback yet
                  </div>
                )}
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
                {promotions[0] ? (
                  promotions.map((prom, index) => (
                    <div
                      className="panel flexbox justify-space-between panel-blue"
                      key={index}
                      style={index % 2 === 0 ? {} : { backgroundColor: '#ffeecd' }}
                    >
                      <div className="other-title">
                        {prom.title}
                        <br />
                        <span style={{ fontSize: '13px', color: '#4b5053', fontWeight: 'normal' }}>
                          {prom.description}
                        </span>
                      </div>
                      <span className="btn btn-blue-border btn-bold">Free</span>
                    </div>
                  ))
                ) : (
                  <div className="panel flexbox justify-space-between panel-blue">
                    <div className="other-title">
                      <span style={{ fontSize: '13px', color: '#4b5053', fontWeight: 'normal' }}>
                        User has not promoted himself yet
                      </span>
                    </div>
                    <span className="btn btn-blue-border btn-bold">Free</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TalentBox.propTypes = {
  closeActiveModal: PropTypes.func,
  makeModalActive: PropTypes.func,
  activeModal: PropTypes.string,
  availability: PropTypes.string,
  styleForModal: PropTypes.object,
  country: PropTypes.string,
  experience: PropTypes.string,
  favorited: PropTypes.bool,
  full_name: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  languages: PropTypes.string,
  last_seen_at: PropTypes.string,
  media: PropTypes.object,
  offers: PropTypes.string,
  place_to_work: PropTypes.string,
  price: PropTypes.string,
  profession: PropTypes.string,
  promotions: PropTypes.array,
  skill_tags: PropTypes.array,
  total_hours: PropTypes.number,
  total_jobs: PropTypes.number,
  total_rate: PropTypes.number,
};

export default TalentBox;
