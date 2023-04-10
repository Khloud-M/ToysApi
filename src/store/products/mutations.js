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
  // decrementQty(state, payload) {
  //   payload.qty -= 1;
  //   if (payload.qty <= 1) {
  //     payload.qty = 1;
  //   }
  // },
  // increaseQty(state, payload) {
  //   payload.qty += 1;
  // },
  loadCart(state) {
    if (typeof window !== "undefined") {
      let cart = localStorage.getItem("freeCart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    }
  },
  addToCart(state, selectitem) {
    // check if the item in the cart already
    let itemFound = state.cart.find((p) => p.selectitem.id === selectitem.id);
    if (!itemFound) {
      state.cart.push({
        selectitem,
        quantity: 1,
      });
    }
    if (itemFound) {
      selectitem.quantity += 1;
    }
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  // get product
};
