import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SkillTagItemForSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  makeActive = () => {
    this.setState({ isActive: true });
  };

  makeInActive = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { changeUsersSkillTags, addingSkillsStatus, usersSkills, skill_tags, name, index } = this.props;
    return (
        <li 
          style={ this.state.isActive ? 
            ? {
              backgroundColor: '#f5f5f5', 
                padding: '3px 0px 3px 0px',
                marginLeft: '-20px',
                cursor: 'pointer',
              }
            : {
                backgroundColor: 'white',
                padding: '3px 0px 3px 0px',
              marginLeft: '-20px',
                cursor: 'pointer',
              }
        }
        onClick={() => {
          changeUsersSkillTags(addingSkillsStatus.chosenCategory.id, usersSkills, skill_tags.skill_tags[index]);
        }}
            onMouseOver = { this.makeActive }
            onMouseOut = { this.makeInActive }>
        {name.toUpperCase() + 1}
      </li>
    );
  }
}

SkillTagItemForSkills.propTypes = {
  changeUsersSkillTags: PropTypes.func,
  addingSkillsStatus: PropTypes.object,
  usersSkills: PropTypes.array,
  skill_tags: PropTypes.object,
  name: PropTypes.number,
  index: PropTypes.object,
};

export default SkillTagItemForSkills;
