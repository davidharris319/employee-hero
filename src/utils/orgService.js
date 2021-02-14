import tokenService from './tokenService';

const BASE_URL = '/api/orgs/';

function signup(org) {
  return fetch(BASE_URL + 'create', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(org)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Organization has already been created!');
    // To do can you return the User who created the website? i.e. "please contact ${user.name} at ${user.email} to be added to the organization"
  })
}

function getOrg() {
  return fetch(BASE_URL + 'show', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
  })
  .then(res => res.json());
}

function getAllOrgs() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
  })
  .then(res => res.json());
}

function registerEmployee(orgId) {
  return fetch(BASE_URL + 'register-employee', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify({id: orgId})
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('You are already registered to this organization!');
    // To do can you return the User who created the website? i.e. "please contact ${user.name} at ${user.email} to be added to the organization"
  })
}


export default {
  signup,
  getOrg,
  getAllOrgs,
  registerEmployee
}