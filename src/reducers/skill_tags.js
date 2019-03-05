import { handleActions } from 'redux-actions';

const skill_tags = handleActions(
  {
    GET_SKILL_TAGS: (state, action) => ({ ...state, skill_tags: [...action.payload] }),
    CHANGE_SKILL_TAGS_INPUT_VALUE: (state, action) => ({ ...state, inputValue: action.payload }),
    TOGGLE_DROP_DOWN_MENU: (state, action) => ({ ...state, dropDownMenu: action.payload }),
  },
  { skill_tags: [], inputValue: '', dropDownMenu: false },
);

export default skill_tags;
