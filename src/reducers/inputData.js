import { handleActions } from 'redux-actions';

const inputData = handleActions(
  {
    CHANGE_INPUT_DATA: (state, action) => ({ ...action.payload }),
    CLEAR_INPUT_DATA: (state, action) => ( {  } )
  }
  ,
  {  }
)

export default inputData;