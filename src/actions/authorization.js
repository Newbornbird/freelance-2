import Auth from 'j-toker';

export function CHANGE_USERNAME_OR_PASSWORD (event) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_USERNAME_OR_PASSWORD',
      payload: { [event.target.name]: event.target.value }
    })
  }
}

export function SIGN_IN (email, password) {
  return dispatch => {
    Auth.emailSignIn({
      email: email,
      password: password
    })
    .then( (respond) =>  {
      console.log(respond);
      dispatch({
        type: 'SAVE_USER_DATA',
        payload: { userData: respond.data, isLogin: true } 
      })

      dispatch({
        type: 'CHANGE_USERNAME_OR_PASSWORD',
        payload: { email: '', password: '' } 
      })
    })
    .catch( (resp) => {
      console.log(resp);
    });
  }
}

export function SIGN_OUT() {
  return dispatch => {
    Auth.signOut();
    dispatch({
      type: 'SWITCH_SEARCH',
      payload: '/'
    })

    dispatch({
      type: 'MAKE_LOGIN_FALSE'
    })

    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE',
      payload: true
    })
  }
}

export function MAKE_REDIRECT_UNACTIVE() {
  return dispatch => {
    dispatch({
      type: 'MAKE_REDIRECT_UNACTIVE',
      payload: false
    })
  }
}

