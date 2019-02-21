import axios from 'axios';
import Auth from 'j-toker';
import queryString from 'query-string';

// AUTHORIZATION

export function CHANGE_USERNAME_OR_PASSWORD (event) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_USERNAME_OR_PASSWORD',
      payload: { [event.target.name]: event.target.value }
    })
  }
}


export function SIGN_IN (email, password) {
  return dispatch => {
    Auth.emailSignIn({
      email: email,
      password: password
    })
    .then( (respond) =>  {
      console.log(respond);
      dispatch({
        type: 'SAVE_USER_DATA',
        payload: { userData: respond.data, isLogin: true } 
      })

      dispatch({
        type: 'CHANGE_USERNAME_OR_PASSWORD',
        payload: { email: '', password: '' } 
      })
    })
    .catch( (resp) => {
      console.log(resp);
    });
  }
}

// SEARCH

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
        console.log(respond.data.users);
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
    console.log(SORT);
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
        // console.log(respond);
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

    dispatch({
      type: 'CHANGE_ACTIVE_PROMOTION_CATEGORY',
      payload: category.name
    })
  }
}

export function CHANGE_ACTIVE_PROMOTION_CATEGORY(name) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_ACTIVE_PROMOTION_CATEGORY',
      payload: name
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

export function MAKE_ACTIVE_CREATING_SKILL_TEST() {
  return dispatch => {
    dispatch({
      type: 'MAKE_ACTIVE_CREATING_SKILL_TEST',
      payload: true
    })

    dispatch({
      type: 'CHOOSE_PROMOTION',
      payload: {  }
    })

    dispatch({
      type: 'CHANGE_STR_INP_FOR_POSTJOB',
      payload: { 
        promotion_title: '', 
        promotion_description: ''  
      }
    })

  }
}

export function MAKE_INACTIVE_CREATING_SKILL_TEST() {
  return dispatch => {
    dispatch({
      type: 'MAKE_ACTIVE_CREATING_SKILL_TEST',
      payload: false
    })

    dispatch({
      type: 'CHANGE_STR_INP_FOR_POSTJOB',
      payload: { 
        promotion_title: '', 
        promotion_description: ''  
      }
    })
  }
}

export function CHOOSE_PROMOTION(selectId, currentId, promotions) {
  return dispatch => {

    if ( selectId === currentId ) {
      dispatch({
        type: 'CHOOSE_PROMOTION',
        payload: {  }
      })
  
      dispatch({
        type: 'CHANGE_STR_INP_FOR_POSTJOB',
        payload: { 
          promotion_title: '', 
          promotion_description: ''  
        }
      })
    } else {
      let promotion = promotions.find( (prom) => prom.id == selectId );

      dispatch({
        type: 'CHOOSE_PROMOTION',
        payload: promotion
      })
  
      dispatch({
        type: 'CHANGE_STR_INP_FOR_POSTJOB',
        payload: { 
          promotion_title: promotion.title, 
          promotion_description: promotion.description  
        }
      })
    }

    
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
      .then(respond => {
        console.log(respond);
        dispatch({
          type: 'CLOSE_MODAL',
        });

        dispatch({
          type: 'CLEAR_REQUEST_DATA',
        });
        
        dispatch({
          type: 'SHOW_MESSAGE_SUCCESS_POSTING'          
        });
      })
      .catch( (error) => {
        console.log(error);
      })
  }
}

export function CLOSE_MODAL() {
  return dispatch => {
    dispatch({
      type: 'CLOSE_MODAL',
    });

    dispatch({
      type: 'CLEAR_REQUEST_DATA',
    });
  }
}

export function OPEN_MODAL() {
  return dispatch => {
    dispatch({
      type: 'OPEN_MODAL',
    });
  }
}

export function HIDE_MESSAGE_SUCCESS_POSTING() {
  return dispatch => {
    dispatch({
      type: 'HIDE_MESSAGE_SUCCESS_POSTING',
    });
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


