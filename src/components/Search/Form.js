import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryParamKey: 'q',
      queryParamValue: ''
    }
  }

  // changeQueryParamValue = (event) => {
  //   this.setState( { queryParamValue: event.target.value } );
  // }

  render() {
    return(
      <div className="search-form">
        <form 
          className="my-search-form" 
          role="search"
          onSubmit={ (event) => {
            event.preventDefault();
            this.props.CHANGE_CHECKBOX_DATA_NAME(this.props.inputData, this.props.q);
          } }>
          <input 
            name="q" 
            type="text" 
            className="form-control" 
            placeholder="Search"
            // onChange={ (event) => { this.changeQueryParamValue(event) } }
            onChange={ (event) => { this.props.CHANGE_INPUT_STRING_VALUE(event) } }
            value={ this.props.q }  
            />
          <div className="search-filter radio-block">
          <div className="radio">
            <input type="radio" name="optionsRadios" id="option-jobs" value="option1"/>
            <label htmlFor="option-jobs">
              <span className="radio-text"><Link to="/board/search/job">Jobs</Link></span>
            </label>
          </div>
          <div className="radio">
            <input type="radio" name="optionsRadios" id="option-talents" value="option2"/>
            <label htmlFor="option-talents">
              <span className="radio-text"><Link to="/board/search/talent">Talents</Link></span>
            </label>
          </div>
        </div>
        <a 
          href="#" 
          type="submit" 
          className="btn-search"
          onClick = { () => { this.props.CHANGE_CHECKBOX_DATA_NAME(this.props.inputData, this.props.q) } }>
          <i className="icon icon-loupe">
          </i>
        </a>
        </form>
      </div>
    )
  }
}

export default Form;
