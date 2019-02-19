import axios from 'axios';
import queryString from 'query-string';

export function CHANGE_CHECKBOX_DATA_ARR (queryParamKey, inputData, event) {
  return dispatch => {
    
    let queryParams, queryParamValue;

    let checkBoxData = { ...inputData };

    if(event.target.checked) {
      if(checkBoxData[queryParamKey]) {
        queryParamValue = checkBoxData[queryParamKey];
        queryParamValue = queryParamValue + ',' + event.target.name;
        
      } else {
          queryParamValue = event.target.name;
          
      }
    } else {
        queryParamValue = checkBoxData[queryParamKey];
        let queryParamValueArr = queryParamValue.split(',');
        queryParamValueArr.splice(queryParamValueArr.indexOf(event.target.name), 1);
        queryParamValue = queryParamValueArr.join(',');
        
    }

    if(queryParamValue) {
      queryParams = { ...checkBoxData, [queryParamKey]: queryParamValue };
    } else {
        delete checkBoxData[queryParamKey];
        queryParams = { ...checkBoxData };
    }

    console.log(queryParams);
        
    dispatch({
      type: 'CHANGE_INPUT_DATA',
      payload: queryParams
    })

    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE'
    })
  }
}

export function CHANGE_CHECKBOX_DATA_SINGLE (queryParamKey, inputData, event) {
  return dispatch => {
    
    let queryParams, queryParamValue;

    if(event.target.checked) {
      queryParamValue = event.target.name;
      queryParams = { ...inputData, [queryParamKey]: queryParamValue };
          
    } else {
        let checkBoxData = { ...inputData };
        delete checkBoxData[queryParamKey];
        queryParams = checkBoxData;
        
    }
       
    dispatch({
      type: 'CHANGE_INPUT_DATA',
      payload: queryParams
    })

    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE'
    })
  }
}

export function CHANGE_INPUT_DATA_PAYMENT(p_from_value, p_to_value, inputData) {
  return dispatch => {

    let queryParams;

    let checkboxData = { ...inputData };

    let p_to_object = {};

    let p_from_object = {};

    if( p_from_value ) {
      p_from_object = { 'p_from': p_from_value };
    } else {
      delete checkboxData[ 'p_from' ];
    }

    if( p_to_value ) {
      p_to_object = { 'p_to': p_to_value };
    } else {
      delete checkboxData[ 'p_to' ];
    }

    queryParams = { ...checkboxData, ...p_to_object, ...p_from_object  };

    dispatch({
      type: 'CHANGE_INPUT_DATA',
      payload: queryParams
    })

    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE'
    })
  }
}

export function CHANGE_CHECKBOX_DATA_NAME(inputData, queryParamValue) {
  return dispatch => {
    
    let queryParams;

    let checkboxData = { ...inputData };

    if( queryParamValue ) {
      queryParams = { ...checkboxData, 'q': queryParamValue  };
    } else {
      delete checkboxData[ 'q' ];
      queryParams = { ...checkboxData };
    }

    dispatch({
      type: 'CHANGE_INPUT_DATA',
      payload: queryParams
    })

    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE'
    })
  }
}

