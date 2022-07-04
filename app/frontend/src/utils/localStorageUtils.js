export const update = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getByEmail = (key) => (localStorage.getItem(key)
  ? JSON.parse(localStorage.getItem(key)) : null);

export const saveToken = (user) => localStorage.setItem('token', JSON.stringify(user));
export const getToken = () => (localStorage.getItem('token')
  ? JSON.parse(localStorage.getItem('token')) : null);
export const clrToken = () => localStorage.removeItem('token');
