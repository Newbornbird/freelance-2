import { combineReducers } from 'redux';
import jobs from './jobs';
import talents from './talents';
import status from './status';
import request from './request';
import checkboxDataJob from './checkboxDataJob';
// import posted from './posted';
import locations from './locations';
import languages from './languages';

export const initialState = {
  jobs: [],
  talents: [],
  status: { searchTalentIsActive: true },
  checkboxDataJob: {exp: [], loc: [] },
  locations: [],
  languages: []
  
}

export default combineReducers({
  jobs,
  talents,
  status,
  request,
  checkboxDataJob,
  locations,
  languages
  
})