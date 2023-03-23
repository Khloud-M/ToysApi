<template>
  <section>
    <landing-cat />
    <div class="container product_item d-flex" v-if="selectitem">
      <div
        class="container_item col-lg-3"
        v-for="item in selectitem.detailsBrand"
      >
        <div class="image">
          <div class="sale"> {{ item.Sale }}</div>
          <!-- sale-->
          <img :src="item.image" alt="" />
        </div>
        <!-- end image -->
        <div class="content_image">
          <h5 class="name">{{ item.name }}</h5>
          <div class="content_foot d-flex">
            <div class="price">
              <b> {{ item.price }} KWD</b>

              <small> {{ item.oldPrice }} KWD </small>
            </div>
            <button class="btn_cart">
              <v-icon icon="mdi-basket-fill"> </v-icon>
            </button>
          </div>
        </div>
        <!-- contant_image -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      selectitem: null,
    };
  },
  computed: {
    ...mapGetters({
      Brands: "products/Brands",
    }),
  },
  mounted() {
    this.selectitem = this.Brands.find(
      (selectitem) => selectitem.id === this.id
    );
    console.log("selcteditem");
    console.log(this.selectitem.detailsBrand);
  },
};
</script>
<style>
</style>
