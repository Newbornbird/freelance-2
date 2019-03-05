import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Language extends Component {
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
    this.props.getLanguages();
  }

  render() {
    let { changeCheckboxDataArr, languages, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">
          Languages:
        </div>
        <div className={ this.state.isOpen ? "filter-dropdown-block clearfix open" : "filter-dropdown-block clearfix" }>
          <button onClick={this.openCloseFilter} type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">
              { `Languages (
                  ${(inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].split(',').length : 'All')} 
                )` }
              </span>
              <span className="icon icon-down-arrow"></span>
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top"></span>
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                { languages.map( (language, index) => {
                    return (
                      <div className="checkbox-block" key={ index + 'b' }>
                        <input
                          name={ language.name } 
                          type="checkbox" 
                          id={ "checkbox-5." + (index + 1) }
                          onChange={ (event) => { 
                            changeCheckboxDataArr(this.state.queryParamKey, inputData, event);
                          } }
                          checked={ inputData[this.state.queryParamKey] ? 
                                      (inputData[this.state.queryParamKey].indexOf(language.name) >= 0 ? true : false) : false }>
                        </input>
                          <label htmlFor={ "checkbox-5." + (index + 1) }>
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

Language.propTypes = {
  inputData: PropTypes.object,
  languages: PropTypes.array,
  changeCheckboxDataArr: PropTypes.func,
  getLanguages: PropTypes.func
}

export default Language;