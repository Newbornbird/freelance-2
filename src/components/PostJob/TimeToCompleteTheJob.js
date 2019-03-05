import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimeToCompleteTheJob extends Component {
  render() {
    let { requestForPostJob, changeCheckboxForPostJob,  changeStrInpForPostJob, 
      togglePeriodTypeList,  periodTypeIsOpened } = this.props;
    return (
      <div className="form-block-section job-time-block col-100">
        <div className="form-block-header">
          <div className="form-block-title">
            Estimated time to complete the Job
          </div>
        </div>
        <div className="btn-group">
        <input 
            type="text"
            name='period' 
            style={ { 
              'position': 'relative', 
              'float': 'left', 
              'width': '78px', 
              'height': '33px', 
              'borderRight': '0',
              'textAlign': 'center',
              'borderColor': '#cccccc',
              'boxShadow': 'none',
              'padding': '6px 12px',
              'fontSize': '14px',
              'backgroundColor': '#fff',
              'backgroundImage': 'none',
              'border': '1px solid #d9dada',
              'borderRadius': '30px',
              'borderBottomRightRadius': '0',
              'borderTopRightRadius': '0' } }
              value={ requestForPostJob.period }
              onChange={ (event) => { changeStrInpForPostJob(event) } }
            />
          <button className="btn btn-bg-transparent">
            <div className={ periodTypeIsOpened ? "my-select-box open" : "my-select-box" }>
                <span className="my-select-result" onClick={ togglePeriodTypeList }>
                  <span className="text" >
                    { requestForPostJob.period > 1 ? 
                      requestForPostJob.period_type.toUpperCase() + 'S' : requestForPostJob.period_type.toUpperCase()}
                  </span> 
                  <span className="caret"></span>
                </span>
                <div className="my-select-options">
                  <div className="radio-block">
                  <div className="radio">
                    <input 
                      type="checkbox" 
                      name="day" 
                      id="d-term" value="d-term" 
                      checked=""
                      onChange={ (event) => { 
                        changeCheckboxForPostJob(event, 'period_type');
                        togglePeriodTypeList();
                          } }
                      />
                    <label htmlFor="d-term">
                      <span className="radio-text">Day</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input 
                      type="checkbox" 
                      name="week" 
                      id="w-term" 
                      value="w-term" 
                      onChange={ (event) => { 
                        changeCheckboxForPostJob(event, 'period_type');
                        togglePeriodTypeList() } }
                      />
                    <label htmlFor="w-term">
                      <span className="radio-text">Week</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input 
                      type="checkbox" 
                      name="month" 
                      id="m-term" 
                      value="m-term" 
                      onChange={ (event) => { 
                        changeCheckboxForPostJob(event, 'period_type');
                        togglePeriodTypeList() } }
                      />
                    <label htmlFor="m-term">
                      <span className="radio-text"> Month</span>
                    </label>
                  </div>
                  <div className="radio">
                    <input 
                      type="checkbox" 
                      name="year" 
                      id="y-term" 
                      value="y-term" 
                      onChange={ (event) => { 
                        changeCheckboxForPostJob(event, 'period_type');
                        togglePeriodTypeList() } }
                      />
                    <label htmlFor="y-term">
                      <span className="radio-text">Year</span>
                    </label>
                  </div>
                </div>	
                </div>
            </div>
          </button>
          
        </div>
      </div>
    )
  }
}

TimeToCompleteTheJob.propTypes = {
  requestForPostJob: PropTypes.object,
  changeStrInpForPostJob: PropTypes.func,
  changeCheckboxForPostJob: PropTypes.func,
  togglePeriodTypeList: PropTypes.func,
  periodTypeIsOpened: PropTypes.bool
}

export default TimeToCompleteTheJob;