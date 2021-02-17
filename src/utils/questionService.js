import tokenService from './tokenService';

const BASE_URL = '/api/questions/';

function addQuestion(question) {
  return fetch(BASE_URL + 'create', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(question)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Organization has already added this question!');
  })
}

export default {
  addQuestion
}