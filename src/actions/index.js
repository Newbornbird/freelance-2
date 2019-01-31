import axios from 'axios';
// import queryString from 'query-string';

export function GET_JOBS () {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { page: '1', q: {}  },
        headers: { 'access-token': token }
      }
    )
      .then(respond => {
        console.log(respond.data);

        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        })

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

export function GET_MORE_JOBS(savedRequest, meta) {
  return dispatch => {

    let fullQParams = { ...savedRequest };

    let page = meta.next_page;

    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { page, q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_MORE_JOBS',
          payload: respond.data.jobs
        });

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
      })
      .catch( (error) => {
        console.log(error);
      } )


  }
}

export function SEND_JOB_REQUEST_ARR (savedRequest, checkboxDataJob, queryParamKey, event) {
  return dispatch => {
    let queryParamValue = checkboxDataJob[queryParamKey].concat();
   
    if(event.target.checked) {
      queryParamValue.push(event.target.name);
    } else if(!event.target.checked) {
        queryParamValue.splice(queryParamValue.indexOf(event.target.name), 1);
      }
    
    // Проверка на случай, если группа чекбоксов окажется пустой
    let expQueryParams;
    let fullQParams;
    
    if(queryParamValue[0]===undefined) {
      delete savedRequest[queryParamKey];
      fullQParams = { ...savedRequest };
    } else {
        expQueryParams = queryParamValue.join(',');
        fullQParams = { ...savedRequest, [queryParamKey]: expQueryParams }
      }
    
    dispatch({
      type: 'SAVE_Q_PARAMS',
      payload: fullQParams
    })
    dispatch({
      type: 'SAVE_CHECKBOX_DATA_JOB',
      queryParamKey,
      queryParamValue
    })

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
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
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

    dispatch({
      type: 'SAVE_Q_PARAMS',
      payload: fullQParams
    });
  
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
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
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
    
    dispatch({
      type: 'SAVE_Q_PARAMS',
      payload: fullQParams
    })

    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        console.log(respond.data.meta);
        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        });

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
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
        });

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
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

export function SEND_TALENT_REQUEST_STR (savedRequest, queryParamKey, event) {
  return dispatch => {

    let fullQParams;
    
    if(event.target.checked) {
      fullQParams = { ...savedRequest, [queryParamKey]: event.target.name };
    } else {
        delete savedRequest[queryParamKey]
        fullQParams = { ...savedRequest };
      }
    
    dispatch({
      type: 'SAVE_TALENT_Q_PARAMS',
      payload: fullQParams
    })
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_TALENT',
          payload: respond.data.users
        });

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
      })
      .catch( (error) => {
        console.log(error);
      } )
  }   
}

export function SEND_TALENT_REQUEST_ARR (savedRequest, checkboxDataTalent, queryParamKey, event) {
  return dispatch => {
    
    let queryParamValue = checkboxDataTalent[queryParamKey].concat();
   
    if(event.target.checked) {
      queryParamValue.push(event.target.name);
    } else if(!event.target.checked) {
        queryParamValue.splice(queryParamValue.indexOf(event.target.name), 1);
      }
    
    // Проверка на случай, если группа чекбоксов окажется пустой
    let expQueryParams;
    let fullQParams;
    
    if(queryParamValue[0]===undefined) {
      delete savedRequest[queryParamKey];
      fullQParams = { ...savedRequest };
    } else {
        expQueryParams = queryParamValue.join(',');
        fullQParams = { ...savedRequest, [queryParamKey]: expQueryParams }
      }
    
    dispatch({
      type: 'SAVE_TALENT_Q_PARAMS',
      payload: fullQParams
    })

    dispatch({
      type: 'SAVE_CHECKBOX_DATA_TALENT',
      queryParamKey,
      queryParamValue
    })

    // let expQueryParams = queryParamValue.join(',');
    // let fullQParams = { ...savedRequest, [queryParamKey]: expQueryParams }
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        console.log(respond.data);
        dispatch({
          type: 'GET_TALENT',
          payload: respond.data.users
        });

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
      })
      .catch( (error) => {
        console.log(error);
      } )
  }   
}

export function SORT_JOBS(savedRequest, queryParamKey, event) {
  return dispatch => {

   let fullQParams = { ...savedRequest, [queryParamKey]: event.target.value };
    
    dispatch({
      type: 'SAVE_Q_PARAMS',
      payload: fullQParams
    })
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
      { params: { page: '1', q: fullQParams  },
        headers: { 'access-token': token }
      }
    )
      .then(respond => {
        console.log(respond.data);

        dispatch({
          type: 'GET_JOBS',
          payload: respond.data.jobs
        })

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

export function SORT_TALENTS (savedRequest, queryParamKey, event) {
  return dispatch => {

     
    let fullQParams = { ...savedRequest, [queryParamKey]: event.target.value };
    
    console.log(fullQParams);

    dispatch({
      type: 'SAVE_TALENT_Q_PARAMS',
      payload: fullQParams
    })
    
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
      { params: { page: '1', q: fullQParams  },
        headers: { 'access-token': token }
      }
    )
      .then(respond => {
        // console.log(respond.data);

        dispatch({
          type: 'GET_TALENTS',
          payload: respond.data.users
        })

        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

export function SAVE_CHECKBOX_DATA_TALENT(queryParamKey, queryParamValue) {
  return dispatch => {
      dispatch({
        type: 'SAVE_CHECKBOX_DATA_TALENT',
        queryParamKey,
        queryParamValue
      })
    }
}

export function SEND_JOB_REQUEST_NAME (savedRequest, checkBoxDataJob) {
  return dispatch => {
    let jobName = checkBoxDataJob['q'] ? { ['q']: checkBoxDataJob['q']} : {  };

    if(!jobName) {
      return
    }
    
    let fullQParams = { ...savedRequest, ...jobName  };

    dispatch({
      type: 'SAVE_Q_PARAMS',
      payload: fullQParams
    });
  
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
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
      })
      .catch( (error) => {
        console.log(error);
      } )
  }
}

export function SEND_TALENT_REQUEST_NAME (savedRequest, checkBoxDataJob) {
  return dispatch => {
    let talentName = checkBoxDataJob['q'] ? { ['q']: checkBoxDataJob['q']} : {  };

    if(!talentName) {
      return
    }
    
    let fullQParams = { ...savedRequest, ...talentName  };

    dispatch({
      type: 'SAVE_TALENT_Q_PARAMS',
      payload: fullQParams
    });
  
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];

    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
      { params: { q: fullQParams },
        headers: { 'access-token': token }
      }
      )
      .then(respond => {
        dispatch({
          type: 'GET_TALENTS',
          payload: respond.data.users
        });
        
        dispatch({
          type: 'SAVE_RESPONSE_DATA',
          payload: respond.data.meta
        });
        
      })
      .catch( (error) => {
        console.log(error);
      } )
  }
}








