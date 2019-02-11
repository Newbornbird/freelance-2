import React, {Component} from 'react';

class JobListFooter extends Component { 
  render() {
    return (
      <div className="job-boxes-footer">
        <button 
          className="btn btn-bg-transparent blue-color btn-bold" 
          style={ this.props.meta.next_page ? { } : {'display': 'none'} } 
          onClick={ () => { this.props.GET_MORE(this.props.inputData, this.props.meta, window.location.pathname) } }>
          Load more
        </button>
      </div>
    )
  }
}

export default JobListFooter;