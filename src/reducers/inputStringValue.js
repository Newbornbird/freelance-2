import { handleActions } from 'redux-actions';

const inputStringValue = handleActions(
  {
    CHANGE_INPUT_STRING_VALUE: (state, action) => ({ ...state, ...action.payload }),
    CHANGE_INPUT_STRING_PTO: (state, action) => ({ ...state, p_to: action.payload }),
    CHANGE_INPUT_STRING_PFROM: (state, action) => ({ ...state, p_from: action.payload }),
    CHANGE_INPUT_STRING_Q: (state, action) => ({ ...state, q: action.payload }),
  },
  { p_from: '', p_to: '', q: '' },
);

export default inputStringValue;
