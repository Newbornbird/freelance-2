import React, { Component } from 'react';
import SkillTagItem from './SkillTagItem';
import PropTypes from 'prop-types';

class ChooseSkillCategory extends Component {
  render() {
    let { skills, requestForPostJob, skill_tags,  chooseCategory, chooseSkillCategory, getSkillTags,  
      openSkillTagsList,  addSkillTag,  deleteSkillTag } = this.props
    return (
      <div className="form-block">
        <div className="skill-block skill-cat">
          <div className="skill-block-title">
            <div className="form-block-wrapper">
              Choose Your Skill Category
              <span className="icon icon-down-arrow"></span>
            </div>
          </div>
          <div className="skill-block-list" >
            <form className="form-block-wrapper flexbox flex-wrap">
              { skills.map( skill => 
                  (<div className="checkbox-block" key={ skill.id }>
                    <input 
                      type="checkbox" 
                      id={"cat" + skill.id } 
                      name={ skill.name } 
                      onChange={ () => { chooseCategory(skill) } }
                      checked={ requestForPostJob.category.name === skill.name }
                      />
                    <label htmlFor={"cat" + skill.id }>
                      <span className="checkbox-circle">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">{ skill.name }</span>
                    </label>
                  </div>)
              ) }
            </form>
          </div>
        </div>
        <div className="skill-subcat" style={ requestForPostJob.category.name ? {  } : { 'display': 'none' } }>
          <div className="flexbox justify-space-between form-block-wrapper">
            <div className="skill-block">
              <div className="skill-block-title">
                { requestForPostJob.category.name ? requestForPostJob.category.name : '' }
              </div>
              <div className="skill-block-list">
                <form>
                  { requestForPostJob.category.name ? 
                    requestForPostJob.category.skill_categories.map( (subSkill, index) => (
                      <div className="checkbox-block" key={ index }>
                        <input 
                          type="checkbox" 
                          id={"math-" + index} 
                          name='' 
                          onChange={ () => { chooseSkillCategory(index, requestForPostJob.category.skill_categories) } } 
                          checked={ requestForPostJob.category.skill_categories[index].selected } />
                        <label htmlFor={"math-" + index}>
                          <span className="checkbox-circle">
                            <span className="icon icon-check-mark"></span>
                          </span>
                          <span className="checkbox-text"> { subSkill.name } </span>
                        </label>
                      </div>
                  ) ) : '' }
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
                width: '250px', 
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
                      <SkillTagItem  
                        addSkillTag = { addSkillTag }
                        key={ index }
                        requestForPostJob = { requestForPostJob }
                        skill_tags = { skill_tags }
                        name = { skill_tag.name }
                        index = { index } />
                        
                  ) ) : ''}
              </ul>
              <div className="skill-tags-block clearfix">
                { requestForPostJob.skill_tags[0] ? requestForPostJob.skill_tags.map( (skill_tag, index) => (
                  <div 
                    className="skill-tag"
                    key={ index }
                    onClick={ () => { deleteSkillTag( requestForPostJob.skill_tags, index ) } }>
                    { skill_tag.name }
                  </div>
                ) ) : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ChooseSkillCategory.propTypes = {
  skills: PropTypes.array,
  requestForPostJob: PropTypes.object,
  skill_tags: PropTypes.object,
  chooseCategory: PropTypes.func,
  chooseSkillCategory: PropTypes.func,
  getSkillTags: PropTypes.func,
  addSkillTag: PropTypes.func,
  deleteSkillTag: PropTypes.func,
  openSkillTagsList: PropTypes.func
}

export default ChooseSkillCategory;