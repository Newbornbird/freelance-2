import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class RightCol extends Component {
  render() {
    let { skill_tags, addingSkillsStatus, 
      getUsersSkills, changeUsersSkillCategories, changeUsersSkillTags,
      getSkillTags, usersSkills, openSkillTagsList, addUsersSkills,
      goToTheNextStep, goToThePreviousStep, deleteUsersSkills, chooseCategoryForSkills,
      editUsersSkills, deleteSkillTagForSkills, closeSkillTagsList} = this.props
    return (
      <div className="left-col">
      {/* <!-- Tab panes --> */}
      <div className="tab-content my-central-info">
        <div role="tabpanel" className="tab-pane my-tab" id="overview">
          overview
        </div>
        {/* <!--Skills page START --> */}
        <div 
          role="tabpanel" 
          className={ "tab-pane my-tab step-" + addingSkillsStatus.step + "-open active" } 
          id="skills">
          <div className="steps-nav flexbox justify-space-between">
            <div className="steps-nav-title">Your Shared Skills</div>
            <div className="steps-nav-btn">
              <div className="btn-group step-2-btn clearfix">
                <button 
                  type="button" 
                  className="btn btn-blue-border btn-bold step-1-toggler step-toggler"
                  onClick={ () => { goToThePreviousStep(addingSkillsStatus.step) } }>
                  Back
                </button>
                <button 
                  type="button" 
                  className="btn btn-blue btn-bold step-3-toggler step-toggler"
                  onClick = { () => { addUsersSkills(usersSkills) } }>
                  Done
                </button>
              </div>
              <button 
                type="button" 
                className="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler"
                onClick={ () => { goToTheNextStep(addingSkillsStatus.step) } }>
                Add
              </button>
            </div>
          </div>
          { (addingSkillsStatus.step === 1) ? <Step1  
                                                usersSkills = { usersSkills }
                                                addingSkillsStatus = { addingSkillsStatus } 
                                                goToTheNextStep = { goToTheNextStep }
                                                chooseCategoryForSkills = { chooseCategoryForSkills }
                                                /> : 
            (addingSkillsStatus.step === 2) ? <Step2 
                                                usersSkills = { usersSkills }
                                                addingSkillsStatus = { addingSkillsStatus }
                                                skill_tags = { skill_tags }
                                                changeUsersSkillCategories = { changeUsersSkillCategories }
                                                changeUsersSkillTags = { changeUsersSkillTags }
                                                getSkillTags = { getSkillTags }
                                                openSkillTagsList = { openSkillTagsList }
                                                deleteSkillTagForSkills = { deleteSkillTagForSkills }
                                                closeSkillTagsList = { closeSkillTagsList }
                                                
                                                /> :
            (addingSkillsStatus.step === 3) ? <Step3 
                                                getUsersSkills = { getUsersSkills }
                                                addingSkillsStatus = { addingSkillsStatus } 
                                                usersSkills = { usersSkills } 
                                                deleteUsersSkills = { deleteUsersSkills }
                                                editUsersSkills = { editUsersSkills }
                                                /> : ''}
          </div>					
      </div>
    </div>
    )
  }
}

RightCol.propTypes = {
  skills: PropTypes.array,
	skill_tags: PropTypes.object,
	usersSkills: PropTypes.array,
	addingSkillsStatus: PropTypes.object,
	getUsersSkills: PropTypes.func,
	getSkills: PropTypes.func,
	getPromotions: PropTypes.func,
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
	closeSkillTagsList: PropTypes.func
}

export default RightCol;