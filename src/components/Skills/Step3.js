import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Step3 extends Component {
  componentDidMount() {
    this.props.getUsersSkills();
  }

  render() {
    const { usersSkills, deleteUsersSkills, editUsersSkills } = this.props;
    return (
      <div className='step-3'>
        {usersSkills
          .filter(skill => skill.selected === true)
          .map(skill => (
            <div className='skill-subcat skill-subcat--item' key={skill.id}>
              <div className='flexbox justify-space-between'>
                <div className='skill-block'>
                  <div className='skill-block-title'>{skill.name}</div>
                  <div className='skill-block-list'>
                    <form>
                      {skill.skill_categories
                        .filter(skill_category => skill_category.selected === true)
                        .map((skill_category, index) => (
                          <div className='checkbox-block' key={skill_category.id}>
                            <input type='checkbox' id={`math-${index}`} defaultChecked />
                            <label htmlFor={`math-${index}`}>
                              <span className='checkbox-circle'>
                                <span className='icon icon-check-mark' />
                              </span>
                              <span className='checkbox-text'>{skill_category.name}</span>
                            </label>
                          </div>
                        ))}
                    </form>
                  </div>
                </div>
                <div className='skill-sub-block'>
                  <div style={{ display: 'block' }} className='skill-block-title'>
                    Skills
                  </div>
                  <div className='skill-tags-block clearfix'>
                    {skill.skill_tags.length
                      ? skill.skill_tags.map(skill_tag => (
                          <div key={skill_tag.id} className='skill-tag'>
                            {skill_tag.name}
                          </div>
                        ))
                      : ''}
                  </div>
                </div>
              </div>
              <div className='skill-block-footer' style={{ fontSize: '13px', color: '#15a4fa' }}>
                <button
                  style={{ background: 'none', border: 'none' }}
                  onClick={() => {
                    deleteUsersSkills(skill.id, usersSkills);
                  }}
                >
                  Delete
                </button>
                <button
                  style={{ background: 'none', border: 'none' }}
                  onClick={() => {
                    editUsersSkills(skill.name, skill.id);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        <div className='skill-subcat skill-subcat--new'>
          <div className='skill-block-title'>New Skill Category</div>
          <div className='flexbox justify-space-between'>
            <div className='skill-block'>
              <form>
                <div className='input-block'>
                  Category
                  <input type='text' placeholder='Insert your new category here..' />
                </div>
              </form>
            </div>
            <div className='skill-block'>
              <form>
                <div className='input-block'>
                  Subcategory
                  <input type='text' placeholder='Insert your new subcategory here..' />
                </div>
              </form>
            </div>
            <div className='skill-sub-block'>
              <div className='skill-block-title'>Skills</div>
              <form className='form-group'>
                <input type='text' className='form-control' placeholder='Write new skill' />
                <button className='add-btn btn btn-blue'>
                  <span className='icon icon-add' />
                </button>
              </form>
              <div className='skill-tags-block clearfix'>
                <div className='skill-tag'>Math</div>
                <div className='skill-tag'>Trigonometry</div>
              </div>
            </div>
          </div>
          <button type='button' className='btn btn-blue add-skill-btn'>
            Add Skill Category
          </button>
        </div>
        <div className='skills-footer'>
          {/* <a href="#">
            <span class="icon icon-add btn btn-blue add-btn"></span>
            Add Here New Teachers Skill Category
          </a> */}
        </div>
      </div>
    );
  }
}

Step3.propTypes = {
  usersSkills: PropTypes.array,
  addingSkillsStatus: PropTypes.object,
  getUsersSkills: PropTypes.func,
  editUsersSkills: PropTypes.func,
  deleteSkillTagForSkills: PropTypes.func,
};

export default Step3;
