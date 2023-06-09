import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true" || false,
    username: localStorage.getItem("username") || "",
    token: localStorage.getItem("token") || "",
  }),
  actions: {
    login() {
      this.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    logout() {
      this.isLoggedIn = false;
      this.username = "";
      this.token = "";
      localStorage.removeItem("isLoggedIn");
      localStorage.clear();
    },
    setToken(token) {
      (this.token = token), localStorage.setItem("token", token);
    },
    setUsername(username) {
      this.username = username;
      localStorage.setItem("username", username);
    },
  },
});
