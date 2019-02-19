import { handleActions } from 'redux-actions';

const talents = handleActions(
  {
    GET_TALENTS: (state, action) => ([...action.payload]),
    GET_MORE_TALENTS: (state, action) => [ ...state, ...action.payload ]
  }
  ,
  []
)

export default talents;
