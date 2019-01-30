import React, { Component } from 'react';

class CheckboxProposal extends Component {
  constructor() {
    super();
    this.state = {
      queryParamKey: 'prop',
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
          Proposals:
        </div>
        <div className="checkbox-list-block clearfix">
          <div className="checkbox-block">
            <input
              checked={ this.state.activeCheckbox['i0_5'] ? true : false  } 
              name='i0_5' 
              type="checkbox" 
              id="checkbox-9.1"
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-9.1">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">0-5</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={ this.state.activeCheckbox['i5_10'] ? true : false  } 
              name='i5_10' 
              type="checkbox" 
              id="checkbox-9.2"
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-9.2">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">5-10</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input 
              checked={ this.state.activeCheckbox['i10_20'] ? true : false  }
              name='i10_20' 
              type="checkbox" 
              id="checkbox-9.3"
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-9.3">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">10-20</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={ this.state.activeCheckbox['m_20'] ? true : false  } 
              name='m_20' 
              type="checkbox" 
              id="checkbox-9.4"
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-9.4">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">>20</span>
            </label>
          </div>
          <div className="checkbox-block">
            <input
              checked={ this.state.activeCheckbox['undefined'] ? true : false  } 
              name="undefined" 
              type="checkbox" 
              id="checkbox-9.5"
              onClick={ (event) => { 
                this.changeCheckbox(event);
                this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event) } }>
            </input>
            <label for="checkbox-9.5">
              <span className="filter-checkbox">
                <span className="icon icon-check-mark"></span>
              </span>
              <span className="checkbox-text">None</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxProposal;