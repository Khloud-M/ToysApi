<template>
  <section>
    <LandingProduct :productId="productId" />
    <div class="container d-flex" v-if="productId">
      <div class="col-lg-5 image">
        <img :src="productId.image" />
      </div>
      <!-- end image div -->
      <div class="col-lg-6 content_details">
        <div class="item_details">
          <h6>{{ productId.title }}</h6>
          <div class="discription" v-if="productId.desc">
            <h6>description</h6>
            <p>
              {{ productId.desc }}
            </p>
          </div>
          <div class="item_name d-flex">
            <h4>{{ productId.title }}</h4>

            <button
              class="button"
              @click="addFav(productId.id)"
              v-if="not_fav"
              :class="{ Isshow: showFav }"
            >
              <v-icon icon="mdi-cards-heart-outline" size="20"> </v-icon>
              {{ $t("placeholder.fav") }}
            </button>
            <button
              class="button"
              @click="removeFav(productId.id)"
              v-if="fav"
              :class="{ Isshow: showFav }"
            >
              <v-icon icon="mdi-cards-heart-outline" size="20"> </v-icon>
              {{ $t("placeholder.notfav") }}
            </button>
          </div>
          <!-- item_name -->
          <h5 class="price">
            <b v-if="quantityID === null && priceId === null">
              {{ productId.price }}
            </b>
            <b v-else>
              {{ priceId }}
            </b>
            : <span> KWD</span>
          </h5>
          <!-- end price -->
          <div class="addCart d-flex" v-if="quantityID != null">
            <div class="quanty d-flex gap-3">
              <button @click="decrementQty()">-</button>
              {{ quantityID }}
              {{ initalValue }}
              <button
                @click="increaseQty"
                :disabled="initalValue >= quantityID"
              >
                +
              </button>
            </div>
            <!-- <div><product-quantity :productId="productId" /></div> -->
            <base-button @click="addToCart">
              <v-icon icon="mdi-shopping-outline" size="20"></v-icon>
              {{ $t("placeholder.addCart") }}</base-button
            >
          </div>
          <!-- add cart + quantity -->
        </div>
        <!-- item_details-->
        <hr />
        <h6 class="avilable">avalible</h6>
        <div class="option_product">
          <ul
            v-for="option in productId.option_values"
            @click="chooseItem(option)"
          >
            <li v-for="p in option.values" ref="changeBorder">
              <button @click="selectID(p.id)">
                {{ p.option_name }}: {{ p.name }}
              </button>
            </li>
          </ul>
        </div>
        <hr />
        <div class="product_option">
          <h4>Product Options</h4>
          <div class="Prod_code d-flex">
            <h5>Product Code</h5>
            :
          </div>
          <div class="Prod_brand d-flex">
            <h5>Brand</h5>
            :
            <small> {{ productId.brand }} </small>
          </div>
          <div class="Prod_Stock d-flex">
            <h5>Stock</h5>
            :
            <small> </small>
          </div>
        </div>
        <!-- product_option -->
      </div>
      <!-- end details -->
    </div>
    <!-- end container -->
  </section>
</template>
<script>
// import ProductQuantity from "@/components/Products/ProductQuantity.vue";
import LandingProduct from "@/components/Products/LandingProduct.vue";

export default {
  props: ["id"],
  components: {
    // ProductQuantity,
    LandingProduct,
  },
  data() {
    return {
      productId: null,
      priceId: null,
      quantityID: null,
      show: false,
      initalValue: 1,
      fav: false,
      not_fav: true,
      showFav: false,
      optionId: null,
      products: [],
      selectitem: null,
    };
  },
  created() {
    this.GetProductID();
  },
  methods: {
    addFav(productId) {
      const myData = new FormData();
      myData.append("product_id", productId);
      this.axios({
        method: "POST",
        url: "update-favorite",
        data: myData,
      })
        .then((res) => {
          console.log(res);
          this.$toast.success("added Successfully to Fav");
          this.fav = !this.fav;
          this.not_fav = !this.not_fav;
          this.showFav = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeFav(productId) {
      const myData = new FormData();
      myData.append("product_id", productId);
      this.axios({
        method: "POST",
        url: "update-favorite",
        data: myData,
      })
        .then((res) => {
          console.log(res);
          this.$toast.success("remove  Successfully to Fav");
          this.fav = !this.fav;
          this.not_fav = !this.not_fav;
          this.showFav = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    GetProductID() {
      this.axios({
        method: "GET",
        url: `product/${this.id}`,
      })
        .then((response) => {
          this.productId = response.data.data;
          this.optionId = response.data.data.option_values;
          console.log(this.optionId);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    chooseItem(x) {
      this.priceId = x.price;
      this.quantityID = x.quantity;
      this.show = !this.show;
    },
    // end getting data
    selectID(id) {
      this.selectitem = this.products.some((selectitem) => selectitem === id);
      console.log(this.selectitem);
      if (!this.selectitem) {
        this.products.push(id);
        localStorage.setItem("products", JSON.stringify(this.products));
      } else {
        this.$toast.success("This product already exists");
      }
    },
    addToCart() {
      this.$toast.success("added Successfully Cart");
      this.$store.commit("products/addToCart", this.products);
    },

    decrementQty() {
      if (this.initalValue == 1) {
      } else {
        this.initalValue--;
      }
    },
    increaseQty() {
      this.initalValue++;
    },
  },
};
</script>

<style lang="scss" scoped>
.Isshow {
  color: white !important;
  background-color: var(--red-color) !important;
}
.clickoptioon {
  background-color: red;
}
.avilable {
  color: var(--red-color);
  font-weight: lighter;
  font-size: 20px;
}
.option_product {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  ul {
    cursor: pointer;
    padding: 0;
    border: 1px solid var(--border-color);
    width: 100px;
    text-align: center;

    li {
      padding: 3px;
    }
  }
}

.container {
  margin: var(--margin) auto;
  justify-content: space-between;
  @media (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
    }
  }
  .content_details {
    padding: 15px;
  }
  .image {
    // width: 400px;
    background-color: var(--bg-color-light);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    aspect-ratio: 1/1;
    img {
      width: 90%;
    }
  }
  .item_details {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    h6 {
      color: var(--red-color);
      font-weight: lighter;
      font-size: 20px;
    }
    .item_name {
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      row-gap: 10px;
      h4 {
        text-transform: capitalize;
        @media (max-width: 768px) {
          & {
            font-size: 19px;
          }
        }
      }
      button {
        background-color: #fde5ea !important;
        font-size: 16px;
        font-weight: lighter;
        color: var(--red-color) !important;
        transition: all 0.4s ease-in-out !important;
        padding: 10px 20px;
        border-radius: 10px;
        &:hover {
          color: white !important;
          background-color: var(--red-color) !important;
        }
      }
    }

    .price {
      color: var(--red-color);
    }
    .addCart {
      column-gap: 20px;
      button {
        padding: 8px 15px !important;
        font-size: 16px !important;
      }
    }
    .discription {
      h6 {
        font-weight: 500;
      }
    }
  }
}
.product_option {
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 15px 25px;
  h4 {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 15px;
      height: 10px;
      left: -25px;
      top: 10px;
      background-color: var(--color-yellow);
      border-radius: 0px 12px 12px 0px;
    }
  }
}
.is-rtl {
  h4 {
    &::before {
      left: auto;
      right: -25px;
      border-radius: 12px 0px 0px 12px;
    }
  }
}
.quanty {
  width: 150px;
  justify-content: space-between;
  font-size: 25px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  padding: 8px;
}
.quanty button {
  border: none;
  background-color: white;
  width: 30%;
}
</style>
