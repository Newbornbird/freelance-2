import { handleActions } from 'redux-actions';

const addingSkillsStatus = handleActions(
  {
    GO_TO_THE_SOME_STEP: (state, action) => ({ ...state, step: action.payload }),
    CHOOSE_CATEGORY_FOR_SKILLS: (state, action) => ({ ...state, chosenCategory: action.payload }),
  },
  { step: 3, chosenCategory: { id: '', name: '' } },
);

export default addingSkillsStatus;
