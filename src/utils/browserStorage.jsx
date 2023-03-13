export const LocalStorage = {
  get(key) {
    return localStorage.getItem(key);
  },
  set(key, value) {
    return localStorage.setItem(key, value);
  },
  remove(key) {
    return localStorage.removeItem(key);
  },
  clear() {
    return localStorage.clear();
  },
};

export const SessionStorage = {
  get(key) {
    return sessionStorage.getItem(key);
  },
  set(key, value) {
    return sessionStorage.setItem(key, value);
  },
  remove(key) {
    return sessionStorage.removeItem(key);
  },
  clear() {
    return sessionStorage.clear();
  },
};
