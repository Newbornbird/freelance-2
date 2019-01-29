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
import JobList from './JobList';
import BtnStartNewProject from './BtnStartNewProject';
import BtnStartNewPromotion from './BtnStartNewPromotion';
import BtnTellOthers from './BtnTellOthers';
import JobListFooter from './JobListFooter';
import TalentList from './TalentList';
import { SWITCH_SEARCH } from '../../actions';
    
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
      
        <div className="container-fluid">
          <div className="row content-header flexbox">
            <div className="col-xs-2 left-sidebar">
              <Hello />
            </div>
            <div className="col-xs-10">
              <Form />
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
              <Panel />
            </div>
          </div>
          <div className="row main-content flexbox">
            <div className="col-xs-2 left-sidebar">
              <PanelCheckboxJob/>
            </div>
            <div className="col-xs-10 container-fluid job-boxes--jobs">
              <div className="flexbox row">
                <div className="col-xs-12">
                { this.props.searchTalentIsActive ? <Redirect to="/board/search/talent" /> : <Redirect to="/board/search/job" /> }
                  <Switch>
                    <Route exact path="/board/search/talent" component={ TalentList } />
                    <Route exact path="/board/search/job" component={ JobList } />         
                  </Switch>
                    <JobListFooter/>
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
    searchTalentIsActive: state.status.searchTalentIsActive
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    SWITCH_SEARCH: bindActionCreators(SWITCH_SEARCH, dispatch)
      
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchMain));
