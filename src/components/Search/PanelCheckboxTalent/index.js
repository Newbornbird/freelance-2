import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  CHANGE_CHECKBOX_DATA_ARR,
  CHANGE_CHECKBOX_DATA_SINGLE,
  BIG_ACTION,
  GET_LANGUAGES,
  GET_LOCATIONS,
} from '../../../actions';
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
      <div className='panel panel-default'>
        <button className='btn btn-bg-transparent close-btn icon-btn'>
          <span className='glyphicon glyphicon-remove' />
        </button>
        <CheckboxExpTalent changeCheckboxDataArr={this.props.changeCheckboxDataArr} inputData={this.props.inputData} />
        <CheckboxJDSTalent
          changeCheckboxDataSingle={this.props.changeCheckboxDataSingle}
          inputData={this.props.inputData}
        />
        <CheckboxSTSTalent
          changeCheckboxDataSingle={this.props.changeCheckboxDataSingle}
          inputData={this.props.inputData}
        />
        <CheckboxFRTalent
          changeCheckboxDataSingle={this.props.changeCheckboxDataSingle}
          inputData={this.props.inputData}
        />
        <LocationTalent
          changeCheckboxDataArr={this.props.changeCheckboxDataArr}
          getLocations={this.props.getLocations}
          locations={this.props.locations}
          inputData={this.props.inputData}
        />
        <LanguageTalent
          changeCheckboxDataArr={this.props.changeCheckboxDataArr}
          getLanguages={this.props.getLanguages}
          languages={this.props.languages}
          inputData={this.props.inputData}
        />
        <CheckboxAvailabilityTalent
          changeCheckboxDataArr={this.props.changeCheckboxDataArr}
          inputData={this.props.inputData}
        />
        <CheckboxPlaceTalent
          changeCheckboxDataArr={this.props.changeCheckboxDataArr}
          inputData={this.props.inputData}
        />
      </div>
    );
  }
}

PanelCheckboxTalent.propTypes = {
  inputData: PropTypes.object,
  locations: PropTypes.array,
  languages: PropTypes.array,
  getLocations: PropTypes.func,
  getLanguages: PropTypes.func,
  changeCheckboxDataArr: PropTypes.func,
  changeCheckboxDataSingle: PropTypes.func,
  bigAction: PropTypes.func,
};

const mapStateToProps = state => ({
  inputData: state.inputData,
  locations: state.locations,
  languages: state.languages,
});

const mapDispatchToProps = dispatch => ({
  getLocations: bindActionCreators(GET_LOCATIONS, dispatch),
  getLanguages: bindActionCreators(GET_LANGUAGES, dispatch),
  changeCheckboxDataArr: bindActionCreators(CHANGE_CHECKBOX_DATA_ARR, dispatch),
  changeCheckboxDataSingle: bindActionCreators(CHANGE_CHECKBOX_DATA_SINGLE, dispatch),
  bigAction: bindActionCreators(BIG_ACTION, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(PanelCheckboxTalent),
);
