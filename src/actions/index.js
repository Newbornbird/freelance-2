import axios from 'axios';
// import queryString from 'query-string';

export function GET_JOBS () {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: {} },
        headers: { 'access-token': token }
      }
    )
      .then(respond => {
        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

export function SEND_JOB_REQUEST_ARR (savedRequest, checkboxDataJob, queryParamKey, event) {
  return dispatch => {
    console.log(checkboxDataJob);
    let queryParamValue = checkboxDataJob[queryParamKey].concat();
   
    if(event.target.checked) {
      queryParamValue.push(event.target.name);
    } else if(!event.target.checked) {
        queryParamValue.splice(queryParamValue.indexOf(event.target.name), 1);
      }
    
    // Проверка на случай, если группа чекбоксов окажется пустым
    let expQueryParams;
    let fullQParams;
    
    if(queryParamValue[0]===undefined) {
      delete savedRequest[queryParamKey];
      fullQParams = { ...savedRequest };
    } else {
        expQueryParams = queryParamValue.join(',');
        fullQParams = { ...savedRequest, [queryParamKey]: expQueryParams }
      }

    // let expQueryParams = queryParamValue.join(',');
    // let fullQParams = { ...savedRequest, [queryParamKey]: expQueryParams }
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        });
        dispatch({
          type: 'SAVE_Q_PARAMS',
          payload: fullQParams
        })
        dispatch({
          type: 'SAVE_CHECKBOX_DATA_JOB',
          queryParamKey,
          queryParamValue
        })
      })
      .catch( (error) => {
        console.log(error);
      } )

    
  }   
}

export function SEND_JOB_REQUEST_PAYMENT (savedRequest, checkBoxDataJob) {
  return dispatch => {
    let p_from = checkBoxDataJob['p_from'] ? { ['p_from']: checkBoxDataJob['p_from']} : {};
    let p_to = checkBoxDataJob['p_to'] ? { ['p_to']: checkBoxDataJob['p_to']} : {};
    let fullQParams = { ...savedRequest, ...p_from, ...p_to  };
  
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        });
        dispatch({
          type: 'SAVE_Q_PARAMS',
          payload: fullQParams
        })
        
      })
      .catch( (error) => {
        console.log(error);
      } )

    
  }
}

export function SAVE_CHECKBOX_DATA_JOB(queryParamKey, queryParamValue) {
  return dispatch => {
      dispatch({
        type: 'SAVE_CHECKBOX_DATA_JOB',
        queryParamKey,
        queryParamValue
      })
    }
}

export function SEND_JOB_REQUEST_STR (savedRequest, queryParamKey, event) {
  return dispatch => {

    let fullQParams;
    
    if(event.target.checked) {
      fullQParams = { ...savedRequest, [queryParamKey]: event.target.name };
    } else {
        delete savedRequest[queryParamKey]
        fullQParams = { ...savedRequest };
      }
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        });
        
        dispatch({
          type: 'SAVE_Q_PARAMS',
          payload: fullQParams
        })
      })
      .catch( (error) => {
        console.log(error);
      } )
  }   
}


export function SEND_JOB_REQUEST_POSTED (savedRequest, event) {
  return dispatch => {

    let fullQParams;
    
    if(event.target.checked) {
      fullQParams = { ...savedRequest, 'post': event.target.name };
    } else {
      fullQParams = { ...savedRequest };
      }
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        });
        
        dispatch({
          type: 'SAVE_Q_PARAMS',
          payload: fullQParams
        })
      })
      .catch( (error) => {
        console.log(error);
      } )
  }   
}

export function GET_TALENTS () {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
      { params: { q: {} },
        headers: { 'access-token': token }
      }
    )
      .then(respond => {
        // console.log(respond.data.users);
        dispatch({
          type: 'GET_TALENTS',
          payload: respond.data.users
        })
      })
      .catch( (error) => {
        console.log(error);
      } )
  }
}

export function SWITCH_SEARCH(searchTalentIsActive) {
  return dispatch => {
    dispatch({
      type: 'SWITCH_SEARCH',
      payload: searchTalentIsActive
    });
    
  }

}

export function GET_LOCATIONS() {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/misc/countries',
      { headers: { 'access-token': token } }
    )
      .then(respond => {
        console.log(respond.data);
        dispatch({
          type: 'GET_LOCATIONS',
          payload: respond.data
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

export function GET_LANGUAGES() {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1//misc/get_languages',
      { headers: { 'access-token': token } }
    )
      .then(respond => {
        console.log(respond.data.languages);
        dispatch({
          type: 'GET_LANGUAGES',
          payload: respond.data.languages
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}






