import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SEND_JOB_REQUEST_ARR, SEND_JOB_REQUEST_POSTED, 
  SAVE_CHECKBOX_DATA_JOB, SEND_JOB_REQUEST_PAYMENT, 
  GET_LOCATIONS, GET_LANGUAGES, SEND_JOB_REQUEST_STR } from '../../actions';
import Location from './Location';
import Language from './Language';
import CheckboxExp from './CheckboxExp';
import CheckboxPosted from './CheckboxPosted';
import CheckboxPlace from './CheckboxPlace';
import CheckboxAvailability from './CheckboxAvailability';
import CheckboxPayment from './CheckboxPayment';
import CheckboxBudget from './CheckboxBudget';
import CheckboxProposal from './CheckboxProposal';
import CheckboxJobDelivery from './CheckboxJobDelivery';

class PanelCheckboxJob extends Component {

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
        <CheckboxExp 
          SEND_JOB_REQUEST_ARR = { this.props.SEND_JOB_REQUEST_ARR }
          request = { this.props.request } 
          checkboxDataJob = { this.props.checkboxDataJob }
          />
        <CheckboxPosted
          SEND_JOB_REQUEST_STR = { this.props.SEND_JOB_REQUEST_STR }
          request = { this.props.request } />
        <CheckboxPlace
          // SEND_JOB_REQUEST = { this.props.SEND_JOB_REQUEST }
          request = { this.props.request } />
        <Location
          SEND_JOB_REQUEST_ARR = { this.props.SEND_JOB_REQUEST_ARR }
          GET_LOCATIONS = { this.props.GET_LOCATIONS }
          locations = { this.props.locations }
          checkboxDataJob = {this.props.checkboxDataJob}
          request = { this.props.request } />
        <Language
          SEND_JOB_REQUEST_ARR = { this.props.SEND_JOB_REQUEST_ARR }
          GET_LANGUAGES = { this.props.GET_LANGUAGES }
          languages = { this.props.languages }
          checkboxDataJob = {this.props.checkboxDataJob}
          request = { this.props.request } />
        <CheckboxAvailability
          SEND_JOB_REQUEST_ARR = { this.props.SEND_JOB_REQUEST_ARR }
          checkboxDataJob = { this.props.checkboxDataJob }
          request = { this.props.request } />
        <CheckboxPayment
          SEND_JOB_REQUEST_ARR = { this.props.SEND_JOB_REQUEST_ARR }
          SAVE_CHECKBOX_DATA_JOB = { this.props.SAVE_CHECKBOX_DATA_JOB }
          SEND_JOB_REQUEST_PAYMENT = { this.props.SEND_JOB_REQUEST_PAYMENT }
          checkboxDataJob = { this.props.checkboxDataJob }
          request = { this.props.request } />
        <CheckboxBudget
          SEND_JOB_REQUEST_STR = { this.props.SEND_JOB_REQUEST_STR }
          request = { this.props.request } />
        <CheckboxProposal
          SEND_JOB_REQUEST_STR = { this.props.SEND_JOB_REQUEST_STR }
          request = { this.props.request } />
        <CheckboxJobDelivery
          // SEND_JOB_REQUEST = { this.props.SEND_JOB_REQUEST }
          request = { this.props.request } />  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    request: state.request,
    checkboxDataJob: state.checkboxDataJob,
    locations: state.locations,
    languages: state.languages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SEND_JOB_REQUEST_POSTED: bindActionCreators(SEND_JOB_REQUEST_POSTED, dispatch),
    SEND_JOB_REQUEST_ARR: bindActionCreators(SEND_JOB_REQUEST_ARR, dispatch),
    SAVE_CHECKBOX_DATA_JOB: bindActionCreators(SAVE_CHECKBOX_DATA_JOB, dispatch),
    SEND_JOB_REQUEST_PAYMENT: bindActionCreators(SEND_JOB_REQUEST_PAYMENT, dispatch),
    SEND_JOB_REQUEST_STR: bindActionCreators(SEND_JOB_REQUEST_STR, dispatch),
    GET_LOCATIONS:  bindActionCreators(GET_LOCATIONS, dispatch),
    GET_LANGUAGES: bindActionCreators(GET_LANGUAGES, dispatch)
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelCheckboxJob));