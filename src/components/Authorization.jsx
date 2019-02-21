import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'; 
import Auth from 'j-toker';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { SIGN_IN, CHANGE_USERNAME_OR_PASSWORD } from '../actions'; 

export const authConfig = Auth.configure({
  apiUrl: 'https://floating-atoll-63112.herokuapp.com/api',
  storage: 'localStorage'
});

class Authorization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isLogin: false
    }

  }

  handleChange = (event) => {
    this.setState(
        {
          [event.target.name]: event.target.value
        }
    )
    
  } 

  handleRegistrationClick = () => {
    Auth.emailSignUp({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password
      
    })
      .then( () =>  {
        this.setState({
          // sent_email: this.state.email,
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          // password_confirmation: ''
          
          
        });
      })
      .catch( (resp) => {
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          errors: resp.data.errors
        });
        // console.log(resp.data.errors);
      });
  };

  handleSighIn = () => {
    Auth.emailSignIn({
      email: this.state.email,
      password: this.state.password
    })
    .then( (data) =>  {
      console.log(data);

      this.setState({
        email: '',
        password: '',
        isLogin: true
      });
      
    })
    .catch( (resp) => {
      this.setState({
        email: '',
        password: '',
        errors: resp.data.errors
      });
      
    });
  };

  handleSighOut = () => {
    Auth.signOut();
  }

  getJobs = () => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: {'exp':'junior,expert'} },
        headers: { 'access-token': token }
      }
    )
      .then(res => {
        const jobs = res.data;
        console.log(jobs)
      })
      .catch( (error) => {
        console.log(error);
      } )
  }

  getTalents = () => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
      { params: { q: {} },
        headers: { 'access-token': token }
      }
    )
      .then(respond => {
        console.log(respond);
        
      })
      .catch( (error) => {
        console.log(error);
      } )
  }



  render() {
    return (
      <div style={{ 'width': '400px', 'margin': 'auto' }}>
        <div style={ {'border': 'solid 2px red', 'padding': '10px', 'border-radius': '10px' } }>
          <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="firstName" className="mr-sm-2">Name</Label>
              <Input 
                type="text" 
                name="firstName" 
                id="firstName" 
                value = { this.state.firstName }
                onChange = { (event) => {
                  this.handleChange(event) 
                }}
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="lastName" className="mr-sm-2">Last name</Label>
              <Input 
                type="text" 
                name="lastName" 
                id="lastName" 
                value = { this.state.lastName }
                onChange = { (event) => {
                  this.handleChange(event) 
                }}
                />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input 
                type="email" 
                name="email" 
                id="exampleEmail" 
                value = { this.state.email }
                onChange = { (event) => {
                  this.handleChange(event) 
                }} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input 
                type="password" 
                name="password" 
                id="examplePassword"
                value = { this.state.password } 
                onChange = { (event) => {
                  this.handleChange(event) 
                }} />
            </FormGroup>
            
            <Button
              className='mt-4'
              onClick = { this.handleRegistrationClick }
              >Зарегистрироваться
            </Button>
          </Form>
        </div>
        <div style={{ 'border': 'solid 2px blue', 'margin-top': '50px', 'padding': '10px', 'border-radius': '10px' }}>
          <Form>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="loginEmail" className="mr-sm-2">Email</Label>
              <Input 
                type="email" 
                name="email" 
                id="loginEmail" 
                value = { this.props.authorization.email } 
                onChange = { (event) => {
                  this.props.CHANGE_USERNAME_OR_PASSWORD(event) 
                }} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input 
                type="password" 
                name="password" 
                id="exmPassword"
                value = { this.props.authorization.password } 
                onChange = { (event) => {
                  this.props.CHANGE_USERNAME_OR_PASSWORD(event) 
                }} />
            </FormGroup>
            
            <Button
              className='mt-4'
              onClick = { 
                () => { this.props.SIGN_IN(this.props.authorization.email, this.props.authorization.password)  } }
              >Войти
            </Button>
          </Form>
          
        </div>
        <div>
          {/* { this.isLogin ? <Button onClick = { this.handleSighOut }>Выйти</Button> : <div></div>} */}
          <Button onClick = { this.getJobs }>Get</Button>
        </div>
        { this.props.authorization.isLogin ? (<Redirect to="/board"/>) : <div>Нужно залогиниться</div> }
        {/* { this.state.isLogin ? (<Redirect to={{ pathname: "/login", search: "?utm=your+face", state: { referrer: 1 } }}/>) : <div>Нужно залогиниться</div> } */}
        {/* { !this.state.isLogin ? <Redirect to="/"/> : <div></div> }  */}
      </div>
       
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authorization: state.authorization
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    CHANGE_USERNAME_OR_PASSWORD: bindActionCreators(CHANGE_USERNAME_OR_PASSWORD, dispatch), 
    SIGN_IN: bindActionCreators(SIGN_IN, dispatch) 
  }
}

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Authorization));