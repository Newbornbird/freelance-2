import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from '../Navigation';
import RightCol from './RightCol';
import LeftCol from './LeftCol';
import { GET_USERS_SKILLS, GET_SKILLS,
	GET_PROMOTIONS, CHANGE_USERS_SKILL_CATEGORIES,
	CHANGE_USERS_SKILL_TAGS, GET_SKILL_TAGS,
	OPEN_SKILL_TAGS_LIST, ADD_USERS_SKILLS,
	GO_TO_THE_NEXT_STEP, GO_TO_THE_PREVIOUS_STEP,
	DELETE_USERS_SKILLS, CHOOSE_CATEGORY_FOR_SKILLS,
	EDIT_USERS_SKILLS, DELETE_SKILL_TAG_FOR_SKILLS,
	CLOSE_SKILL_TAGS_LIST } from '../../actions';

class Skills extends Component {
  render() {
    return (
      <div className='wrapper'>
				<Navigation/>
				<div className="content">
					<div className="container-fluid">
						<div className="panel panel-default my-main-panel">
							<div className="panel-body">
								<div className="flexbox">
									<LeftCol />
									<RightCol 
										skills = { this.props.skills }
										skill_tags = { this.props.skill_tags }
										addingSkillsStatus = { this.props.addingSkillsStatus }
										GET_SKILLS = { this.props.GET_SKILLS }
										GET_USERS_SKILLS = { this.props.GET_USERS_SKILLS }
		                CHANGE_USERS_SKILL_CATEGORIES = { this.props.CHANGE_USERS_SKILL_CATEGORIES }
										CHANGE_USERS_SKILL_TAGS = { this.props.CHANGE_USERS_SKILL_TAGS }
										GET_SKILL_TAGS = { this.props.GET_SKILL_TAGS }
										ADD_SKILL_TAG = { this.props.ADD_SKILL_TAG }
										usersSkills = { this.props.usersSkills }
										OPEN_SKILL_TAGS_LIST = { this.props.OPEN_SKILL_TAGS_LIST }
										ADD_USERS_SKILLS = { this.props.ADD_USERS_SKILLS }
										GO_TO_THE_NEXT_STEP = { this.props.GO_TO_THE_NEXT_STEP }
										GO_TO_THE_PREVIOUS_STEP = { this.props.GO_TO_THE_PREVIOUS_STEP }
										DELETE_USERS_SKILLS = { this.props.DELETE_USERS_SKILLS }
										CHOOSE_CATEGORY_FOR_SKILLS = { this.props.CHOOSE_CATEGORY_FOR_SKILLS }
										EDIT_USERS_SKILLS = { this.props.EDIT_USERS_SKILLS }
										DELETE_SKILL_TAG_FOR_SKILLS = { this.props.DELETE_SKILL_TAG_FOR_SKILLS }
										CLOSE_SKILL_TAGS_LIST = { this.props.CLOSE_SKILL_TAGS_LIST }
									/>
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
		skills: state.skills,
		skill_tags: state.skill_tags,
		usersSkills: state.usersSkills,
		addingSkillsStatus: state.addingSkillsStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
		GET_USERS_SKILLS: bindActionCreators(GET_USERS_SKILLS, dispatch),
		GET_SKILLS: bindActionCreators(GET_SKILLS, dispatch),
		GET_PROMOTIONS: bindActionCreators(GET_PROMOTIONS, dispatch),
		CHANGE_USERS_SKILL_CATEGORIES: bindActionCreators(CHANGE_USERS_SKILL_CATEGORIES, dispatch),
		CHANGE_USERS_SKILL_TAGS: bindActionCreators(CHANGE_USERS_SKILL_TAGS, dispatch),
		GET_SKILL_TAGS: bindActionCreators(GET_SKILL_TAGS, dispatch),
		OPEN_SKILL_TAGS_LIST: bindActionCreators(OPEN_SKILL_TAGS_LIST, dispatch),
		ADD_USERS_SKILLS: bindActionCreators(ADD_USERS_SKILLS, dispatch),
		GO_TO_THE_NEXT_STEP: bindActionCreators(GO_TO_THE_NEXT_STEP, dispatch),
		GO_TO_THE_PREVIOUS_STEP: bindActionCreators(GO_TO_THE_PREVIOUS_STEP, dispatch),
		DELETE_USERS_SKILLS: bindActionCreators(DELETE_USERS_SKILLS, dispatch),
		CHOOSE_CATEGORY_FOR_SKILLS: bindActionCreators(CHOOSE_CATEGORY_FOR_SKILLS, dispatch),
		EDIT_USERS_SKILLS: bindActionCreators(EDIT_USERS_SKILLS, dispatch),
		DELETE_SKILL_TAG_FOR_SKILLS: bindActionCreators(DELETE_SKILL_TAG_FOR_SKILLS, dispatch),
		CLOSE_SKILL_TAGS_LIST: bindActionCreators(CLOSE_SKILL_TAGS_LIST, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Skills));


