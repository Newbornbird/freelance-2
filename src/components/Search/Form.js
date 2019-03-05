import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParamKey: 'q',
      queryParamValue: '',
    };
  }

  render() {
    const { inputData, changeCheckboxDataName, changeInputStringValue, q } = this.props;
    return (
      <div className="search-form">
        <form
          className="my-search-form"
          role="search"
          onSubmit={event => {
            event.preventDefault();
            changeCheckboxDataName(inputData, q);
          }}
        >
          <input
            name="q"
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={event => {
              changeInputStringValue(event);
            }}
            value={q}
          />
          <div className="search-filter radio-block">
            <div className="radio">
              <input type="radio" name="optionsRadios" id="option-jobs" value="option1" />
              <label htmlFor="option-jobs">
                <span className="radio-text">
                  <Link to="/board/search/job">Jobs</Link>
                </span>
              </label>
            </div>
            <div className="radio">
              <input type="radio" name="optionsRadios" id="option-talents" value="option2" />
              <label htmlFor="option-talents">
                <span className="radio-text">
                  <Link to="/board/search/talent">Talents</Link>
                </span>
              </label>
            </div>
          </div>
          <button
            style={{ border: 'none', background: 'none' }}
            type="submit"
            className="btn-search"
            onClick={() => {
              changeCheckboxDataName(inputData, q);
            }}
          >
            <i className="icon icon-loupe" />
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  inputData: PropTypes.object,
  changeCheckboxDataName: PropTypes.func,
  changeInputStringValue: PropTypes.func,
  q: PropTypes.string,
};

export default Form;
