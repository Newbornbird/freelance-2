import React, { Component } from 'react';

class CheckboxPosted extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'post',
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
          Posted:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input 
              name='i24' 
              type="checkbox" 
              id="checkbox-2.1" 
              checked={ this.state.activeCheckbox['i24'] ? true : false  } 
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
              </input>
            <label for="checkbox-2.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">24h</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='i1w' 
              type="checkbox" 
              id="checkbox-2.2" 
              checked={ this.state.activeCheckbox['i1w'] ? true : false  }
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-2.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">1w</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='i3d' 
              type="checkbox" 
              id="checkbox-2.3" 
              checked={ this.state.activeCheckbox['i3d'] ? true : false  } 
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-2.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">3d </span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              name='m_1w' 
              type="checkbox" 
              id="checkbox-2.4" 
              checked={ this.state.activeCheckbox['m_1w'] ? true : false  } 
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-2.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">&gt; 1 W</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxPosted;