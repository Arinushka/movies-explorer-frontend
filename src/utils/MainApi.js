export const BASE_URL = 'https://api.filmstrom.nomoredomains.club';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        console.log(res)
        return res.json();
      }
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  email, password })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      }
    })
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        console.log(res)
        return res.json();
      }
    })
}