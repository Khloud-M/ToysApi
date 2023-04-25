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
  addToCart(state, payload) {
    let itemFound = state.cart.find((p) => p.payload.id === payload);
    if(!itemFound) {
      state.cart.push({
        payload,
      });
    }
    // if(itemFound) {
    //   this.$toast.success("This product already exists");
    //   console.log("founnnndd");
    // }
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
  },
  // get product
};
