import getters from "@/store/products/getters.js";
// import actions from "@/store/products/actions.js";
import mutations from "@/store/products/mutations.js";
export default {
  namespaced: true,
  state() {
    return {
      cart:[],
      data:null,
    }
  },
  getters ,
  mutations,
};
