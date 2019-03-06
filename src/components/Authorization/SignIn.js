import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends Component {
  render() {
    const { authorization, changeUsernameOrPassword, signIn } = this.props;
    return (
      <div style={{ border: 'solid 2px blue', marginTop: '50px', padding: '10px', borderRadius: '10px' }}>
        <Form>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='loginEmail' className='mr-sm-2'>
              Email
            </Label>
            <Input
              type='email'
              name='email'
              id='loginEmail'
              value={authorization.email}
              onChange={event => {
                changeUsernameOrPassword(event);
              }}
            />
          </FormGroup>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='examplePassword' className='mr-sm-2'>
              Password
            </Label>
            <Input
              type='password'
              name='password'
              id='exmPassword'
              value={authorization.password}
              onChange={event => {
                changeUsernameOrPassword(event);
              }}
            />
          </FormGroup>
          <Button
            disabled={!authorization.SignInIsActive}
            className='mt-4'
            onClick={() => {
              signIn(authorization.email, authorization.password);
            }}
          >
            Войти
          </Button>
        </Form>
      </div>
    );
  }
}

SignIn.propTypes = {
  authorization: PropTypes.object,
  changeUsernameOrPassword: PropTypes.func,
  signIn: PropTypes.func,
};

export default SignIn;
