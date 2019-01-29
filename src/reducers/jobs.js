import { initialState } from './index';
import { handleActions } from 'redux-actions';

const jobs = handleActions(
  {
    GET_JOBS: (state, action) => [...action.payload]
    }
  ,
  []
)

export default jobs;
