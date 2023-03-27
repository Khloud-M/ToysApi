export default {
  namespaced: true,
  state() {
    return {
      userToken: localStorage.getItem("user_token_toys") || "",
      userEmail: localStorage.getItem("user_email_toys") || "",
      userPhone: localStorage.getItem("user_phone_toys") || "",
      username: localStorage.getItem("user_name_toys") || "",
    };
  },
  mutations: {
    setCurrentUserData(state, payload) {
      if (payload.token) {
        state.userToken = payload.token;
        localStorage.setItem("user_token_toys", payload.token);
      }
      if (payload.email) {
        state.userEmail = payload.email;
        localStorage.setItem("user_email_toys", payload.email);
      }
      if (payload.phone) {
        state.userPhone = payload.phone;
        localStorage.setItem("user_phone_toys", payload.phone);
      }
      // if(payload.phone) {
      //   state.userPhone = payload.phone;
      //   localStorage.setItem("user_phone_toys", payload.phone);
      // }
    },
    logout(state) {
      state.userToken = null;
      state.userPhone = null;
      state.userEmail = null;
    },
  },
  getters: {
    CurrentUser(state) {
      return {
        token: state.userToken,
        email: state.userEmail,
        phone : state.userPhone
      };
    },
    isLoggedIn(state) {
      return !!state.userToken;
    },
  },
};
