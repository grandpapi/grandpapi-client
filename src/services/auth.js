import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  redirectUri: process.env.AUTH_REDIRECT_URI,
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => auth0.authorize();

export const logout = () => auth0.logout({
  returnTo: process.env.AUTH_LOGOUT_URL
});

export const handleAuth = () => {
  return new Promise((resolve, reject) => {
    auth0.parseHash((error, results) => {
      if(results && results.accessToken && results.idToken) {
        auth0.client.userInfo(results.accessToken, (err, profile) => {
          if(err) return reject('Could not get user profile');
          resolve({
            profile,
            results,
            token: results.accessToken,
            nickname: results.nickname
          });
        });
      }
      else {
        reject('Could not log in');
      }
    });
  });
};
