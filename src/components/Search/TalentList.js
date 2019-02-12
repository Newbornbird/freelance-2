import React, { Component } from 'react';
import TalentBox from './TalentBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_TALENTS } from '../../actions';
import { withRouter } from 'react-router-dom';

class TalentList extends Component {

  componentDidMount() {
    
    
  }

  render() {
    
    return (
      <div className="job-boxes-wrapper job-boxes-wrapper--talents flexbox justify-space-between flex-wrap">
        {/* <button onClick={ () => {console.log(this.props)} }>
          КЛИК
        </button> */}
        
        { this.props.talents.map( (user, index) => (
            <TalentBox
              // availability = { user.availability}
              styleForModal = { index % 2 ? { 'left': '-109%' } : {  } }
              country = { user.country }
              // experience = { user.experience }
              // favorited = { user.favorited }
              full_name = { user.full_name }
              // id = { user.id }
              image = { user.image }
              // languages = { user.languages }
              // last_seen_at = { user.last_seen_at }
              // media = { user.media }
              // offers = { user.offers }
              // owner = { user.owner }
              // place_to_work = { user.place_to_work }
              price = { user.price }
              profession = { user.profession }
              // promotions = { user.promotions }
              // saved_count = { user.saved_count }
              skill_tags = { user.skill_tags }
              // length = { user.length }
              total_hours = { user.total_hours }
              total_jobs = { user.total_jobs }
              total_rate = { user.total_rate }
              key = { user.id }
              />
              
            ) ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    talents: state.talents
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     GET_TALENTS: bindActionCreators(GET_TALENTS, dispatch),  
//   }

// }

export default withRouter (connect(mapStateToProps)(TalentList));

