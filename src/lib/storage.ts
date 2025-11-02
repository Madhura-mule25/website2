export const saveUser = (username: string) => {
  localStorage.setItem('username', username);
};

export const getUser = () => {
  return localStorage.getItem('username');
};

export const clearUser = () => {
  localStorage.removeItem('username');
};
