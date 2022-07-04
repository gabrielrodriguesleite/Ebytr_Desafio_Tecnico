export const LOGIN_ACTION = 'LOGIN_ACTION';

export const loginAction = ({ name, email, token }) => ({
  type: LOGIN_ACTION,
  name,
  email,
  token,
});
