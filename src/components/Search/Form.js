import React from 'react';

const Form = (props) => (
  <div className="search-form">
    <form className="my-search-form" role="search">
      <input type="text" className="form-control" placeholder="Search"/>
      <div className="search-filter radio-block">
      <div className="radio">
        <input type="radio" name="optionsRadios" id="option-jobs" value="option1" checked/>
        <label htmlFor="option-jobs">
          <span className="radio-text">Jobs</span>
        </label>
      </div>
      <div className="radio">
        <input type="radio" name="optionsRadios" id="option-talents" value="option2"/>
        <label htmlFor="option-talents">
          <span className="radio-text">Talents</span>
        </label>
      </div>
    </div>
    <a href="" type="submit" className="btn-search"><i className="icon icon-loupe"></i></a>
    </form>
  </div>
)

export default Form;
