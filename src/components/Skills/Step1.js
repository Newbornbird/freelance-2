import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Step1 extends Component {
  render() {
    let { usersSkills,  addingSkillsStatus, goToTheNextStep,  chooseCategoryForSkills } = this.props;
    return (
      <div className="step-1">
            <div className="skill-block skill-cat">
              <div className="skill-block-title">Choose  Your Skill Category</div>
              <div className="skill-block-list">
                <form>
                  { usersSkills[0] ? usersSkills.map( ( category, index ) => (
                    <div className="checkbox-block" key = { index }>
                      <input 
                        type="checkbox" 
                        id={ "cat-" + index }
                        name = { category.name }
                        checked={ addingSkillsStatus.chosenCategory.name === category.name }
                        onChange={ (event) => { chooseCategoryForSkills(event, category.id) } }
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
                onClick={ () => { goToTheNextStep( addingSkillsStatus.step ) } }>
                Next
              </button>
            </div>
          </div>
    )
  }
}

Step1.propTypes = {
  usersSkills: PropTypes.array,
	addingSkillsStatus: PropTypes.object,
	goToTheNextStep: PropTypes.func,
  chooseCategoryForSkills: PropTypes.func
}
	
export default Step1;
