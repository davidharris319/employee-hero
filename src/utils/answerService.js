import tokenService from './tokenService';

const BASE_URL = '/api/answers/';

function addAnswer(answer) {
  return fetch(BASE_URL + 'create', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(answer)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Organization has already added this question!');
  })
}

function update(question) {
  return fetch(`${BASE_URL}/${question._id}`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(question)
  }).then(res => res.json());
}

function getAllAnswers() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
  })
  .then(res => res.json());
}

export default {
  addAnswer,
  getAllAnswers,
  update
}