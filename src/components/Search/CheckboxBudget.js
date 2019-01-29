import React, { Component } from 'react';

class CheckboxBudget extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      queryParamKey: 'bud',
      activeCheckbox: {}
      
    }
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  changeCheckbox = (event) => {
    this.setState( { activeCheckbox: { [event.target.name]: event.target.checked } } );
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">
          Languages:
        </div>
        <div className={ this.state.isOpen ? "filter-dropdown-block clearfix open" : "filter-dropdown-block clearfix" }>
          <button onClick={this.openCloseFilter} type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">Budget:</span>
              <span className="icon icon-down-arrow"></span>
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top"></span>
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                <div className="checkbox-block">
                  <input
                    checked={ this.state.activeCheckbox['i0_100'] ? true : false  } 
                    name='i0_100' 
                    type="checkbox" 
                    id="checkbox-8.1"
                    onClick={ (event) => { 
                      this.changeCheckbox(event);
                      this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event);
                    } }>
                  </input>
                    <label for="checkbox-8.1">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">$0 - $100</span>
                    </label>
                </div>
                <div className="checkbox-block">
                  <input
                    checked={ this.state.activeCheckbox['i100_300'] ? true : false  }  
                    name="i100_300" 
                    type="checkbox" 
                    id="checkbox-8.2"
                    onClick={ (event) => { 
                      this.changeCheckbox(event);
                      this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event);
                    } }>
                  </input>
                    <label for="checkbox-8.2">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">$100 - $300</span>
                    </label>
                </div>
                <div className="checkbox-block">
                  <input
                    checked={ this.state.activeCheckbox['i300_1000'] ? true : false  }  
                    name="i300_1000" 
                    type="checkbox" 
                    id="checkbox-8.3"
                    onClick={ (event) => { 
                      this.changeCheckbox(event);
                      this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event);
                    } }>
                  </input>
                    <label for="checkbox-8.3">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">$300 - $1000</span>
                    </label>
                </div>
                <div className="checkbox-block">
                  <input
                    checked={ this.state.activeCheckbox['more_1000'] ? true : false  } 
                    name="more_1000" 
                    type="checkbox" 
                    id="checkbox-8.4"
                    onClick={ (event) => { 
                      this.changeCheckbox(event);
                      this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event);
                    } }>
                  </input>
                    <label for="checkbox-8.4">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">> $1000</span>
                    </label>
                </div> 
                <div className="checkbox-block">
                  <input
                    checked={ this.state.activeCheckbox['undefined'] ? true : false  }  
                    name="undefined" 
                    type="checkbox" 
                    id="checkbox-8.5"
                    onClick={ (event) => { 
                      this.changeCheckbox(event);
                      this.props.SEND_JOB_REQUEST_STR(this.props.request, this.state.queryParamKey, event);
                    } }>
                  </input>
                    <label for="checkbox-8.5">
                      <span className="filter-checkbox">
                        <span className="icon icon-check-mark"></span>
                      </span>
                      <span className="checkbox-text">Not defined (Empty)</span>
                    </label>
                </div>                                                           
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckboxBudget;