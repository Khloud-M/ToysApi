<template>
  <section>
    <landing-cat  :selectitem="selectitem"/>
    <div class="container product_item d-flex" v-if="selectitem">
      <div
        class="container_item col-lg-3"
        v-for="item in selectitem.detailsCar"
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
export default {
  props: ["id"],
  data() {
    return {
      selectitem: null,
      data: null,
      CatId:null
    };
  },
  created() {
    this.GetCategeryID();
  },
  methods: {
    GetCategeryID() {
      this.axios({
        method: "GET",
        url: `category${this.id}`,
      })
        .then((response) => {
          this.CatId = response;
          console.log(this.CatId);
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>
<style>
</style>
