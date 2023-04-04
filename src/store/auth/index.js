import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {
      TheAdress: null,
      Address: localStorage.getItem("Address") || "",
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
      if (payload.name) {
        state.username = payload.name;
        localStorage.setItem("user_name_toys", payload.name);
      }
    },
    logout(state) {
      state.userToken = null;
      state.userPhone = null;
      state.userEmail = null;
    },
    GetAddress(state, payload) {
      const myData = new FormData();
      myData.append("first_name", payload.firstname);
      myData.append("last_name", payload.lastname);
      myData.append("mobile", payload.phone);
      myData.append("address", payload.address);
      myData.append("city_id", payload.select_city);
      axios({
        method: "POST",
        url: "store-address",
        data: myData,
      })
        .then((res) => {
          console.log("store-address");
          console.log(res);
          state.TheAdress = res.data.data;
          localStorage.setItem("Address", payload.address);
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
  getters: {
    GetAddress(state) {
      return state.TheAdress;
    },
    CurrentUser(state) {
      return {
        token: state.userToken,
        email: state.userEmail,
        phone: state.userPhone,
      };
    },
    isLoggedIn(state) {
      return !!state.userToken;
    },
  },
};
