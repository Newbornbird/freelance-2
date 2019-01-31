import { handleActions } from 'redux-actions';

const checkboxDataTalent = handleActions(
  {
    SAVE_CHECKBOX_DATA_TALENT: (state, action) => ({ ...state, [action.queryParamKey]: action.queryParamValue})
    
  }
  ,
  { 'lang': [], 'loc': [], 'exp': [], 'avl': [], 'place': [], 'q': '' }
)

export default checkboxDataTalent;