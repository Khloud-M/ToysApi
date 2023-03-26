<template>
  <section>
    <landing-page />
    <div class="container product_item d-flex">
      <div class="container_item col-lg-3" v-for="item in salesOffer">
        <router-link :to="`/products/${item.id}`">
          <div class="image">
            <div class="sale">{{ item.sale_price }}</div>
            <!-- sale-->
            <img :src="item.image" alt="" />
          </div>
        </router-link>
        <!-- end image -->
        <div class="content_image">
          <h5 class="name">{{ item.title }}</h5>
          <div class="content_foot d-flex">
            <div class="price">
              <b> {{ item.price }} KWD</b>

              <small> {{ item.sale_price }} KWD </small>
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
  data(){
    return{
      salesOffer:null,
    }
  },
  created() {
    this.GetOffer();
  },
  methods: {
    GetOffer() {
      this.axios({
        method: "GET",
        url: "sales",
      })
        .then((response) => {
          this.salesOffer = response.data.data;
          console.log(this.salesOffer);
        })
        .catch((error) => {
          console.log(error);
          // this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>
