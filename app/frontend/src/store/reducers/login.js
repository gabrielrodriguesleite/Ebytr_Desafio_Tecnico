import { LOGIN_ACTION } from '../actions/login';

export const USER_INITIAL_STATE = {
  token: '',
  name: '',
  email: '',
  login: false,
};

export const user = (state = USER_INITIAL_STATE, {
  name, email, token, type,
} = {}) => {
  switch (type) {
    case LOGIN_ACTION:
      return { name, email, token };
    default: return state;
  }
};
