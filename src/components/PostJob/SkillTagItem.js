import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SkillTagItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    }
  }

  makeActive = () => {
    this.setState({ isActive: true })
  }

  makeInActive = () => {
    this.setState({ isActive: false })
  }


  render() {
    let { addSkillTag, requestForPostJob, skill_tags, name, index } = this.props;
    return (
        <li 
          style={ this.state.isActive ? 
            {
              backgroundColor: '#f5f5f5', 
                padding: '3px 0px 3px 0px',
                marginLeft: '-20px',
                cursor: 'pointer'
            } :
            { 
              backgroundColor: 'white', 
              padding: '3px 0px 3px 0px',
              marginLeft: '-20px',
              cursor: 'pointer' 
            } }
            onClick={ () => { 
              addSkillTag( requestForPostJob.skill_tags, skill_tags.skill_tags[index] ) 
            } }
            onMouseOver = { this.makeActive }
            onMouseOut = { this.makeInActive }>
          { name.toUpperCase() }
        </li> 
     
    )
  }
}

SkillTagItem.propTypes = {
  addSkillTag: PropTypes.func,
  requestForPostJob: PropTypes.object,
  skill_tags: PropTypes.object,
  name: PropTypes.string,
  index: PropTypes.number
}

export default SkillTagItem;