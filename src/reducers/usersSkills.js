import { handleActions } from 'redux-actions';

const usersSkills = handleActions(
  {
    GET_USERS_SKILLS: (state, action) => [...action.payload],
    CHANGE_USERS_SKILLS: (state, action) => [ ...action.payload ]
  }
  ,
  []
)

export default usersSkills;