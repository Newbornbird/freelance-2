import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LanguageTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      queryParamKey: 'lang',
    };
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  componentDidMount() {
    this.props.getLanguages();
  }

  render() {
    const { changeCheckboxDataArr, languages, inputData } = this.props;
    return (
      <div className="filter-block">
        <div className="filter-title">Languages:</div>
        <div className={this.state.isOpen ? 'filter-dropdown-block clearfix open' : 'filter-dropdown-block clearfix'}>
          <button onClick={this.openCloseFilter} type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">{`Languages(
                ${inputData[this.state.queryParamKey] ? inputData[this.state.queryParamKey].split(',').length : 'All'}  
                )`}</span>
              <span className="icon icon-down-arrow" />
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top" />
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">
                {languages.map((language, index) => (
                  <div className="checkbox-block" key={index}>
                        <input 
                          name={ language.name } 
                          type="checkbox" 
                          id={ `checkbox-6.${  index + 1}` }
                          onChange={ (event) => { 
                            changeCheckboxDataArr(this.state.queryParamKey, inputData, event)
                      }}
                          checked={ inputData[this.state.queryParamKey] ? 
                          ? inputData[this.state.queryParamKey].indexOf(language.name) >= 0
                            ? true
                            : false
                          : false
                      }
                    />
                    <label htmlFor={'checkbox-6.' + (index + 1)}>
                      <span className="filter-checkbox">
                              <span className="icon icon-check-mark"></span>
                            </span>
                            <span className="checkbox-text">{ language.name }</span>
                          </label>
                      </div>
                    ) ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LanguageTalent.propTypes = {
  inputData: PropTypes.object,
  languages: PropTypes.array,
  getLanguages: PropTypes.func,
  changeCheckboxDataArr: PropTypes.func,
};

export default LanguageTalent;
