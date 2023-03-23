export default {
  decrementQty(state, payload) {
    payload.qty -= 1;
    if (payload.qty <= 1) {
      payload.qty = 1;
    }
  },
  increaseQty(state, payload) {
    payload.qty += 1;
  },
  loadCart(state) {
    if (typeof window !== "undefined") {
      let cart = localStorage.getItem("freeCart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    }
    // let cart = localStorage.getItem("freeCart");
    // if (cart) {
    //   state.cart = JSON.parse(cart);
    // }
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
      itemFound.quantity += 1;
    }
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
};
