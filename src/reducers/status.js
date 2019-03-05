import { handleActions } from 'redux-actions';

const status = handleActions(
  {
    SWITCH_SEARCH: (state, action) => ({ ...state, pathName: action.payload }),
    MAKE_REDIRECT_ACTIVE: (state, action) => ({ ...state, redirectIsActive: true }),
    MAKE_REDIRECT_UNACTIVE: (state, action) => ({ ...state, redirectIsActive: false }),
  },

  { pathName: '', redirectIsActive: false },
);

export default status;
