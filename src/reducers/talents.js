import { handleActions } from 'redux-actions';

const talents = handleActions(
  {
    GET_TALENTS: (state, action) => [...action.payload]
  }
  ,
  []
)

export default talents;
