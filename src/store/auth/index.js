export default {
  namespaced: true,
  state() {
    return {
      userToken: localStorage.getItem("user_token_toys") || "",
    };
  },
  mutations: {
    setCurrentUserData() {},
    logout(state){
      state.userToken= null ;
    },
  },
  getters: {
    CurrentUser(state) {
      return {
        token: state.userToken,
      };
    },

  },
};
