import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_JOBS } from '../../actions';
import JobBox from './JobBox';

class JobList extends Component {
  
  componentDidMount() {
    this.props.GET_JOBS();
    
  }

  render() {
    return (
      <div className="job-boxes-wrapper job-boxes-wrapper--jobs flexbox justify-space-between flex-wrap">
      {/* <button onClick = { () => console.log(this.props.jobs) }>
        Показать пропсы
      </button> */}
        { this.props.jobs.map( job => (
          <JobBox
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
    GET_JOBS: bindActionCreators(GET_JOBS, dispatch),  
  }

}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(JobList));

