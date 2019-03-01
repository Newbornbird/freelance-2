import React, { Component } from 'react';

class LanguageTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      queryParamKey: 'lang'
    }
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    this.props.GET_LANGUAGES();
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
              <span className="text">{'Languages ' + '(' + 
                (this.props.inputData[this.state.queryParamKey] ?
                this.props.inputData[this.state.queryParamKey].split(',').length : 'All')  
                + ')'}</span>
              <span className="icon icon-down-arrow"></span>
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top"></span>
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                { this.props.languages.map( (language, index) => {
                    return (
                      <div className="checkbox-block">
                        <input 
                          name={ language.name } 
                          type="checkbox" 
                          id={ "checkbox-6." + (index + 1) }
                          onClick={ (event) => { 
                            this.props.CHANGE_CHECKBOX_DATA_ARR(this.state.queryParamKey, this.props.inputData, event)
                          } }
                          checked={ this.props.inputData[this.state.queryParamKey] ? 
                                    (this.props.inputData[this.state.queryParamKey].indexOf(language.name) >= 0 ? true : false) : false }>
                        </input>
                          <label for={ "checkbox-6." + (index + 1) }>
                            <span className="filter-checkbox">
                              <span className="icon icon-check-mark"></span>
                            </span>
                            <span className="checkbox-text">{ language.name }</span>
                          </label>
                      </div>
                    )
                  } ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LanguageTalent;