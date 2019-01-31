import React, { Component } from 'react';

class Form extends Component {
  render() {
    return(
      <div className="search-form">
        {/* <button onClick = { () => { console.log(this.props) } }> КЛИК
        </button> */}
        <form className="my-search-form" role="search">
          <input 
            name="q" 
            type="text" 
            className="form-control" 
            placeholder="Search"
            onChange={ this.props.searchTalentIsActive ? 
              (event => { this.props.SAVE_CHECKBOX_DATA_TALENT(event.target.name, event.target.value) } ) :
              (event => { this.props.SAVE_CHECKBOX_DATA_JOB(event.target.name, event.target.value) } )
            }
            value={ this.props.searchTalentIsActive ? this.props.checkboxDataTalent['q'] : this.props.checkboxDataJob['q']}  
            />
          <div className="search-filter radio-block">
          <div className="radio">
            <input type="radio" name="optionsRadios" id="option-jobs" value="option1"/>
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
        <a 
          href="#" 
          type="submit" 
          className="btn-search"
          onClick = { this.props.searchTalentIsActive ?
            (() => { this.props.SEND_TALENT_REQUEST_NAME(this.props.requestTalent, this.props.checkboxDataTalent) } ) :
            (() => { this.props.SEND_JOB_REQUEST_NAME(this.props.request, this.props.checkboxDataJob) } )
          }>
          <i className="icon icon-loupe">
          </i>
        </a>
        </form>
      </div>
    )
  }
}

export default Form;
