import { handleActions } from 'redux-actions';

const authorization = handleActions(
  {
    CHANGE_USERNAME_OR_PASSWORD: (state, action) => ( { ...state, ...action.payload } ),
    SAVE_USER_DATA: (state, action) => ( { ...state, ...action.payload } )
  }
  ,
  { userData: {  }, email: '', password: '', isLogin: false }
)

export default authorization;