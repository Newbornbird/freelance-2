import React, { Component } from 'react';


class Step1 extends Component {
  render() {
    return (
      <div className="step-1">
            <div className="skill-block skill-cat">
              <div className="skill-block-title">Choose  Your Skill Category</div>
              <div className="skill-block-list">
                <form>
                  { this.props.usersSkills[0] ? this.props.usersSkills.map( ( category, index ) => (
                    <div className="checkbox-block" key = { index }>
                      <input 
                        type="checkbox" 
                        id={ "cat-" + index }
                        name = { category.name }
                        checked={ this.props.addingSkillsStatus.chosenCategory.name === category.name }
                        onChange={ (event) => { this.props.CHOOSE_CATEGORY_FOR_SKILLS(event, category.id) } }
                        />
                      <label htmlFor={ "cat-" + index }>
                        <span className="checkbox-circle">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="checkbox-text">{ category.name }</span>
                      </label>
                    </div>
                  ) ) : '' }  
                </form>
              </div>
              <button 
                type="button" 
                className="btn btn-blue btn-bold step-2-toggler step-toggler"
                disabled={ !this.props.addingSkillsStatus.chosenCategory.name }
                onClick={ () => { this.props.GO_TO_THE_NEXT_STEP(this.props.addingSkillsStatus.step) } }>
                Next
              </button>
            </div>
          </div>
    )
  }
}

export default Step1;