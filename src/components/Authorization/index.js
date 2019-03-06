import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from 'j-toker';
import { Redirect } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { SIGN_IN, CHANGE_USERNAME_OR_PASSWORD, MAKE_REDIRECT_UNACTIVE } from '../../actions';

export const authConfig = Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api',
  storage: 'localStorage',
});

class Authorization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isLogin: false,
      signUpActive: true,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleRegistrationClick = () => {
    this.setState({ signUpActive: false });

    Auth.emailSignUp({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    })
      .then(() => {
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          signUpActive: true,
        });
      })
      .catch(resp => {
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          errors: resp.data.errors,
          signUpActive: true,
        });
      });
  };

  componentDidMount() {
    this.props.makeRedirectUnActive();
  }

  render() {
    return (
      <div style={{ width: '400px', margin: 'auto' }}>
        <SignUp
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          password={this.state.password}
          signUpActive={this.state.signUpActive}
          handleChange={this.handleChange}
          handleRegistrationClick={this.handleRegistrationClick}
        />
        <SignIn
          authorization={this.props.authorization}
          changeUsernameOrPassword={this.props.changeUsernameOrPassword}
          signIn={this.props.signIn}
        />
        <div>
          {/* { this.isLogin ? <Button onClick = { this.handleSighOut }>Выйти</Button> : <div></div>} */}
          {/* <Button onClick = { this.getJobs }>Get</Button> */}
        </div>
        {this.props.authorization.isLogin ? <Redirect to='/board' /> : <div>Нужно залогиниться</div>}
        {/* { this.state.isLogin ? (<Redirect to={{ pathname: "/login", search: "?utm=your+face", state: { referrer: 1 } }}/>) : <div>Нужно залогиниться</div> } */}
        {/* { !this.state.isLogin ? <Redirect to="/"/> : <div></div> }  */}
      </div>
    );
  }
}

Authorization.propTypes = {
  authorization: PropTypes.object,
  changeUsernameOrPassword: PropTypes.func,
  signIn: PropTypes.func,
};

const mapStateToProps = state => ({
  authorization: state.authorization,
});

const mapDispatchToProps = dispatch => ({
  changeUsernameOrPassword: bindActionCreators(CHANGE_USERNAME_OR_PASSWORD, dispatch),
  signIn: bindActionCreators(SIGN_IN, dispatch),
  makeRedirectUnActive: bindActionCreators(MAKE_REDIRECT_UNACTIVE, dispatch),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Authorization),
);
