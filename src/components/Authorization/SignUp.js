import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends Component {
  render() {
    // handleChange = event => {};
    const { firstName, lastName, email, password, handleChange, handleRegistrationClick, signUpActive } = this.props;
    return (
      <div style={{ border: 'solid 2px red', padding: '10px', borderRadius: '10px' }}>
        <Form>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='firstName' className='mr-sm-2'>
              Name
            </Label>
            <Input
              type='text'
              name='firstName'
              id='firstName'
              value={firstName}
              onChange={event => {
                handleChange(event);
              }}
            />
          </FormGroup>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='lastName' className='mr-sm-2'>
              Last name
            </Label>
            <Input
              type='text'
              name='lastName'
              id='lastName'
              value={lastName}
              onChange={event => {
                handleChange(event);
              }}
            />
          </FormGroup>
          <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
            <Label for='exampleEmail' className='mr-sm-2'>
              Email
            </Label>
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              value={email}
              onChange={event => {
                handleChange(event);
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
              id='examplePassword'
              value={password}
              onChange={event => {
                handleChange(event);
              }}
            />
          </FormGroup>
          <Button disabled={!signUpActive} className='mt-4' onClick={handleRegistrationClick}>
            Зарегистрироваться
          </Button>
        </Form>
      </div>
    );
  }
}

SignUp.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  handleChange: PropTypes.func,
  handleRegistrationClick: PropTypes.func,
};

export default SignUp;
