// import { initialState } from './index';
import { handleActions } from 'redux-actions';

const jobs = handleActions(
  {
    GET_JOBS: (state, action) => [...action.payload],
    GET_MORE_JOBS: (state, action) => [...state, ...action.payload],
  },
  [],
);

export default jobs;
