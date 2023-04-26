import axios from "axios";
export default {
  getSearch(state, payload) {
    const myData = new FormData();
    myData.append("name", payload);
    axios({
      method: "POST",
      url: "search",
      data: myData,
    }).then((res) => {
      state.data = res.data.data;
      // router.push('/searchPage');
    });
  },
  loadCart(state) {
    if (typeof window !== "undefined") {
      let cart = localStorage.getItem("freeCart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    }
  },
  addToCart(state, payload) {
    let itemFound = state.cart.some((p) => p === payload);
    if (!itemFound) {
      state.cart.push(payload);
      console.log(` payload is valid ${payload}`);
    }
    const myData = new FormData();
    myData.append("products", localStorage.getItem("products"));
    axios({
      method: "POST",
      url: "cart-products",
      data: myData,
    })
      .then((response) => {
        state.dataOfProduct = response.data.data;
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
    // localStorage.removeItem("products");
  },
  // get product
};
