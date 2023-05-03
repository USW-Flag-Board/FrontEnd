import Cookies from "universal-cookie";
const cookies = new Cookies();
export const cookiesOption = {
  get(key) {
    return cookies.get(key);
  },
  set(key, value) {
    return cookies.set(key, value, {
      path: "/",
    });
  },
  setRefresh(key, value) {
    return cookies.set(key, value);
  },
  remove(key) {
    return cookies.remove(key);
  },
  clear() {
    return cookies.clear();
  },
};
