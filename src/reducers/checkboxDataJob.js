import { handleActions } from 'redux-actions';

const checkboxDataJob = handleActions(
  {
    SAVE_CHECKBOX_DATA_JOB: (state, action) => ({ ...state, [action.queryParamKey]: action.queryParamValue})
    
  }
  ,
  { 'lang': [], 'loc': [], 'exp': [], 'avl': [], 'payment': [], 'p_from': '',  'p_to': '' }
)

export default checkboxDataJob;