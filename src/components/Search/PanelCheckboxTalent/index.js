import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHANGE_CHECKBOX_DATA_ARR, 
  CHANGE_CHECKBOX_DATA_SINGLE,  BIG_ACTION, 
  GET_LANGUAGES, GET_LOCATIONS } from '../../../actions';
import CheckboxExpTalent from './CheckboxExpTalent';
import CheckboxJDSTalent from './CheckboxJDSTalent';
import CheckboxSTSTalent from './CheckboxSTSTalent';
import CheckboxFRTalent from './CheckboxFRTalent';
import LocationTalent from './LocationTalent';
import LanguageTalent from './LanguageTalent';
import CheckboxAvailabilityTalent from './CheckboxAvailabilityTalent';
import CheckboxPlaceTalent from './CheckboxPlaceTalent';

class PanelCheckboxTalent extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <button className="btn btn-bg-transparent close-btn icon-btn"><span className="glyphicon glyphicon-remove"></span></button>
        <CheckboxExpTalent 
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          inputData = { this.props.inputData } />
        <CheckboxJDSTalent
          CHANGE_CHECKBOX_DATA_SINGLE = { this.props.CHANGE_CHECKBOX_DATA_SINGLE }
          inputData = { this.props.inputData } />
        <CheckboxSTSTalent
          CHANGE_CHECKBOX_DATA_SINGLE = { this.props.CHANGE_CHECKBOX_DATA_SINGLE }
          inputData = { this.props.inputData } />
        <CheckboxFRTalent
          CHANGE_CHECKBOX_DATA_SINGLE = { this.props.CHANGE_CHECKBOX_DATA_SINGLE }
          inputData = { this.props.inputData } />
        <LocationTalent
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          GET_LOCATIONS = { this.props.GET_LOCATIONS }
          locations = { this.props.locations }
          inputData = { this.props.inputData } />
        <LanguageTalent
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          GET_LANGUAGES = { this.props.GET_LANGUAGES }
          languages = { this.props.languages }
          inputData = { this.props.inputData } />
        <CheckboxAvailabilityTalent
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          inputData = { this.props.inputData } />
        <CheckboxPlaceTalent
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          inputData = { this.props.inputData } />
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputData: state.inputData,
    locations: state.locations,
    languages: state.languages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GET_LOCATIONS:  bindActionCreators(GET_LOCATIONS, dispatch),
    GET_LANGUAGES: bindActionCreators(GET_LANGUAGES, dispatch),
    CHANGE_CHECKBOX_DATA_ARR:  bindActionCreators(CHANGE_CHECKBOX_DATA_ARR, dispatch), 
    CHANGE_CHECKBOX_DATA_SINGLE:  bindActionCreators(CHANGE_CHECKBOX_DATA_SINGLE, dispatch),
    BIG_ACTION:  bindActionCreators(BIG_ACTION, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelCheckboxTalent));