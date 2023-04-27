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
  // start add cart
  addToCart(state, payload) {
    let itemFound = state.cart.some((p) => p === payload.idVaild);
    if (!itemFound) {
      state.cart.push(payload.idVaild);
      console.log(` payload is valid ${payload.idVaild}`);
      state.quantityArray.push(payload.qty);
      window.localStorage.setItem(
        "quantity",
        JSON.stringify(state.quantityArray)
      );
      console.log(` quntity is ${payload.qty}`);
    }
    // append data and get date into cart 
    const myData = new FormData();
    myData.append("products", localStorage.getItem("products"));
    axios({
      method: "POST",
      url: "cart-products",
      data: myData,
    })
      .then((response) => {
        state.dataOfProduct = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.setItem("freeCart", JSON.stringify(state.cart));

    // localStorage.setItem("quantity", JSON.stringify(state.quantityArray));
  },

  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
    // localStorage.removeItem("products");
  },
  // get product
};
