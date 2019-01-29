import { handleActions } from 'redux-actions';

const status = handleActions(
  {
    SWITCH_SEARCH: (state, action) => ({ searchTalentIsActive: !action.payload })
  },
  
  { searchTalentIsActive: true }
)

export default status;
