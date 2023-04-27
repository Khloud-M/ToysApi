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
  loadQty(state) {
    if (typeof window !== "undefined") {
      let Qty = localStorage.getItem("quantity");
      if (Qty) {
        state.quantityArray = JSON.parse(quantityArray);
      }
    }
  },
  // start add cart
  addToCart(state, payload) {
    let itemFound = state.cart.some((p) => p === payload.idVaild);
    if (!itemFound) {
      // push cart
      state.cart.push(payload.idVaild);
      // push qty
      state.quantityArray.push(payload.qty);
      // push
      state.testProducts.push(payload.idVaild);
      // localStorage.setItem("quantity", JSON.stringify(state.quantityArray));
      // window.localStorage.setItem(
      //   "testproduct",
      //   JSON.stringify(state.testProducts)
      // );
      console.log(`test ${state.testProducts}`);
    }
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
    localStorage.setItem("quantity", JSON.stringify(state.quantityArray));
    localStorage.setItem("testproduct", JSON.stringify(state.testProducts));

    // append data and get date into cart
    const myData = new FormData();
    myData.append("products", localStorage.getItem("testproduct"));
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
  },

  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
    // update local Storage of qty
    state.quantityArray.splice(index, 1);
    localStorage.setItem("quantity", JSON.stringify(state.quantityArray));
    // localStorage.setItem("testproduct", JSON.stringify(this.testProducts));
  },
  // get product
};
