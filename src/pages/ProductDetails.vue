<template>
  <section>
    <LandingProduct  :selectitem="selectitem" />
    <div class="container d-flex" v-if="selectitem">
      <div class="col-lg-5 image">
        <img :src="selectitem.image" />
      </div>
      <!-- end image div -->
      <div class="col-lg-6 content_details">
        <div class="item_details">
          <h6>{{ selectitem.name }}</h6>
          <div class="discription">
            <h6>description</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda, autem! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Perferendis, odit? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Aspernatur blanditiis repellendus
              quia ducimus eum! Repellendus, repudiandae quae adipisci corrupti
            </p>
          </div>
          <div class="item_name d-flex">
            <h4>{{ selectitem.name }}</h4>
            <button class="button">
              <v-icon icon="mdi-cards-heart-outline" size="20"> </v-icon>
              {{ $t("placeholder.fav") }}
            </button>
          </div>
          <!-- item_name -->
          <h5 class="price">
            <b> {{ selectitem.price }} </b>

            <span> KWD</span>
          </h5>
          <!-- end price -->
          <div class="addCart d-flex">
            <div><product-quantity :selectitem="selectitem" /></div>
            <base-button @click="addToCart">
              <v-icon icon="mdi-shopping-outline" size="20"></v-icon>
              {{ $t("placeholder.addCart") }}</base-button
            >
          </div>
          <!-- add cart + quantity -->
        </div>
        <!-- item_details-->
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
            <small> </small>
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
import { mapGetters } from "vuex";
import ProductQuantity from "@/components/Products/ProductQuantity.vue";
import LandingProduct from "@/components/Products/LandingProduct.vue";
export default {
  props: ["id"],
  components: {
    ProductQuantity,
    LandingProduct
  },
  data() {
    return {
      selectitem: null,
    };
  },
  computed: {
    ...mapGetters({
      MoreSaling: "products/MoreSaling",
    }),
  },
  methods: {
    addToCart() {
      this.$store.commit("products/addToCart", this.selectitem);
    },
  },
  mounted() {
    this.selectitem = this.MoreSaling.find(
      (selectitem) => selectitem.id === this.id
    );
    console.log("selcteditem");
    console.log(this.selectitem);
  },
};
</script>

<style lang="scss" scoped>
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
            font-size: 19px ;
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
  h4{
    &::before{
      left: auto;
      right: -25px;
      border-radius: 12px 0px 0px 12px;


    }
  }
}
</style>
