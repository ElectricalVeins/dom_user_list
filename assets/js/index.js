import User from './User.js';
import UserCard from './UserCard.js';
import * as CONSTANTS from './CONSTANTS.js';

document.addEventListener('DOMContentLoaded', async (e) => {
  const root = document.getElementById('root');
  const auth = localStorage.getItem('auth');

  if (auth) {
    loadAndAppendUsers(root)
  } else {
    const userData = await fetchJson(`${CONSTANTS.API_BASE_URL}auth`);
    localStorage.setItem('auth', JSON.stringify(userData));
      }

});

async function loadAndAppendUsers(root) {
  const users = await fetchJson(`${CONSTANTS.API_BASE_URL}users`);
  const list = users.map((user) => new UserCard(new User(user)));
  root.append(...list);
}

async function fetchJson(src = CONSTANTS.API_BASE_URL) {
  const response = await fetch(src);
  return response.json();
}
