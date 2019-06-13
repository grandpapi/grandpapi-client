import store from '../store';
import { selectToken } from '../selectors/sessionSelectors';

const request = (path, method, body) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${selectToken(store.getState())}`
    },
    body: body ? JSON.stringify(body) : null  
  })
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch.';
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');
