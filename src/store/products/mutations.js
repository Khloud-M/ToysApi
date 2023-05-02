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
      let Qty = localStorage.getItem("testproduct");
      if (Qty) {
        state.testProducts = JSON.parse(testProducts);
      }
    }
  },
  // start add cart
  addToCart(state) {
    let ids = [];
    if (localStorage.getItem("freeCart")) {
      JSON.parse(localStorage.getItem("freeCart")).map((el) =>
        ids.push(el.productId)
      );
    }

    // append data and get date into cart
    const myData = new FormData();
    myData.append("products", JSON.stringify(ids));
    axios({
      method: "POST",
      url: "cart-products",
      data: myData,
    })
      .then((response) => {
        JSON.parse(localStorage.getItem("freeCart")).map((el) =>
          response.data.data.map((item) => {
            if (item.id == el.productId) {
              item["qty"] = el.qty;
              item["total_price"] = +item.price * el.qty;
            }
          })
        );
        state.dataOfProduct = response.data.data;
        console.log("data");
        console.log(state.dataOfProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  RemoveItem(state, index) {
    state.cart.splice(index, 1);
    console.log(`delet cart ${index}`);
    // update local Storage
    localStorage.setItem("freeCart", JSON.stringify(state.cart));
    // update local Storage of qty
    state.quantityArray.splice(index, 1);
    localStorage.setItem("quantity", JSON.stringify(state.quantityArray));
    // state.testProducts.splice(index, 1);
    // localStorage.setItem("testproduct", JSON.stringify(this.testProducts));
  },
  // get product
};
