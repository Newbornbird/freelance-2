import React, { Component } from 'react';
import queryString from 'query-string';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CHANGE_CHECKBOX_DATA_ARR, 
  CHANGE_CHECKBOX_DATA_SINGLE,
  CHANGE_INPUT_DATA_PAYMENT,
  BIG_ACTION, GET_LOCATIONS, GET_LANGUAGES } from '../../../actions';
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
  constructor(props) {
    super(props); 
    
  }
  
  render() {
    return (
      <div className="panel panel-default">
        <button className="btn btn-bg-transparent close-btn icon-btn"><span className="glyphicon glyphicon-remove"></span></button>
        <CheckboxExp
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR } 
          inputData = { this.props.inputData } />
        <CheckboxPosted
          CHANGE_CHECKBOX_DATA_SINGLE = { this.props.CHANGE_CHECKBOX_DATA_SINGLE }
          inputData = { this.props.inputData } />
        <CheckboxPlace />
        <Location
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          GET_LOCATIONS = { this.props.GET_LOCATIONS }
          locations = { this.props.locations }
          inputData = {this.props.inputData} />
        <Language
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR }
          GET_LANGUAGES = { this.props.GET_LANGUAGES }
          languages = { this.props.languages }
          inputData = {this.props.inputData} />
        <CheckboxAvailability
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR } 
          inputData = {this.props.inputData} />
        <CheckboxPayment
          CHANGE_CHECKBOX_DATA_ARR = { this.props.CHANGE_CHECKBOX_DATA_ARR } 
          CHANGE_INPUT_DATA_PAYMENT = { this.props.CHANGE_INPUT_DATA_PAYMENT }
          inputData = {this.props.inputData} />
        <CheckboxBudget
          CHANGE_CHECKBOX_DATA_SINGLE = { this.props.CHANGE_CHECKBOX_DATA_SINGLE }
          inputData = {this.props.inputData} />
        <CheckboxProposal
          CHANGE_CHECKBOX_DATA_SINGLE = { this.props.CHANGE_CHECKBOX_DATA_SINGLE }
          inputData = { this.props.inputData } />
        <CheckboxJobDelivery />  
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputData: state.inputData,
    locations: state.locations,
    languages: state.languages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CHANGE_CHECKBOX_DATA_ARR: bindActionCreators(CHANGE_CHECKBOX_DATA_ARR, dispatch),
    CHANGE_CHECKBOX_DATA_SINGLE: bindActionCreators(CHANGE_CHECKBOX_DATA_SINGLE, dispatch),
    CHANGE_INPUT_DATA_PAYMENT: bindActionCreators(CHANGE_INPUT_DATA_PAYMENT, dispatch),
    BIG_ACTION: bindActionCreators(BIG_ACTION, dispatch),
    GET_LOCATIONS:  bindActionCreators(GET_LOCATIONS, dispatch),
    GET_LANGUAGES: bindActionCreators(GET_LANGUAGES, dispatch)
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PanelCheckboxJob));