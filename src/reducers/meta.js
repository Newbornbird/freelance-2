import { handleActions } from 'redux-actions';

const meta = handleActions(
  {
    SAVE_RESPONSE_DATA: (state, action) => ({ ...action.payload }),
  },
  {},
);

export default meta;
