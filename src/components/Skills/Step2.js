import React, { Component } from 'react';
import SkillTagItemForSkills from './SkillTagItemForSkills';


class Step2 extends Component {
  
  render() {
    return (
      <div className="step-2">
        <div className="skill-subcat">
          <div className="flexbox justify-space-between">
            <div className="skill-block">
              <div className="skill-block-title">{ this.props.addingSkillsStatus.chosenCategory.name }</div>
              <div className="skill-block-list">
                <form>
                  { this.props.usersSkills
                    .find( skill => skill.name === this.props.addingSkillsStatus.chosenCategory.name )
                    .skill_categories.map( (category, index) => (
                      <div className="checkbox-block" key={ index }>
                        <input 
                          type="checkbox" 
                          id={"math-" + index}
                          checked={ category.selected }
                          onChange={ (event) => { 
                            this.props.CHANGE_USERS_SKILL_CATEGORIES( 
                              this.props.addingSkillsStatus.chosenCategory.id,
                              this.props.usersSkills,
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
                  onChange={ (event) => { this.props.GET_SKILL_TAGS(event) } }
                  onFocus={ () => { this.props.OPEN_SKILL_TAGS_LIST() } }
                  />
              </form>
              <ul style={ this.props.skill_tags.skill_tags.length && this.props.skill_tags.dropDownMenu ? 
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
                { this.props.skill_tags.skill_tags.length ? 
                    this.props.skill_tags.skill_tags.map( (skill_tag, index) => ( 
                      <SkillTagItemForSkills  
                        CHANGE_USERS_SKILL_TAGS = { this.props.CHANGE_USERS_SKILL_TAGS }
                        addingSkillsStatus = { this.props.addingSkillsStatus }
                        usersSkills = { this.props.usersSkills }
                        key={ index }
                        skill_tags = { this.props.skill_tags }
                        name = { skill_tag.name }
                        index = { index } />
                        
                  ) ) : ''}
              </ul>
              <div className="skill-tags-block clearfix">
                { this.props.usersSkills[this.props.addingSkillsStatus.chosenCategory.id - 1].skill_tags.length ? 
                    this.props.usersSkills[this.props.addingSkillsStatus.chosenCategory.id - 1].skill_tags.map( skill_tag => (
                  <div className="skill-tag" 
                    onClick={ () => { this.props.DELETE_SKILL_TAG_FOR_SKILLS(
                      this.props.addingSkillsStatus.chosenCategory.id, 
                      this.props.usersSkills, 
                      this.props.skill_tags.skill_tags[this.props.index]
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

export default Step2;