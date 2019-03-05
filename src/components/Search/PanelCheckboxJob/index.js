import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CHANGE_CHECKBOX_DATA_ARR,
  CHANGE_CHECKBOX_DATA_SINGLE,
  CHANGE_INPUT_DATA_PAYMENT,
  BIG_ACTION,
  GET_LOCATIONS,
  GET_LANGUAGES,
} from '../../../actions';
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
  render() {
    const {
      changeCheckboxDataArr,
      inputData,
      getLocations,
      locations,
      getLanguages,
      languages,
      changeInputDataPayment,
      changeCheckboxDataSingle,
    } = this.props;
    return (
      <div className="panel panel-default">
        <button className="btn btn-bg-transparent close-btn icon-btn">
          <span className="glyphicon glyphicon-remove" />
        </button>
        <CheckboxExp changeCheckboxDataArr={changeCheckboxDataArr} inputData={inputData} />
        <CheckboxPosted changeCheckboxDataSingle={changeCheckboxDataSingle} inputData={inputData} />
        <CheckboxPlace />
        <Location
          changeCheckboxDataArr={changeCheckboxDataArr}
          getLocations={getLocations}
          locations={locations}
          inputData={inputData}
        />
        <Language
          changeCheckboxDataArr={changeCheckboxDataArr}
          getLanguages={getLanguages}
          languages={languages}
          inputData={inputData}
        />
        <CheckboxAvailability changeCheckboxDataArr={changeCheckboxDataArr} inputData={inputData} />
        <CheckboxPayment
          changeCheckboxDataArr={changeCheckboxDataArr}
          changeInputDataPayment={changeInputDataPayment}
          inputData={inputData}
        />
        <CheckboxBudget changeCheckboxDataSingle={changeCheckboxDataSingle} inputData={inputData} />
        <CheckboxProposal changeCheckboxDataSingle={changeCheckboxDataSingle} inputData={inputData} />
        <CheckboxJobDelivery />
      </div>
    );
  }
}

PanelCheckboxJob.propTypes = {
  inputData: PropTypes.object,
  locations: PropTypes.array,
  languages: PropTypes.array,
  changeCheckboxDataArr: PropTypes.func,
  changeCheckboxDataSingle: PropTypes.func,
  changeInputDataPayment: PropTypes.func,
  getLocations: PropTypes.func,
  getLanguages: PropTypes.func,
};

const mapStateToProps = state => ({
  inputData: state.inputData,
  locations: state.locations,
  languages: state.languages,
});

const mapDispatchToProps = dispatch => ({
  changeCheckboxDataArr: bindActionCreators(CHANGE_CHECKBOX_DATA_ARR, dispatch),
  changeCheckboxDataSingle: bindActionCreators(CHANGE_CHECKBOX_DATA_SINGLE, dispatch),
  changeInputDataPayment: bindActionCreators(CHANGE_INPUT_DATA_PAYMENT, dispatch),
  bigAction: bindActionCreators(BIG_ACTION, dispatch),
  getLocations: bindActionCreators(GET_LOCATIONS, dispatch),
  getLanguages: bindActionCreators(GET_LANGUAGES, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PanelCheckboxJob),
);
