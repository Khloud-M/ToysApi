<template>
  <section>
    <landing-cat  :CatId="CatId"/>
    <div class="container product_item d-flex" v-if="CatId">
      <div
        class="container_item col-lg-3"
      >
        <div class="image">
          <div class="sale"> {{ CatId.Sale }}</div>
          <!-- sale-->
          <img :src="CatId.image" alt="" />
        </div>
        <!-- end image -->
        <div class="content_image">
          <h5 class="name">{{ CatId.title }}</h5>
          <div class="content_foot d-flex">
            <div class="price">
              <b> {{ CatId.price }} KWD</b>

              <small> {{ CatId.oldPrice }} KWD </small>
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
        url: `category/${this.id}`,
      })
        .then((response) => {
          this.CatId = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
</style>
