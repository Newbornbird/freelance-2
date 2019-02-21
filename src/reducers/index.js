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

// export const initialState = {
//   jobs: [],
//   talents: [],
//   status: { searchTalentIsActive: true },
//   checkboxDataJob: {exp: [], loc: [] },
//   locations: [],
//   languages: []
  
// }

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
  requestForPostJob,
  statusPostJob
})