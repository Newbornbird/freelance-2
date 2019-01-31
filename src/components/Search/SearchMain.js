import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  GET_MORE_JOBS, SORT_JOBS, 
  SORT_TALENTS, SAVE_CHECKBOX_DATA_JOB,
  SAVE_CHECKBOX_DATA_TALENT,SEND_JOB_REQUEST_NAME,
  SEND_TALENT_REQUEST_NAME } from '../../actions';
    
export class SearchMain extends Component {
  constructor(props) {
    super(props);
   
    
  }
  componentDidMount() {
    console.log(this.props.searchTalentIsActive);
  }
  
  render() {
    return (
      <div className="content">
        <button onClick = { console.log(this.props) }>
          Клик
        </button>
        <div className="container-fluid">
          <div className="row content-header flexbox">
            <div className="col-xs-2 left-sidebar">
              <Hello />
            </div>
            <div className="col-xs-10">
              <Form 
                checkboxDataTalent = { this.props.checkboxDataTalent }
                checkboxDataJob = { this.props.checkboxDataJob }
                SAVE_CHECKBOX_DATA_JOB = { this.props.SAVE_CHECKBOX_DATA_JOB }
                SAVE_CHECKBOX_DATA_TALENT = { this.props.SAVE_CHECKBOX_DATA_TALENT }
                searchTalentIsActive = { this.props.searchTalentIsActive }
                SEND_JOB_REQUEST_NAME = { this.props.SEND_JOB_REQUEST_NAME }
                SEND_TALENT_REQUEST_NAME = { this.props.SEND_TALENT_REQUEST_NAME }
                request = { this.props.request }
                requestTalent = { this.props.requestTalent  } />
              <JobPostStatus />
            </div>
          </div>
          <div className="row job-boxes-header flexbox">
            <div className="col-xs-2 left-sidebar">
              <JobTalentSwitch
                searchTalentIsActive = {this.props.searchTalentIsActive}
                SWITCH_SEARCH = { this.props.SWITCH_SEARCH }
              />
              <JobTalentButton/>
            </div>
            <div className="col-xs-10">
              <Panel 
                meta = { this.props.meta }
                SORT_JOBS = { this.props.SORT_JOBS }
                request = { this.props.request }
                SORT_TALENTS = { this.props.SORT_TALENTS }
                searchTalentIsActive = { this.props.searchTalentIsActive }
              />
            </div>
          </div>
          <div className="row main-content flexbox">
            <div className="col-xs-2 left-sidebar">
              <Switch>
                <Route exact path="/board/search/talent" component={ PanelCheckboxTalent } />
                <Route exact path="/board/search/job" component={ PanelCheckboxJob } />         
              </Switch>
            </div>
            <div className="col-xs-10 container-fluid job-boxes--jobs">
              <div className="flexbox row">
                <div className="col-xs-12">
                { this.props.searchTalentIsActive ? <Redirect to="/board/search/talent" /> : <Redirect to="/board/search/job" /> }
                  <Switch>
                    <Route exact path="/board/search/talent" component={ TalentList } />
                    <Route exact path="/board/search/job" component={ JobList } />         
                  </Switch>
                    <JobListFooter
                      meta={this.props.meta}
                      request={ this.props.request }
                      GET_MORE_JOBS = { this.props.GET_MORE_JOBS }
                      SORT_JOBS = { this.props.SORT_JOBS }
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
    searchTalentIsActive: state.status.searchTalentIsActive,
    checkboxDataTalent: state.checkboxDataTalent,
    checkboxDataJob: state.checkboxDataJob,
    request: state.request,
    requestTalent: state.requestTalent,
    meta: state.meta
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SWITCH_SEARCH: bindActionCreators(SWITCH_SEARCH, dispatch),
    GET_MORE_JOBS: bindActionCreators(GET_MORE_JOBS, dispatch),
    SORT_JOBS: bindActionCreators(SORT_JOBS, dispatch),
    SORT_TALENTS: bindActionCreators(SORT_TALENTS, dispatch),
    SAVE_CHECKBOX_DATA_JOB: bindActionCreators(SAVE_CHECKBOX_DATA_JOB, dispatch),
    SAVE_CHECKBOX_DATA_TALENT: bindActionCreators(SAVE_CHECKBOX_DATA_TALENT, dispatch),
    SEND_JOB_REQUEST_NAME:  bindActionCreators(SEND_JOB_REQUEST_NAME, dispatch),
    SEND_TALENT_REQUEST_NAME: bindActionCreators(SEND_TALENT_REQUEST_NAME, dispatch)
    
      
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchMain));