export function BIG_ACTION(parseString, pathName) {
  return dispatch => {
    
    dispatch({
      type: 'CHANGE_INPUT_STRING_VALUE',
      payload: { 'q': parseString['q'] ? parseString['q'] : '' }
    })

    dispatch({
      type: 'CHANGE_INPUT_DATA',
      payload: parseString
    })
    
    let token = JSON.parse( localStorage.getItem( 'authHeaders'))['access-token'];
    
    if( pathName === '/board/search/job' ) {
      axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
        { params: { page: '1', q: parseString  },
          headers: { 'access-token': token }
        }
      )
      .then(respond => {
        console.log(respond.data.jobs);
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
    } else {
      axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
        { params: { page: '1', q: parseString },
          headers: { 'access-token': token }
        }
      )
      .then(respond => {
        console.log(respond.data);
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
}

export function GET_MORE(inputData, meta, pathName) {
  return dispatch => {

    let parseString = { ...inputData };

    let page = meta.next_page;

    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    
    if( pathName === '/board/search/job' ) {
      axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/jobs/search',
        { params: { page: page, q: parseString  },
          headers: { 'access-token': token }
        }
      )
      .then(respond => {
      
        dispatch({
          type: 'GET_MORE_JOBS',
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
    } else {
      axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/tellents/search',
        { params: { page: page, q: parseString },
          headers: { 'access-token': token }
        }
      )
      .then(respond => {
        console.log(respond.data);
        dispatch({
          type: 'GET_MORE_TALENTS',
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
}

export function SWITCH_SEARCH(pathName) {
  return dispatch => {
    if(pathName === '/board/search/job') {
      dispatch({
        type: 'SWITCH_SEARCH',
        payload: '/board/search/talent'
      });
      
    } else {
        dispatch({
          type: 'SWITCH_SEARCH',
          payload: '/board/search/job'
        });
      }
    
    dispatch({
      type: 'CLEAR_INPUT_DATA'
    })
    
    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE'
    })
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

export function SORT (inputData, queryParamKey, event) {
  return dispatch => {

    let fullQParams = { ...inputData, [queryParamKey]: event.target.value };
    
    dispatch({
      type: 'CHANGE_INPUT_DATA',
      payload: fullQParams
    })

    dispatch({
      type: 'MAKE_REDIRECT_ACTIVE'
    })
  }
}

export function CHANGE_INPUT_STRING_VALUE(event) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_INPUT_STRING_VALUE',
      payload: { [event.target.name]: event.target.value }
    })
  }
}

// Getting skills for rendering on the PostJob Page
export function GET_SKILLS() {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills',
      { headers: { 'access-token': token } }
    )
      .then(respond => {
        console.log(respond);
        dispatch({
          type: 'GET_SKILLS',
          payload: respond.data.profession_categories
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

// Getting promotions for rendering on the PostJob Page
export function GET_PROMOTIONS() {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/default_promotions',
      { headers: { 'access-token': token } }
    )
      .then(respond => {
        dispatch({
          type: 'GET_PROMOTIONS',
          payload: respond.data
        })
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

// Post Job
export function CHOOSE_CATEGORY (category) {
  return dispatch => {
    dispatch({
      type: 'CHOOSE_CATEGORY',
      payload: category
    })
  }
}

export function CHOOSE_SKILL_CATEGORY (index, skillCategories) {

  let skills = [ ...skillCategories ]; 

  skills[index].selected = !skills[index].selected;

  return dispatch => {
    dispatch({
      type: 'CHOOSE_SKILL_CATEGORY',
      payload: skills
    })
  }
}

export function CHANGE_STR_INP_FOR_POSTJOB(event) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_STR_INP_FOR_POSTJOB',
      payload: { [event.target.name]: event.target.value }
    })
  }
}

export function CHANGE_CHECKBOX_FOR_POSTJOB(event, queryParamKey) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_CHECKBOX_FOR_POSTJOB',
      payload: { [queryParamKey]: event.target.name }
    })
  }
}

export function CHOOSE_PROMOTION(id, promotions) {
  return dispatch => {

    let promotion = promotions.find( (prom) => prom.id == id );

    console.log(promotion);

    dispatch({
      type: 'CHOOSE_PROMOTION',
      payload: promotion
    })
  }
}

export function POST_JOB( request ) {
  return dispatch => {
    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    let client = JSON.parse(localStorage.getItem('authHeaders'))['client'];
    let expiry = JSON.parse(localStorage.getItem('authHeaders'))['expiry'];
    let tokenType = JSON.parse(localStorage.getItem('authHeaders'))['token-type'];
    let uid = JSON.parse(localStorage.getItem('authHeaders'))['uid'];
    axios.post( 
      'https://floating-atoll-63112.herokuapp.com/api/v1/client_jobs',  
      request, 
      { headers: { 'access-token': token, 'client': client, 'expiry': expiry, 'token-type': tokenType, 'uid': uid } } )
      // .then(respond => {
        
      //   dispatch({
      //     type: 'CLOSE_MODAL_WINDOW',
      //   });

      //   dispatch({
      //     type: 'CLEAR_REQUEST_DATA',
      //   });
        
      //   dispatch({
      //     type: 'SHOW_SUCCESS_MESSAGE',
      //     payload: respond.data
      //   });
      // })
      // .catch( (error) => {
      //   console.log(error);
      // })
  }
}

export function GET_BONUS_SKILLS() {
  return dispatch => {

    let token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios.get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/search',
    { params: { q: 'c' },
      headers: { 'access-token': token }
    }
    )
      .then(respond => {
        console.log(respond);
        // dispatch({
        //   type: 'GET_BONUS_SKILLS',
        //   payload: respond.data.categories
        // })
      })
      .catch( (error) => {
        console.log(error);
      })
  }

}


