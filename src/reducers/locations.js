import { handleActions } from 'redux-actions';

const locations = handleActions(
  {
    GET_LOCATIONS: (state, action) => [ ...action.payload ]
  }
  ,
  []
)

export default locations;