import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from '../Navigation';
import RightCol from './RightCol';
import LeftCol from './LeftCol';
import {
  GET_USERS_SKILLS,
  GET_SKILLS,
  GET_PROMOTIONS,
  CHANGE_USERS_SKILL_CATEGORIES,
  CHANGE_USERS_SKILL_TAGS,
  GET_SKILL_TAGS,
  OPEN_SKILL_TAGS_LIST,
  ADD_USERS_SKILLS,
  GO_TO_THE_NEXT_STEP,
  GO_TO_THE_PREVIOUS_STEP,
  DELETE_USERS_SKILLS,
  CHOOSE_CATEGORY_FOR_SKILLS,
  EDIT_USERS_SKILLS,
  DELETE_SKILL_TAG_FOR_SKILLS,
  CLOSE_SKILL_TAGS_LIST,
} from '../../actions';

class Skills extends Component {
  render() {
    const {
      skills,
      skill_tags,
      usersSkills,
      addingSkillsStatus,
      getUsersSkills,
      getSkills,
      changeUsersSkillCategories,
      changeUsersSkillTags,
      getSkillTags,
      openSkillTagsList,
      addUsersSkills,
      goToTheNextStep,
      goToThePreviousStep,
      deleteUsersSkills,
      chooseCategoryForSkills,
      editUsersSkills,
      deleteSkillTagForSkills,
      closeSkillTagsList,
    } = this.props;
    return (
      <div className="wrapper">
        <Navigation />
        <div className="content">
          <div className="container-fluid">
            <div className="panel panel-default my-main-panel">
              <div className="panel-body">
                <div className="flexbox">
                  <LeftCol />
                  <RightCol
                    skills={skills}
                    skill_tags={skill_tags}
                    addingSkillsStatus={addingSkillsStatus}
                    getSkills={getSkills}
                    getUsersSkills={getUsersSkills}
                    changeUsersSkillCategories={changeUsersSkillCategories}
                    changeUsersSkillTags={changeUsersSkillTags}
                    getSkillTags={getSkillTags}
                    usersSkills={usersSkills}
                    openSkillTagsList={openSkillTagsList}
                    addUsersSkills={addUsersSkills}
                    goToTheNextStep={goToTheNextStep}
                    goToThePreviousStep={goToThePreviousStep}
                    deleteUsersSkills={deleteUsersSkills}
                    chooseCategoryForSkills={chooseCategoryForSkills}
                    editUsersSkills={editUsersSkills}
                    deleteSkillTagForSkills={deleteSkillTagForSkills}
                    closeSkillTagsList={closeSkillTagsList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.array,
  skill_tags: PropTypes.object,
  usersSkills: PropTypes.array,
  addingSkillsStatus: PropTypes.object,
  getUsersSkills: PropTypes.func,
  getSkills: PropTypes.func,
  changeUsersSkillCategories: PropTypes.func,
  changeUsersSkillTags: PropTypes.func,
  getSkillTags: PropTypes.func,
  openSkillTagsList: PropTypes.func,
  addUsersSkills: PropTypes.func,
  goToTheNextStep: PropTypes.func,
  goToThePreviousStep: PropTypes.func,
  deleteUsersSkills: PropTypes.func,
  chooseCategoryForSkills: PropTypes.func,
  editUsersSkills: PropTypes.func,
  deleteSkillTagForSkills: PropTypes.func,
  closeSkillTagsList: PropTypes.func,
};

const mapStateToProps = state => ({
  skills: state.skills,
  skill_tags: state.skill_tags,
  usersSkills: state.usersSkills,
  addingSkillsStatus: state.addingSkillsStatus,
});

const mapDispatchToProps = dispatch => ({
  getUsersSkills: bindActionCreators(GET_USERS_SKILLS, dispatch),
  getSkills: bindActionCreators(GET_SKILLS, dispatch),
  getPromotions: bindActionCreators(GET_PROMOTIONS, dispatch),
  changeUsersSkillCategories: bindActionCreators(CHANGE_USERS_SKILL_CATEGORIES, dispatch),
  changeUsersSkillTags: bindActionCreators(CHANGE_USERS_SKILL_TAGS, dispatch),
  getSkillTags: bindActionCreators(GET_SKILL_TAGS, dispatch),
  openSkillTagsList: bindActionCreators(OPEN_SKILL_TAGS_LIST, dispatch),
  addUsersSkills: bindActionCreators(ADD_USERS_SKILLS, dispatch),
  goToTheNextStep: bindActionCreators(GO_TO_THE_NEXT_STEP, dispatch),
  goToThePreviousStep: bindActionCreators(GO_TO_THE_PREVIOUS_STEP, dispatch),
  deleteUsersSkills: bindActionCreators(DELETE_USERS_SKILLS, dispatch),
  chooseCategoryForSkills: bindActionCreators(CHOOSE_CATEGORY_FOR_SKILLS, dispatch),
  editUsersSkills: bindActionCreators(EDIT_USERS_SKILLS, dispatch),
  deleteSkillTagForSkills: bindActionCreators(DELETE_SKILL_TAG_FOR_SKILLS, dispatch),
  closeSkillTagsList: bindActionCreators(CLOSE_SKILL_TAGS_LIST, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Skills),
);
