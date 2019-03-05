import { handleActions } from 'redux-actions';

const languages = handleActions(
  {
    GET_LANGUAGES: (state, action) => [...action.payload],
  },
  [],
);

export default languages;
