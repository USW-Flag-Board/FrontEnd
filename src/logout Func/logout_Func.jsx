export const LogOut = () => {
  LocalStorage.clear();
  SessionStorage.clear();
  cookiesOption.remove("refresh_token");
  cookiesOption.remove("remember_id");
  navigate("/");
};
