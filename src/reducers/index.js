import { combineReducers } from 'redux';
import jobs from './jobs';
import talents from './talents';
import status from './status';
import request from './request';
import requestTalent from './requestTalent';
import checkboxDataJob from './checkboxDataJob';
import checkboxDataTalent from './checkboxDataTalent';
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
  requestTalent,
  checkboxDataJob,
  checkboxDataTalent,
  locations,
  languages
  
})