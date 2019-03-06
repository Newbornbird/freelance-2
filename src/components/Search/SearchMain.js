import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
import noResults from '../../images/tallents@2x.png';
import Form from './Form';
import JobPostStatus from './JobPostStatus';
import Hello from './Hello';
import JobTalentSwitch from './JobTalentSwitch';
import Panel from './Panel';
import JobTalentButton from './JobTalentButton';
import PanelCheckboxJob from './PanelCheckboxJob';
import PanelCheckboxTalent from './PanelCheckboxTalent';
import JobList from './JobList';
import BtnStartNewProject from './BtnStartNewProject';
import BtnStartNewPromotion from './BtnStartNewPromotion';
import BtnTellOthers from './BtnTellOthers';
import JobListFooter from './JobListFooter';
import TalentList from './TalentList';
import PostJob from '../PostJob';
import {
  SWITCH_SEARCH,
  GET_MORE,
  CHANGE_CHECKBOX_DATA_NAME,
  SORT,
  BIG_ACTION,
  CHANGE_INPUT_STRING_VALUE,
  OPEN_MODAL,
  HIDE_MESSAGE_SUCCESS_POSTING,
} from '../../actions';

export class SearchMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: {},
    };
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.location.search !== this.props.location.search ||
      prevProps.location.pathname !== this.props.location.pathname
    ) {
      const parseString = queryString.parse(window.location.search);
      this.props.bigAction(parseString, window.location.pathname);
    }
  }

  componentDidMount() {
    const parseString = queryString.parse(window.location.search);
    this.props.bigAction(parseString, window.location.pathname);
  }

  render() {
    const {
      pathName,
      inputData,
      redirectIsActive,
      meta,
      inputStringValue,
      jobs,
      talents,
      authorization,
      switchSearch,
      getMore,
      sort,
      changeCheckboxDataName,
      changeInputStringValue,
      openModal,
      hideMessageSuccessPosting,
    } = this.props;
    return (
      <div className='content'>
        {redirectIsActive ? (
          <Redirect
            to={{
              pathname: pathName,
              search: queryString.stringify(inputData, { encode: false }),
            }}
          />
        ) : (
          ''
        )}
        <PostJob />
        <div className='container-fluid'>
          <div className='row content-header flexbox'>
            <div className='col-xs-2 left-sidebar'>
              <Hello userName={authorization.userData.first_name} />
            </div>
            <div className='col-xs-10'>
              <Form
                inputData={inputData}
                changeCheckboxDataName={changeCheckboxDataName}
                changeInputStringValue={changeInputStringValue}
                q={inputStringValue.q}
              />
              <JobPostStatus
                hideMessageSuccessPosting={hideMessageSuccessPosting}
                successMessage={inputStringValue.successMessage}
              />
            </div>
          </div>
          <div className='row job-boxes-header flexbox'>
            <div className='col-xs-2 left-sidebar'>
              <JobTalentSwitch pathName={pathName} switchSearch={switchSearch} />
              <JobTalentButton />
            </div>
            <div className='col-xs-10'>
              <Panel meta={meta} sort={sort} pathName={pathName} inputData={inputData} />
            </div>
          </div>
          <div className='row main-content flexbox'>
            <div className='col-xs-2 left-sidebar'>
              <Switch>
                <Route path='/board/search/talent' component={PanelCheckboxTalent} />
                <Route path='/board/search/job' component={PanelCheckboxJob} />
              </Switch>
            </div>
            <div
              className={
                window.location.pathname === '/board/search/job'
                  ? 'col-xs-10 container-fluid job-boxes--jobs'
                  : 'col-xs-10 container-fluid job-boxes--talents'
              }
            >
              <div className='flexbox row'>
                <div className='col-xs-12'>
                  {(talents.length && window.location.pathname === '/board/search/talent') ||
                  (jobs.length && window.location.pathname === '/board/search/job') ? (
                    <Switch>
                      <Route path='/board/search/talent' component={TalentList} />
                      <Route path='/board/search/job' component={JobList} />
                    </Switch>
                  ) : (
                    <div className='noresults noresults--tallents'>
                      <img src={noResults} alt='Have no results' />
                      <h2 className='blue-color'>We didn’t find anybody</h2>
                      <p>Please try modifying your search to get more results.</p>
                    </div>
                  )}
                  <JobListFooter meta={meta} inputData={inputData} getMore={getMore} />
                </div>
                <div className='col-xs-3'>
                  <BtnStartNewProject openModal={openModal} />
                  <BtnStartNewPromotion />
                  <BtnTellOthers />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pathName: state.status.pathName,
  inputData: state.inputData,
  redirectIsActive: state.status.redirectIsActive,
  meta: state.meta,
  inputStringValue: state.inputStringValue,
  jobs: state.jobs,
  talents: state.talents,
  authorization: state.authorization,
});

const mapDispatchToProps = dispatch => ({
  switchSearch: bindActionCreators(SWITCH_SEARCH, dispatch),
  getMore: bindActionCreators(GET_MORE, dispatch),
  sort: bindActionCreators(SORT, dispatch),
  changeCheckboxDataName: bindActionCreators(CHANGE_CHECKBOX_DATA_NAME, dispatch),
  bigAction: bindActionCreators(BIG_ACTION, dispatch),
  changeInputStringValue: bindActionCreators(CHANGE_INPUT_STRING_VALUE, dispatch),
  openModal: bindActionCreators(OPEN_MODAL, dispatch),
  hideMessageSuccessPosting: bindActionCreators(HIDE_MESSAGE_SUCCESS_POSTING, dispatch),
});

SearchMain.propTypes = {
  pathName: PropTypes.string,
  inputData: PropTypes.object,
  redirectIsActive: PropTypes.bool,
  meta: PropTypes.object,
  inputStringValue: PropTypes.object,
  jobs: PropTypes.array,
  talents: PropTypes.array,
  authorization: PropTypes.object,
  switchSearch: PropTypes.func,
  getMore: PropTypes.func,
  sort: PropTypes.func,
  changeCheckboxDataName: PropTypes.func,
  bigAction: PropTypes.func,
  changeInputStringValue: PropTypes.func,
  openModal: PropTypes.func,
  hideMessageSuccessPosting: PropTypes.func,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SearchMain),
);
