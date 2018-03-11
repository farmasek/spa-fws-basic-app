import axios from 'axios';
const tokenPostfix = `?${process.env.tokenPostfix || ''}`;

export function getUser(user) {
  return axios.get(`https://api.github.com/users/${user}${tokenPostfix}`);
}

export function getUsersRepos(user) {
  return axios.get(`https://api.github.com/users/${user}/repos${tokenPostfix}`);
}

export function getUserFollowings(user) {
  return axios.get(
    `https://api.github.com/users/${user}/following${tokenPostfix}`,
  );
}


