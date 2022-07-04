import { update, getByEmail } from './localStorageUtils';

export const create = (signin) => {
  update(signin.email, signin);
  return Promise.resolve({ signin });
};

export const validate = (token, userEmail) => Promise
  .resolve({ valid: getByEmail(userEmail).token === token });

export const login = ({ email, pass }) => {
  const user = getByEmail(email);
  if (user !== null && pass === user.pass) {
    const token = Date();
    update(email, {
      name: user.name, email, pass, token,
    });
    return Promise.resolve({ name: user.name, email, token });
  }
  return Promise.resolve(null);
};
