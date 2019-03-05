import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JobListFooter extends Component {
  render() {
    const { meta, inputData, getMore } = this.props;
    return (
      <div className="job-boxes-footer">
        <button
          className="btn btn-bg-transparent blue-color btn-bold"
          style={meta.next_page ? {} : { display: 'none' }}
          onClick={() => {
            getMore(inputData, meta, window.location.pathname);
          }}
        >
          Load more
        </button>
      </div>
    );
  }
}

JobListFooter.propTypes = {
  getMore: PropTypes.func,
  meta: PropTypes.object,
  inputData: PropTypes.object,
};

export default JobListFooter;
