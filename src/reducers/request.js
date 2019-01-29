import { handleActions } from 'redux-actions';

const request = handleActions(
  {
    SAVE_Q_PARAMS: (state, action) => ({ ...action.payload })
  }
  ,
  {  }
)

export default request;
