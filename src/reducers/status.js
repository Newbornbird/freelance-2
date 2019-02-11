import { handleActions } from 'redux-actions';

const status = handleActions(
  {
    SWITCH_SEARCH: (state, action) => ({ ...state, pathName: action.payload }),
    // SAVE_QUERY_PARAMS: (state, action) => ({ search: action.payload }),
    MAKE_REDIRECT_ACTIVE: ( state, action ) => ( { ...state, redirectIsActive: true } )
    
  },
  
  { pathName: '', redirectIsActive: false }
)

export default status;
