import User from './User.js';
import UserCard from './UserCard.js';
import * as CONSTANTS from './CONSTANTS.js';

document.addEventListener('DOMContentLoaded', async (e) => {
  const root = document.getElementById('root');
  const users = await loadUsersJson();
  const list = users.map((user) => new UserCard(new User(user)));
  root.append(...list);
})

async function loadUsersJson(src = CONSTANTS.API_BASE_URL) {
  const response = await fetch(src);
  return response.json();
}
