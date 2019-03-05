import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillTagItemForSkills from './SkillTagItemForSkills';

class Step2 extends Component {
  render() {
    let { usersSkills,  addingSkillsStatus, skill_tags,  changeUsersSkillCategories,
      changeUsersSkillTags, getSkillTags, openSkillTagsList,  deleteSkillTagForSkills,  closeSkillTagsList } = this.props;
    return (
      <div className="step-2">
        <div className="skill-subcat">
          <div className="flexbox justify-space-between">
            <div className="skill-block">
              <div className="skill-block-title">{ addingSkillsStatus.chosenCategory.name }</div>
              <div className="skill-block-list">
                <form>
                  { usersSkills
                    .find( skill => skill.name === addingSkillsStatus.chosenCategory.name )
                    .skill_categories.map( (category, index) => (
                      <div className="checkbox-block" key={ index }>
                        <input 
                          type="checkbox" 
                          id={"math-" + index}
                          checked={ category.selected }
                          onChange={ (event) => { 
                            changeUsersSkillCategories( 
                              addingSkillsStatus.chosenCategory.id,
                              usersSkills,
                              index,
                              event
                            ) 
                          } }
                          />
                        <label htmlFor={"math-" + index}>
                          <span className="checkbox-circle">
                            <span className="icon icon-check-mark"></span>
                          </span>
                          <span className="checkbox-text">{ category.name }</span>
                        </label>
                      </div>
                    ) ) }
                </form>
              </div>
            </div>
            <div className="skill-sub-block">
              <form className="form-group">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Write new skill"
                  onChange={ (event) => { getSkillTags(event) } }
                  onFocus={ () => { openSkillTagsList() } }
                  />
              </form>
              <ul style={ skill_tags.skill_tags.length && skill_tags.dropDownMenu ? 
              {
                boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                width: '275px', 
                maxHeight: '250px', 
                backgroundColor: 'white', 
                marginTop: '-10px',
                border: 'solid 1px blue',
                overflow: 'auto',
                listStyleType: 'none',
                position: 'absolute'
              } :
              {
                display: 'none'
              }
                }>
                { skill_tags.skill_tags.length ? 
                    skill_tags.skill_tags.map( (skill_tag, index) => ( 
                      <SkillTagItemForSkills  
                        changeUsersSkillTags = { changeUsersSkillTags }
                        addingSkillsStatus = { addingSkillsStatus }
                        usersSkills = { usersSkills }
                        key={ index }
                        skill_tags = { skill_tags }
                        name = { skill_tag.name }
                        index = { index } />
                        
                  ) ) : ''}
              </ul>
              <div className="skill-tags-block clearfix">
                { usersSkills[addingSkillsStatus.chosenCategory.id - 1].skill_tags.length ? 
                    usersSkills[addingSkillsStatus.chosenCategory.id - 1].skill_tags.map( (skill_tag, index) => (
                  <div className="skill-tag" key={index}
                    onClick={ () => { deleteSkillTagForSkills(
                      addingSkillsStatus.chosenCategory.id, 
                      usersSkills, 
                      skill_tags.skill_tags[index]
                    ) } }>
                    { skill_tag.name }
                  </div>
                ) ) : '' }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Step2.propTypes = {
  skill_tags: PropTypes.object,
	usersSkills: PropTypes.array,
	addingSkillsStatus: PropTypes.object,
	changeUsersSkillCategories: PropTypes.func,
	changeUsersSkillTags: PropTypes.func,
	getSkillTags: PropTypes.func,
	openSkillTagsList: PropTypes.func,
	deleteUsersSkills: PropTypes.func,
	closeSkillTagsList: PropTypes.func
}

export default Step2;