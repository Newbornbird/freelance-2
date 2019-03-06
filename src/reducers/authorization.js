import { handleActions } from 'redux-actions';

const authorization = handleActions(
  {
    CHANGE_USERNAME_OR_PASSWORD: (state, action) => ({ ...state, ...action.payload }),
    SAVE_USER_DATA: (state, action) => ({ ...state, ...action.payload }),
    MAKE_LOGIN_FALSE: (state, action) => ({ ...state, isLogin: false }),
    MAKE_SIGN_IN_ACTIVE: (state, action) => ({ ...state, SignInIsActive: true }),
    MAKE_SIGN_IN_INACTIVE: (state, action) => ({ ...state, SignInIsActive: false }),
  },
  { userData: {}, email: '', password: '', isLogin: false, SignInIsActive: true },
);

export default authorization;
