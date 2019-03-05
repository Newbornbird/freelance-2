import axios from 'axios';

// Getting skills for rendering on the PostJob Page
export function GET_SKILLS() {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios
      .get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills', { headers: { 'access-token': token } })
      .then(respond => {
        console.log(respond);
        dispatch({
          type: 'GET_SKILLS',
          payload: respond.data.profession_categories,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// Getting promotions for rendering on the PostJob Page
export function GET_PROMOTIONS() {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios
      .get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/default_promotions', {
        headers: { 'access-token': token },
      })
      .then(respond => {
        console.log(respond);
        dispatch({
          type: 'GET_PROMOTIONS',
          payload: respond.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

// POST JOB
export function CHOOSE_CATEGORY(category) {
  return dispatch => {
    dispatch({
      type: 'CHOOSE_CATEGORY',
      payload: category,
    });

    dispatch({
      type: 'CHANGE_ACTIVE_PROMOTION_CATEGORY',
      payload: category.name,
    });
  };
}

export function CHANGE_ACTIVE_PROMOTION_CATEGORY(name) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_ACTIVE_PROMOTION_CATEGORY',
      payload: name,
    });
  };
}

export function CHOOSE_SKILL_CATEGORY(index, skillCategories) {
  const skills = [...skillCategories];

  skills[index].selected = !skills[index].selected;

  return dispatch => {
    dispatch({
      type: 'CHOOSE_SKILL_CATEGORY',
      payload: skills,
    });
  };
}

export function CHANGE_STR_INP_FOR_POSTJOB(event) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_STR_INP_FOR_POSTJOB',
      payload: { [event.target.name]: event.target.value },
    });
  };
}

export function CHANGE_CHECKBOX_FOR_POSTJOB(event, queryParamKey) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_CHECKBOX_FOR_POSTJOB',
      payload: { [queryParamKey]: event.target.name },
    });
  };
}

export function MAKE_ACTIVE_CREATING_SKILL_TEST() {
  return dispatch => {
    dispatch({
      type: 'MAKE_ACTIVE_CREATING_SKILL_TEST',
      payload: true,
    });

    dispatch({
      type: 'CHOOSE_PROMOTION',
      payload: {},
    });

    dispatch({
      type: 'CHANGE_STR_INP_FOR_POSTJOB',
      payload: {
        promotion_title: '',
        promotion_description: '',
      },
    });
  };
}

export function MAKE_INACTIVE_CREATING_SKILL_TEST() {
  return dispatch => {
    dispatch({
      type: 'MAKE_ACTIVE_CREATING_SKILL_TEST',
      payload: false,
    });

    dispatch({
      type: 'CHANGE_STR_INP_FOR_POSTJOB',
      payload: {
        promotion_title: '',
        promotion_description: '',
      },
    });
  };
}

export function CHOOSE_PROMOTION(selectId, currentId, promotions) {
  return dispatch => {
    if (selectId === currentId) {
      dispatch({
        type: 'CHOOSE_PROMOTION',
        payload: {},
      });

      dispatch({
        type: 'CHANGE_STR_INP_FOR_POSTJOB',
        payload: {
          promotion_title: '',
          promotion_description: '',
        },
      });
    } else {
      const promotion = promotions.find(prom => prom.id === selectId);

      dispatch({
        type: 'CHOOSE_PROMOTION',
        payload: promotion,
      });

      dispatch({
        type: 'CHANGE_STR_INP_FOR_POSTJOB',
        payload: {
          promotion_title: promotion.title,
          promotion_description: promotion.description,
        },
      });

      dispatch({
        type: 'MAKE_ACTIVE_CREATING_SKILL_TEST',
        payload: false,
      });
    }
  };
}

export function POST_JOB(request) {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    const client = JSON.parse(localStorage.getItem('authHeaders')).client;
    const expiry = JSON.parse(localStorage.getItem('authHeaders')).expiry;
    const tokenType = JSON.parse(localStorage.getItem('authHeaders'))['token-type'];
    const uid = JSON.parse(localStorage.getItem('authHeaders')).uid;
    axios
      .post('https://floating-atoll-63112.herokuapp.com/api/v1/client_jobs', request, {
        headers: { 'access-token': token, client, expiry, 'token-type': tokenType, uid },
      })
      .then(respond => {
        console.log(respond);
        dispatch({
          type: 'CLOSE_MODAL',
        });

        dispatch({
          type: 'CLEAR_REQUEST_DATA',
        });

        dispatch({
          type: 'SHOW_MESSAGE_SUCCESS_POSTING',
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function CLOSE_MODAL() {
  return dispatch => {
    dispatch({
      type: 'CLOSE_MODAL',
    });

    dispatch({
      type: 'CLEAR_REQUEST_DATA',
    });
  };
}

export function OPEN_MODAL() {
  return dispatch => {
    dispatch({
      type: 'OPEN_MODAL',
    });
  };
}

export function HIDE_MESSAGE_SUCCESS_POSTING() {
  return dispatch => {
    dispatch({
      type: 'HIDE_MESSAGE_SUCCESS_POSTING',
    });
  };
}

// POST JOB, ADD SKILL TAG

export function GET_SKILL_TAGS(event) {
  return dispatch => {
    dispatch({
      type: 'CHANGE_SKILL_TAGS_INPUT_VALUE',
      payload: event.target.value,
    });

    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    axios
      .get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/search', {
        params: { q: event.target.value },
        headers: { 'access-token': token },
      })
      .then(respond => {
        console.log(respond);
        dispatch({
          type: 'GET_SKILL_TAGS',
          payload: respond.data.skills,
        });

        dispatch({
          type: 'TOGGLE_DROP_DOWN_MENU',
          payload: true,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function OPEN_SKILL_TAGS_LIST() {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_DROP_DOWN_MENU',
      payload: true,
    });
  };
}

export function CLOSE_SKILL_TAGS_LIST() {
  return dispatch => {
    dispatch({
      type: 'TOGGLE_DROP_DOWN_MENU',
      payload: false,
    });
  };
}

export function ADD_SKILL_TAG(skillTagArr, skillTag) {
  return dispatch => {
    const arr = [...skillTagArr];
    arr.push(skillTag);

    dispatch({
      type: 'ADD_SKILL_TAG',
      payload: arr,
    });

    dispatch({
      type: 'TOGGLE_DROP_DOWN_MENU',
      payload: false,
    });
  };
}

export function DELETE_SKILL_TAG(skillTagArr, index) {
  return dispatch => {
    const arr = [...skillTagArr];
    arr.splice(index, 1);

    console.log(arr);
    dispatch({
      type: 'ADD_SKILL_TAG',
      payload: arr,
    });
  };
}
