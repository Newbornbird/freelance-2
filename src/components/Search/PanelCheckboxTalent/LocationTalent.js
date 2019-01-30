import React, { Component } from 'react';


class LocationTalent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      queryParamKey: 'loc'

    }
  }

  openCloseFilter = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  componentDidMount() {
    this.props.GET_LOCATIONS();
  }

  render() {
    return (
      <div className="filter-block">
        <div className="filter-title">
          Location:
        </div>
        <div className={ this.state.isOpen ? "filter-dropdown-block clearfix open" : "filter-dropdown-block clearfix" } >
          <button onClick={this.openCloseFilter} type="button" className="btn btn-default dropdown-toggle">
            <div className="flexbox justify-space-between">
              <span className="text">Country</span>
              <span className="icon icon-down-arrow"></span>
            </div>
          </button>
          <div className="dropdown-list">
            <div className="caret-block">
              <span className="caret-top"></span>
            </div>
            <div className="dropdown-list-wrapper">
              <div className="checkbox-list-block">

              { this.props.locations.map( (location, index) => {
                  return(
                    <div className="checkbox-block">
                      <input 
                        name={ location.name } 
                        type="checkbox" 
                        id={"checkbox-5." + (index + 1)}
                        onClick={ (event) => { 
                          this.props.SEND_TALENT_REQUEST_ARR(this.props.requestTalent, this.props.checkboxDataTalent, this.state.queryParamKey, event);
                        } }>
                      </input>
                      <label for={"checkbox-5." + (index + 1)}>
                        <span className="filter-checkbox">
                          <span className="icon icon-check-mark"></span>
                        </span>
                        <span className="checkbox-text">{ location.name }</span>
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

export default LocationTalent;