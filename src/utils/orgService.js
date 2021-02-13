const BASE_URL = '/api/org';

function signup(org) {
  return fetch(BASE_URL = 'organization-page' {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(org)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Organization has already been created!');
    // To do can you return the User who created the website? i.e. "please contact ${user.name} at ${user.email} to be added to the organization"
  })
}