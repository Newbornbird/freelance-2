import { handleActions } from 'redux-actions';

const statusPostJob = handleActions(
  {
    CLOSE_MODAL: (state, action) => ({ ...state, modal: false }),
    OPEN_MODAL: (state, action) => ({ ...state, modal: true }),
    SHOW_MESSAGE_SUCCESS_POSTING: (state, action) => ({ ...state, successMessage: true }),
    HIDE_MESSAGE_SUCCESS_POSTING: (state, action) => ({ ...state, successMessage: false }),
    CHANGE_ACTIVE_PROMOTION_CATEGORY: (state, action) => ({ ...state, activePromotionCategory: action.payload }),
    MAKE_ACTIVE_CREATING_SKILL_TEST: (state, action) => ({ ...state, createSkillTest: action.payload }),
    MAKE_INACTIVE_CREATING_SKILL_TEST: (state, action) => ({ ...state, createSkillTest: action.payload }),
  },
  { successMessage: false, modal: false, activePromotionCategory: '', createSkillTest: true },
);

export default statusPostJob;
