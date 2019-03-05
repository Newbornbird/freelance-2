import { handleActions } from 'redux-actions';

const skills = handleActions(
  {
    GET_SKILLS: (state, action) => [...action.payload],
  },
  [],
);

export default skills;
