import React, { Component } from 'react';
import logo from '../images/logo.png';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Navigation extends Component {
  render() {
    return(
      <nav className="main-top-nav flexbox justify-space-between">
        <div className="logo">
          <a className="logo-link" href="index.html"><img src={logo} height="39" width="auto" alt='logo'/></a>
        </div>
        <div type="button" className="humburger-icon">
          <button type="button" className="btn btn-bg-transparent"><span className="icon icon-menu"></span></button>
        </div>
        <section className="nav-mobile flexbox justify-space-between">
          <section className="nav-tablet flexbox justify-space-center">
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
            <div className="nav-list">
              <ul className="flexbox justify-space-between">
                <li className="active">
                    <a href="#">FIND <div className="caret"></div></a>
                </li>
                <li>
                    <a href="profile.html">YOUR OFFICE <div className="caret"></div></a>
                </li>
                <li>
                    <a href="#">HOW IT WORKS <div className="caret"></div></a>
                </li>
                <li>
                    <a href="#">ASK US <div className="caret"></div></a>
                </li>
              </ul>
            </div>
          </section>
          <div className="user-box">
            <div 
              className="user-photo" 
              // style={ this.props.authorization.userData ? 
              //           { 'backgroundImage': 'url(' + this.props.authorization.userData.image.url + ')' } : {  } }
            >
              <i className="notif"></i>
            </div>
            <div className="user-box-nav dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              { this.props.authorization.userData.full_name }
              <span className="caret">
              </span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#" data-toggle="modal" data-target="#sign-up-modal">Sign Up</a></li>
              <li><a href="#" data-toggle="modal" data-target="#massege-dialogs-modal">Messages</a></li>
              <li><a href="#">Something else here</a></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </div>
          </div>
        </section>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authorization: state.authorization
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // SWITCH_SEARCH: bindActionCreators(SWITCH_SEARCH, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));