export const BASE_URL = 'http://localhost:3001';

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

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.status)
      } else {
        return res.json();
      }
    })
};

export const signOut = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    }
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

export const setUserInfo = (newName, newEmail) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: newName,
      email: newEmail
    })
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