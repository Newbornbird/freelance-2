import { combineReducers } from 'redux';
import authorization from './authorization';
import jobs from './jobs';
import talents from './talents';
import status from './status';
import inputData from './inputData';
import inputStringValue from './inputStringValue';
import locations from './locations';
import languages from './languages';
import promotions from './promotions';
import skills from './skills';
import requestForPostJob from './requestForPostJob';
import meta from './meta';
import statusPostJob from './statusPostJob';
import skill_tags from './skill_tags';
import usersSkills from './usersSkills';
import addingSkillsStatus from './addingSkillsStatus';

export default combineReducers({
  authorization,
  jobs,
  talents,
  status,
  meta,
  inputData,
  inputStringValue,
  locations,
  languages,
  skills,
  promotions,
  skill_tags,
  requestForPostJob,
  statusPostJob,
  usersSkills,
  addingSkillsStatus,
});
