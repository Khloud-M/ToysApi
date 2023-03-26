<template>
  <section>
    <landing-cat  :selectitem="selectitem"/>
    <div class="container product_item d-flex" v-if="CatId">
   khlooouh
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
          console.log("CatId");
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
