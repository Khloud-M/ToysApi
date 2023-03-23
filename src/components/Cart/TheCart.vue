<template>
  <div class="cart_icon">
    <button
      class="cart_overlay"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasRight"
      aria-controls="offcanvasRight"
    >
      <v-icon size="27" icon="mdi-shopping-outline"></v-icon>
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
        <div class="inCart" v-if="cart.length">
          <!-- <div class="row" v-for="item in cart"> -->
          <div class="Item d-flex" v-for="item in cart" :key="item.id">
            <div class="image col-md-4">
              <img :src="item.selectitem.image" width="100" height="100" />
            </div>
            <div class="details col-md-6">
              <h5>{{ item.selectitem.name }}</h5>
              <span> {{ item.selectitem.price }} KWD</span>
              <h6>quantity : {{ item.quantity }}</h6>
              <!-- <product-quantity :quantity="quantity" /> -->
            </div>
            <div class="remove col-lg-1">
              <button @click="RemoveItem">
                <v-icon icon="mdi-trash-can-outline"></v-icon>
              </button>
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="empty_Cart" v-else>
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
          <h5>
            {{ $t("placeholder.total") }}
            <span v-if="cart.length"> {{ totalCost }} </span>
            <span v-else> 00</span>
            <button @click="cartt">mmm</button>
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
// import ProductQuantity from "../Products/ProductQuantity.vue";
export default {
  // components: { ProductQuantity },
  computed: {
    ...mapGetters({
      cart: "products/cart",
    }),
    totalCost() {
      let cost = 0;
      cost += this.cart[0].quantity * this.cart[0].selectitem.price;
      return cost;
    },
  },
  methods: {
    RemoveItem() {
      this.$store.commit("products/RemoveItem", this.i);
    },
    cartt() {
      console.log(this.cart);
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
