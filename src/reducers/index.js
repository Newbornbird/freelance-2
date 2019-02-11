import { combineReducers } from 'redux';
import jobs from './jobs';
import talents from './talents';
import status from './status';
import inputData from './inputData';
import inputStringValue from './inputStringValue';
import locations from './locations';
import languages from './languages';
import meta from './meta';

// export const initialState = {
//   jobs: [],
//   talents: [],
//   status: { searchTalentIsActive: true },
//   checkboxDataJob: {exp: [], loc: [] },
//   locations: [],
//   languages: []
  
// }

export default combineReducers({
  jobs,
  talents,
  status,
  meta,
  inputData,
  inputStringValue,
  locations,
  languages
})