import axios from 'axios';

export function GET_USERS_SKILLS() {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    const client = JSON.parse(localStorage.getItem('authHeaders')).client;
    const expiry = JSON.parse(localStorage.getItem('authHeaders')).expiry;
    const tokenType = JSON.parse(localStorage.getItem('authHeaders'))['token-type'];
    const uid = JSON.parse(localStorage.getItem('authHeaders')).uid;

    axios
      .get('https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills/user', {
        headers: { 'access-token': token, client, expiry, 'token-type': tokenType, uid },
      })
      .then(respond => {
        dispatch({
          type: 'GET_USERS_SKILLS',
          payload: respond.data.profession_categories,
        });
      })

      .catch(error => {
        console.log(error);
      });
  };
}

export function CHOOSE_CATEGORY_FOR_SKILLS(event, id) {
  return dispatch => {
    dispatch({
      type: 'CHOOSE_CATEGORY_FOR_SKILLS',
      payload: { name: event.target.name, id },
    });
  };
}

export function CHANGE_USERS_SKILL_CATEGORIES(profCatId, usersSkills, skillCatIndex, event) {
  return dispatch => {
    const changedObject = usersSkills.find(userSkill => userSkill.id === profCatId);
    const usersSkillsArr = [...usersSkills];

    event.target.checked
      ? (changedObject.skill_categories[skillCatIndex].selected = true)
      : (changedObject.skill_categories[skillCatIndex].selected = false);

    changedObject.skill_categories.find(category => category.selected === true)
      ? (changedObject.selected = true)
      : (changedObject.selected = false);

    usersSkillsArr[profCatId - 1] = changedObject;

    dispatch({
      type: 'CHANGE_USERS_SKILLS',
      payload: usersSkillsArr,
    });
  };
}

export function CHANGE_USERS_SKILL_TAGS(profCatId, usersSkills, skillTag) {
  return dispatch => {
    const changedObject = usersSkills.find(usersSkill => usersSkill.id === profCatId);
    const usersSkillsArr = [...usersSkills];

    changedObject.skill_tags.push(skillTag);

    usersSkillsArr[profCatId - 1] = changedObject;

    dispatch({
      type: 'CHANGE_USERS_SKILLS',
      payload: usersSkillsArr,
    });

    dispatch({
      type: 'TOGGLE_DROP_DOWN_MENU',
      payload: false,
    });
  };
}

export function DELETE_SKILL_TAG_FOR_SKILLS(profCatId, usersSkills, skillTagIndex) {
  return dispatch => {
    const changedObject = usersSkills.find(usersSkill => usersSkill.id === profCatId);
    const usersSkillsArr = [...usersSkills];

    changedObject.skill_tags.splice(skillTagIndex, 1);

    usersSkillsArr[profCatId - 1] = changedObject;

    dispatch({
      type: 'CHANGE_USERS_SKILLS',
      payload: usersSkillsArr,
    });
  };
}

export function ADD_USERS_SKILLS(request) {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    const client = JSON.parse(localStorage.getItem('authHeaders')).client;
    const expiry = JSON.parse(localStorage.getItem('authHeaders')).expiry;
    const tokenType = JSON.parse(localStorage.getItem('authHeaders'))['token-type'];
    const uid = JSON.parse(localStorage.getItem('authHeaders')).uid;

    const requestForAddingSkills = request
      .filter(prof => prof.selected === true)
      .map(prof => ({
        id: prof.id,
        skill_tags: [...prof.skill_tags],
        skill_categories: [...prof.skill_categories.filter(cat => cat.selected === true).map(cat => cat.id)],
      }));

    axios
      .post(
        'https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills',
        { categories: requestForAddingSkills },
        { headers: { 'access-token': token, client, expiry, 'token-type': tokenType, uid } },
      )
      .then(respond => {
        dispatch({
          type: 'GO_TO_THE_SOME_STEP',
          payload: 3,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function DELETE_USERS_SKILLS(skillId, usersSkills) {
  return dispatch => {
    const token = JSON.parse(localStorage.getItem('authHeaders'))['access-token'];
    const client = JSON.parse(localStorage.getItem('authHeaders')).client;
    const expiry = JSON.parse(localStorage.getItem('authHeaders')).expiry;
    const tokenType = JSON.parse(localStorage.getItem('authHeaders'))['token-type'];
    const uid = JSON.parse(localStorage.getItem('authHeaders')).uid;

    const usersSkillsArr = [...usersSkills];

    usersSkillsArr[skillId - 1].selected = false;
    usersSkillsArr[skillId - 1].skill_tags = [];
    usersSkillsArr[skillId - 1].skill_categories.forEach(cat => (cat.selected = false));

    dispatch({
      type: 'CHANGE_USERS_SKILLS',
      payload: usersSkillsArr,
    });

    let requestForAddingSkills = usersSkillsArr
      .filter(prof => prof.selected === true)
      .map(prof => ({
        id: prof.id,
        skill_tags: [...prof.skill_tags],
        skill_categories: [...prof.skill_categories.filter(cat => cat.selected === true).map(cat => cat.id)],
      }));

    if (requestForAddingSkills === undefined) {
      requestForAddingSkills = [];
    }

    axios
      .post(
        'https://floating-atoll-63112.herokuapp.com/api/v1/profile/skills',
        { categories: requestForAddingSkills },
        { headers: { 'access-token': token, client, expiry, 'token-type': tokenType, uid } },
      )
      .then(respond => {
        console.log(respond);
      })

      .catch(error => {
        console.log(error);
      });
  };
}

export function EDIT_USERS_SKILLS(name, id) {
  return dispatch => {
    dispatch({
      type: 'CHOOSE_CATEGORY_FOR_SKILLS',
      payload: { name, id },
    });

    dispatch({
      type: 'GO_TO_THE_SOME_STEP',
      payload: 2,
    });
  };
}

export function GO_TO_THE_NEXT_STEP(step) {
  return dispatch => {
    const nextStep = step === 3 ? 1 : step + 1;

    dispatch({
      type: 'GO_TO_THE_SOME_STEP',
      payload: nextStep,
    });
  };
}

export function GO_TO_THE_PREVIOUS_STEP(step) {
  return dispatch => {
    dispatch({
      type: 'GO_TO_THE_SOME_STEP',
      payload: step === 1 ? 3 : step - 1,
    });
  };
}
