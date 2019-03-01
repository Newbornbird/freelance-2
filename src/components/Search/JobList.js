import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JobBox from './JobBox';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: ''
    }
  }

  closeActiveModal = () => {
    this.setState({ activeModal: null });
  }

  makeModalActive = (id) => {
    this.setState({ activeModal: id });
  }

  render() {
    return (
      <div className="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">
        { this.props.jobs.map( (job, index) => (
          <JobBox
            closeActiveModal = { this.closeActiveModal }
            makeModalActive = { this.makeModalActive }
            activeModal = { this.state.activeModal }
            styleForModal = { index % 2 ? { 'left': '-109%' } : {  } }
            commitment = { job.commitment } 
            contract_general_notes = { job.contract_general_notes }
            created_at = { job.created_at }
            description = { job.description }
            have_bid = { job.have_bid }
            hourly_price = { job.hourly_price }
            id = { job.id }
            level = { job.level }
            offers = { job.offers }
            owner ={ job.owner }
            payment = { job.payment }
            period = { job.period }
            period_type = { job.period_type }
            price = { job.price }
            privacy = { job.privacy }
            promotion_description = { job.promotion_description }
            promotion_title = { job.promotion_title }
            skill_tags = { job.skill_tags }
            status = { job.status }
            time_type = { job.time_type }
            title = { job.title }
            user = { job.user }
            key = { job.id }
          />
        ), ) } 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }

}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(JobList));

