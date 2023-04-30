<template>
  <div class="cart_icon">
    <button
      class="cart_overlay"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <v-icon icon="mdi-shopping-outline"></v-icon>
      <span class="overlay"> {{ cart.length }}</span>
    </button>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">
          {{ $t("placeholder.ShoppingCart") }}
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <hr />
      <div class="offcanvas-body">
        <div class="inCart">
          <div class="Item d-flex" v-for="item in carts" :key="item.id">
            <li v-for="p in q" :key="p.id" :id="p.id">
              {{ p.q }}
            </li>
            {{ q }}
            <div class="image col-md-4">
              <img :src="item.image" width="100" height="100" />
            </div>
            <div class="details col-md-6">
              <h5>{{ item.name }}</h5>
              <ul>
                <li v-for="(option, index) in item.values" :key="index">
                  {{ option.name }}
                </li>
              </ul>
              <h6>
                <bdi>{{ item.qty + " X " + item.price + " " + "K.W " }}</bdi>
                <!-- <span> </span> -->
              </h6>
            </div>
            <div class="remove col-lg-1">
              <button @click="RemoveItem(item)">
                <v-icon icon="mdi-trash-can-outline"></v-icon>
              </button>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="empty_Cart" v-if="!carts.length">
          <img src="@/assets/images/empty-cart.svg" alt="emptycart" />
          <h5>
            {{ $t("placeholder.emptyCart") }}
          </h5>
        </div>
        <!-- empty cart -->
      </div>

      <div class="offcanvas-foot">
        <div class="total_price">
          <hr />
          <h5 class="d-flex justify-content-between">
            {{ $t("placeholder.total") }}
            <span> {{ total_price() }} K.W</span>
            <!-- <span v-else>0</span> -->
          </h5>

          <router-link to="/ShoppingCart">
            <base-button class="btn1" data-bs-dismiss="offcanvas">
              {{ $t("placeholder.ShoppingCart") }}
            </base-button>
          </router-link>
          <router-link to="/CheckOut">
            <base-button class="btn2" data-bs-dismiss="offcanvas">
              {{ $t("buttons.CHECKOUT") }}
            </base-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      carts: [],
    };
  },
  computed: {
    ...mapGetters({
      cart: "products/cart",
      dataOfProduct: "products/dataOfProduct",
    }),
  },
  methods: {
    RemoveItem(item) {
      // let cartsInStorage = JSON.parse(localStorage.getItem("freeCart"));
      // cartsInStorage.splice(cartsInStorage.findIndex((el) => el.productId === item.id), 1);
      // localStorage.setItem("freeCart", JSON.stringify(cartsInStorage));
      // this.$store.commit("products/addToCart");
      let cartsInStorage = JSON.parse(localStorage.getItem("freeCart"));
      cartsInStorage = cartsInStorage.filter((el) => el.productId != item.id);
      localStorage.setItem("freeCart", JSON.stringify(cartsInStorage));
      this.$store.commit("products/addToCart");
    },

    total_price() {
      let price = this.carts.reduce((a, b) => a + b.total_price, 0);
      return price;
    },
  },
  mounted() {},
  watch: {
    dataOfProduct(newVal) {
      if (newVal) {
        this.carts = newVal;
      }
    },
  },
};
</script>
<style lang="scss">
.cart_icon {
  .offcanvas {
    text-transform: capitalize;
    padding: 15px;
  }
  .btn-close:focus {
    box-shadow: 0 0 0 0.1rem var(--color-yellow);
  }
  hr {
    border: 1px solid var(--main-color);
  }
  .offcanvas-body {
    h5 {
      text-align: center;
      img {
        margin: 50px 0;
      }
    }
  }
  .total_price {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    .btn1 {
      color: white;
      background-color: var(--main-color);
      width: 100%;
      padding: 10px;
      background-image: linear-gradient(
        50deg,
        transparent 50%,
        #242323 50%
      ) !important;
    }
    .btn2 {
      width: 100% !important;
    }
  }
  //
  .Item {
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
    .details {
      h5 {
        font-size: 18px;
        color: var(--main-color);
        text-align: justify;
      }
      span {
        color: var(--red-color);
        font-weight: 500;
      }
    }
    .remove {
      align-self: flex-start;
      .v-icon {
        color: var(--red-color);
        background-color: #fde5ea;
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }
    }
  }
}
</style>
