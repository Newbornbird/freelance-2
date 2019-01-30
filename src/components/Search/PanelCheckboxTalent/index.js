import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GET_LANGUAGES, GET_LOCATIONS, 
  SEND_TALENT_REQUEST_STR,
  SEND_TALENT_REQUEST_ARR } from '../../../actions';
import CheckboxExpTalent from './CheckboxExpTalent';
import CheckboxJDSTalent from './CheckboxJDSTalent';
import CheckboxSTSTalent from './CheckboxSTSTalent';
import CheckboxFRTalent from './CheckboxFRTalent';
import LocationTalent from './LocationTalent';
import LanguageTalent from './LanguageTalent';
import CheckboxAvailabilityTalent from './CheckboxAvailabilityTalent';
import CheckboxPlaceTalent from './CheckboxPlaceTalent';

class PanelCheckboxTalent extends Component {

  constructor() {
    super();
    this.state = {
      intern: false
    }
  }

  render() {
    return (
      <div className="panel panel-default">
        <button className="btn btn-bg-transparent close-btn icon-btn"><span className="glyphicon glyphicon-remove"></span></button>
        <CheckboxExpTalent 
          SEND_TALENT_REQUEST_ARR = { this.props.SEND_TALENT_REQUEST_ARR }
          requestTalent = { this.props.requestTalent } 
          checkboxDataTalent = { this.props.checkboxDataTalent } />
        <CheckboxJDSTalent
          SEND_TALENT_REQUEST_STR = { this.props.SEND_TALENT_REQUEST_STR }
          requestTalent = { this.props.requestTalent } />
        <CheckboxSTSTalent
          SEND_TALENT_REQUEST_STR = { this.props.SEND_TALENT_REQUEST_STR }
          requestTalent = { this.props.requestTalent } />
        <CheckboxFRTalent
          SEND_TALENT_REQUEST_STR = { this.props.SEND_TALENT_REQUEST_STR }
          requestTalent = { this.props.requestTalent } />
        <LocationTalent
          SEND_TALENT_REQUEST_ARR = { this.props.SEND_TALENT_REQUEST_ARR }
          GET_LOCATIONS = { this.props.GET_LOCATIONS }
          locations = { this.props.locations }
          checkboxDataTalent = {this.props.checkboxDataTalent}
          requestTalent = { this.props.requestTalent } />
        <LanguageTalent
          SEND_TALENT_REQUEST_ARR = { this.props.SEND_TALENT_REQUEST_ARR }
          GET_LANGUAGES = { this.props.GET_LANGUAGES }
          languages = { this.props.languages }
          checkboxDataTalent = { this.props.checkboxDataTalent }
          requestTalent = { this.props.requestTalent } />
        <CheckboxAvailabilityTalent
          SEND_TALENT_REQUEST_ARR = { this.props.SEND_TALENT_REQUEST_ARR }
          checkboxDataTalent = { this.props.checkboxDataTalent }
          requestTalent = { this.props.requestTalent } />
        <CheckboxPlaceTalent
          SEND_TALENT_REQUEST_ARR = { this.props.SEND_TALENT_REQUEST_ARR }
          requestTalent = { this.props.requestTalent } 
          checkboxDataTalent = { this.props.checkboxDataTalent } />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    requestTalent: state.requestTalent,
    checkboxDataTalent: state.checkboxDataTalent,
    locations: state.locations,
    languages: state.languages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SEND_TALENT_REQUEST_STR: bindActionCreators(SEND_TALENT_REQUEST_STR, dispatch),
    SEND_TALENT_REQUEST_ARR: bindActionCreators(SEND_TALENT_REQUEST_ARR, dispatch),
    GET_LOCATIONS:  bindActionCreators(GET_LOCATIONS, dispatch),
    GET_LANGUAGES: bindActionCreators(GET_LANGUAGES, dispatch)
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelCheckboxTalent));