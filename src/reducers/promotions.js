import { handleActions } from 'redux-actions';

const promotions = handleActions(
  {
    GET_PROMOTIONS: (state, action) => ({ ...action.payload }) 
  }
  ,
  {  }  
)

export default promotions;
