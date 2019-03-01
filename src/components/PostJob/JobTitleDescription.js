import React, { Component } from 'react';

class JobTitleDescription extends Component {
  render() {
    return (
      <div className="form-block">
        <div className="post-job-inputs form-block-wrapper">
          <input
            name='title' 
            type="text" 
            placeholder="Job Title" 
            className="job-title form-control" 
            style={ this.props.requestForPostJob.title ? {  } : { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }}
            value={ this.props.requestForPostJob.title }
            onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
            />
          <textarea 
            placeholder="Job Description" 
            className="form-control job-descr" 
            rows="4"
            style={ this.props.requestForPostJob.description ? {  } : { 'backgroundColor': '#fff1f5', 'border': '2px solid #cb001f' }}
            name='description'
            onChange={ (event) => { this.props.CHANGE_STR_INP_FOR_POSTJOB(event) } }
            value={ this.props.requestForPostJob.description }>
          </textarea>
        </div>
      </div>
    )
  }
}

export default JobTitleDescription;