import React, { Component } from 'react';
import SkillTagItem from './SkillTagItem';

class ChooseSkillCategory extends Component {
  render() {
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
              { this.props.skills.map( skill => 
                  (<div className="checkbox-block" key={ skill.id }>
                    <input 
                      type="checkbox" 
                      id={"cat" + skill.id } 
                      name={ skill.name } 
                      onChange={ () => { this.props.CHOOSE_CATEGORY(skill) } }
                      checked={ this.props.requestForPostJob.category.name === skill.name }
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
        <div className="skill-subcat" style={ this.props.requestForPostJob.category.name ? {  } : { 'display': 'none' } }>
          <div className="flexbox justify-space-between form-block-wrapper">
            <div className="skill-block">
              <div className="skill-block-title">
                { this.props.requestForPostJob.category.name ? this.props.requestForPostJob.category.name : '' }
              </div>
              <div className="skill-block-list">
                <form>
                  { this.props.requestForPostJob.category.name ? 
                    this.props.requestForPostJob.category.skill_categories.map( (subSkill, index) => (
                      <div className="checkbox-block" key={ index }>
                        <input 
                          type="checkbox" 
                          id={"math-" + index} 
                          name='' 
                          onChange={ () => { this.props.CHOOSE_SKILL_CATEGORY(index, this.props.requestForPostJob.category.skill_categories) } } 
                          checked={ this.props.requestForPostJob.category.skill_categories[index].selected } />
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
                  onChange={ (event) => { this.props.GET_SKILL_TAGS(event) } }
                  onFocus={ () => { this.props.OPEN_SKILL_TAGS_LIST() } }
                />
              </form>
              <ul style={ this.props.skill_tags.skill_tags.length && this.props.skill_tags.dropDownMenu ? 
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
                { this.props.skill_tags.skill_tags.length ? 
                    this.props.skill_tags.skill_tags.map( (skill_tag, index) => ( 
                      <SkillTagItem  
                        ADD_SKILL_TAG = { this.props.ADD_SKILL_TAG }
                        key={ index }
                        requestForPostJob = { this.props.requestForPostJob }
                        skill_tags = { this.props.skill_tags }
                        name = { skill_tag.name }
                        index = { index } />
                        
                  ) ) : ''}
              </ul>
              <div className="skill-tags-block clearfix">
                { this.props.requestForPostJob.skill_tags[0] ? this.props.requestForPostJob.skill_tags.map( (skill_tag, index) => (
                  <div 
                    className="skill-tag"
                    key={ index }
                    onClick={ () => { this.props.DELETE_SKILL_TAG( this.props.requestForPostJob.skill_tags, index ) } }>
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

export default ChooseSkillCategory;