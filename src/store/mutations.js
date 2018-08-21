export const set = (state, { type, item }) => {
  state[type] = item;
}

export const setUser = (state, { type, item }) => {
  localStorage.setItem('user', JSON.stringify(item));
  state[type] = item;
}