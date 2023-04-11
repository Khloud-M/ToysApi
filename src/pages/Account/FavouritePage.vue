<template>
  <div class="account_page">
    <div class="heading">
      <h4>My Favourites</h4>
      <p>You can control your favorites here</p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.GetFav();
  },
  methods: {
    GetFav() {
      this.axios({
        method: "GET",
        url: "myFavourites",
      })
        .then((res) => {
          // this.Address = res.data.data;
          console.log(res);
          // this.idAddress = res.data.data.id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
