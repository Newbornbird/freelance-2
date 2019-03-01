import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';


class RightCol extends Component {

  render() {
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
          className={ "tab-pane my-tab step-" + this.props.addingSkillsStatus.step + "-open active" } 
          id="skills">
          <div className="steps-nav flexbox justify-space-between">
            <div className="steps-nav-title">Your Shared Skills</div>
            <div className="steps-nav-btn">
              <div className="btn-group step-2-btn clearfix">
                <button 
                  type="button" 
                  className="btn btn-blue-border btn-bold step-1-toggler step-toggler"
                  onClick={ () => { this.props.GO_TO_THE_PREVIOUS_STEP(this.props.addingSkillsStatus.step) } }>
                  Back
                </button>
                <button 
                  type="button" 
                  className="btn btn-blue btn-bold step-3-toggler step-toggler"
                  onClick = { () => { this.props.ADD_USERS_SKILLS(this.props.usersSkills) } }>
                  Done
                </button>
              </div>
              <button 
                type="button" 
                className="btn btn-blue btn-bold step-3-btn step-1-toggler step-toggler"
                onClick={ () => { this.props.GO_TO_THE_NEXT_STEP(this.props.addingSkillsStatus.step) } }>
                Add
              </button>
            </div>
          </div>
          { (this.props.addingSkillsStatus.step === 1) ? <Step1  
                                                usersSkills = { this.props.usersSkills }
                                                addingSkillsStatus = { this.props.addingSkillsStatus } 
                                                GO_TO_THE_NEXT_STEP = { this.props.GO_TO_THE_NEXT_STEP }
                                                CHOOSE_CATEGORY_FOR_SKILLS = { this.props.CHOOSE_CATEGORY_FOR_SKILLS }
                                                /> : 
            (this.props.addingSkillsStatus.step === 2) ? <Step2 
                                                usersSkills = { this.props.usersSkills }
                                                addingSkillsStatus = { this.props.addingSkillsStatus }
                                                skill_tags = { this.props.skill_tags }
                                                CHANGE_USERS_SKILL_CATEGORIES = { this.props.CHANGE_USERS_SKILL_CATEGORIES }
                                                CHANGE_USERS_SKILL_TAGS = { this.props.CHANGE_USERS_SKILL_TAGS }
                                                GET_SKILL_TAGS = { this.props.GET_SKILL_TAGS }
                                                OPEN_SKILL_TAGS_LIST = { this.props.OPEN_SKILL_TAGS_LIST }
                                                DELETE_SKILL_TAG_FOR_SKILLS = { this.props.DELETE_SKILL_TAG_FOR_SKILLS }
                                                CLOSE_SKILL_TAGS_LIST = {this.props.CLOSE_SKILL_TAGS_LIST }
                                                
                                                /> :
            (this.props.addingSkillsStatus.step === 3) ? <Step3 
                                                GET_USERS_SKILLS = { this.props.GET_USERS_SKILLS }
                                                addingSkillsStatus = { this.props.addingSkillsStatus } 
                                                usersSkills = { this.props.usersSkills } 
                                                DELETE_USERS_SKILLS = { this.props.DELETE_USERS_SKILLS }
                                                EDIT_USERS_SKILLS = { this.props.EDIT_USERS_SKILLS }
                                                /> : ''}
          </div>					
      </div>
    </div>
    )
  }
}

export default RightCol;