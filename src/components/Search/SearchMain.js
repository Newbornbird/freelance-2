import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import queryString from 'query-string';
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
import { SWITCH_SEARCH, 
  GET_MORE, CHANGE_CHECKBOX_DATA_NAME,
  SORT, BIG_ACTION } from '../../actions';
    
export class SearchMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParams: { }

    }
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search || prevProps.location.pathname !== this.props.location.pathname) {
      let parseString = queryString.parse(window.location.search);
      this.props.BIG_ACTION(parseString, window.location.pathname);
    }
  }

  componentDidMount() {
    let parseString = queryString.parse(window.location.search);
    this.props.BIG_ACTION(parseString, window.location.pathname);
  }

  render() {
    return (
      <div className="content">
        { this.props.redirectIsActive ? <Redirect to={{
              pathname: this.props.pathName,
              search: queryString.stringify(this.props.inputData, { encode: false })
        }} /> : ''}
        <div className="container-fluid">
          <div className="row content-header flexbox">
            <div className="col-xs-2 left-sidebar">
              <Hello />
            </div>
            <div className="col-xs-10">
              <Form 
                inputData = { this.props.inputData }
                CHANGE_CHECKBOX_DATA_NAME = { this.props.CHANGE_CHECKBOX_DATA_NAME } 
              />
              <JobPostStatus />
            </div>
          </div>
          <div className="row job-boxes-header flexbox">
            <div className="col-xs-2 left-sidebar">
              <JobTalentSwitch
                pathName = {this.props.pathName}
                SWITCH_SEARCH = { this.props.SWITCH_SEARCH }
              />
              <JobTalentButton/>
            </div>
            <div className="col-xs-10">
              <Panel 
                meta = { this.props.meta }
                SORT = { this.props.SORT }
                pathName = { this.props.pathName }
                inputData = { this.props.inputData }
              />
            </div>
          </div>
          <div className="row main-content flexbox">
            <div className="col-xs-2 left-sidebar">
              <Switch>
                <Route path="/board/search/talent" component={ PanelCheckboxTalent } />
                <Route path="/board/search/job" component={ PanelCheckboxJob } /> 
              </Switch>
            </div>
            <div className="col-xs-10 container-fluid job-boxes--jobs">
              <div className="flexbox row">
                <div className="col-xs-12">
                  <Switch>
                    <Route path="/board/search/talent" component={ TalentList } />
                    <Route path="/board/search/job" component={ JobList } />         
                  </Switch>
                    <JobListFooter
                      meta={this.props.meta}
                      inputData={ this.props.inputData }
                      GET_MORE = { this.props.GET_MORE }
                      // SORT_JOBS = { this.props.SORT_JOBS }
                    />
                </div>
                <div className="col-xs-3">
                  <BtnStartNewProject/>
                  <BtnStartNewPromotion />
                  <BtnTellOthers />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pathName: state.status.pathName,
    inputData: state.inputData,
    redirectIsActive: state.status.redirectIsActive,
    meta: state.meta
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SWITCH_SEARCH: bindActionCreators(SWITCH_SEARCH, dispatch),
    GET_MORE: bindActionCreators(GET_MORE, dispatch),
    SORT: bindActionCreators(SORT, dispatch),
    // SORT_TALENTS: bindActionCreators(SORT_TALENTS, dispatch),
    CHANGE_CHECKBOX_DATA_NAME: bindActionCreators(CHANGE_CHECKBOX_DATA_NAME, dispatch),
    // SAVE_CHECKBOX_DATA_JOB: bindActionCreators(SAVE_CHECKBOX_DATA_JOB, dispatch),
    // SAVE_CHECKBOX_DATA_TALENT: bindActionCreators(SAVE_CHECKBOX_DATA_TALENT, dispatch),
    // SEND_JOB_REQUEST_NAME:  bindActionCreators(SEND_JOB_REQUEST_NAME, dispatch),
    // SEND_TALENT_REQUEST_NAME: bindActionCreators(SEND_TALENT_REQUEST_NAME, dispatch),
    BIG_ACTION: bindActionCreators(BIG_ACTION, dispatch)
    // NEW_ACTION: bindActionCreators(NEW_ACTION, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchMain));
