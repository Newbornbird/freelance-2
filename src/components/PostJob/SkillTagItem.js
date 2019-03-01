import React, { Component } from 'react';


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
    return (
        <li 
          // key={ index }
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
              this.props.ADD_SKILL_TAG( this.props.requestForPostJob.skill_tags, this.props.skill_tags.skill_tags[this.props.index] ) 
            } }
            onMouseOver = { this.makeActive }
            onMouseOut = { this.makeInActive }>
          { this.props.name.toUpperCase() }
        </li> 
     
    )
  }
}

export default SkillTagItem;