import React, { Component } from 'react';

class CheckboxSTSTalent extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'skill',
      activeCheckbox: {}
    }
  }

  changeCheckbox = (event) => {
    this.setState( { activeCheckbox: { [event.target.name]: event.target.checked } } );
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">
          Skill Test Score:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input 
              name='i_5' 
              type="checkbox" 
              id="checkbox-3.1" 
              checked={ this.state.activeCheckbox['i_5'] ? true : false  } 
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_TALENT_REQUEST_STR(this.props.requestTalent, this.state.queryParamKey, event) } }>
              </input>
            <label for="checkbox-3.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">Best(5)</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='i_5_4' 
              type="checkbox" 
              id="checkbox-3.2" 
              checked={ this.state.activeCheckbox['i_5_4'] ? true : false  }
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_TALENT_REQUEST_STR(this.props.requestTalent, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-3.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">5-4.6</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='i_4' 
              type="checkbox" 
              id="checkbox-3.3" 
              checked={ this.state.activeCheckbox['i_4'] ? true : false  } 
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_TALENT_REQUEST_STR(this.props.requestTalent, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-3.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">4.6-4</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='l_4' 
              type="checkbox" 
              id="checkbox-3.4" 
              checked={ this.state.activeCheckbox['l_4'] ? true : false  } 
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_TALENT_REQUEST_STR(this.props.requestTalent, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-3.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">4</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxSTSTalent;