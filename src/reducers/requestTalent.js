import { handleActions } from 'redux-actions';

const requestTalent = handleActions(
  {
    SAVE_TALENT_Q_PARAMS: (state, action) => ({ ...action.payload })
  }
  ,
  {  }
)

export default requestTalent;