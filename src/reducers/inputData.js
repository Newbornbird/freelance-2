import { handleActions } from 'redux-actions';

const inputData = handleActions(
  {
    // SAVE_CHECKBOX_DATA_JOB: (state, action) => ({ ...state, [action.queryParamKey]: action.queryParamValue}),
    // SAVE_JOB_FILTER: (state, action) => ({ ...state,  ...action.payload }),
    // SAVE_INPUT_DATA: (state, action) => ({ ...action.payload }),
    CHANGE_INPUT_DATA: (state, action) => ({ ...action.payload }),
    CLEAR_INPUT_DATA: (state, action) => ( {  } )
    
    
  }
  ,
  {  }
)

export default inputData;