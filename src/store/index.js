import { createStore } from "vuex";
import products from "@/store/products/index.js";
import auth from "@/store/auth/index.js";
const store = createStore({
  modules: {
    products,
    auth
  },
});
export default store;
