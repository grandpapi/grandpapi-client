import { WebAuth } from 'auth0-js';

export const auth0 = new WebAuth({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  redirectUri: process.env.AUTH_REDIRECT_URI,
  responseType: 'token id_token',
  scope: 'openid profile',
});

export const signup = ({ email, username, password }) => auth0.redirect.signupAndLogin({
  connection: 'Username-Password-Authentication',
  email,
  username,
  password
});

export const login = ({ email, password }) => auth0.login({
  realm: 'Username-Password-Authentication',
  email,
  password
});

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
            userId: profile.sub,
            token: results.idToken,
            nickname: profile.nickname
          });
        });
      }
      else {
        reject('Could not log in');
      }
    });
  });
};
