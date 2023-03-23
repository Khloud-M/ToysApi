import { createStore } from "vuex";
import products from "@/store/products/index.js";
const store = createStore({
  modules: {
    products,
  },
});
export default store;
