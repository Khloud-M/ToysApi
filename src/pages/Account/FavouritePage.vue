<template>
  <div class="account_page">
    <div class="heading">
      <h4>My Favourites</h4>
      <p>You can control your favorites here</p>
      <div
        v-if="prductFav"
        class="container_Fav"
        v-for="fv in prductFav"
        :key="fv.id"
      >
        <div class="col-lg-3 image">
          <img :src="fv.image" width="150" height="100" />
        </div>
        <div class="col-lg-9 content">
          <h6>{{ fv.category }}</h6>
          <p>{{ fv.title }}</p>
        </div>
        <!-- <div class="action d-flex col-lg-3">
            <router-link :to="`/Account/editaddress/${Ad.id}`">
              {{ $t("placeholder.edit") }}
            </router-link>
            <button @click="DeleteAdress(Ad.id)">
              {{ $t("buttons.Delete") }}
            </button>
          </div>
        </div>  -->

        <!-- </div> -->
        <!-- end details_address -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prductFav: null,
    };
  },
  created() {
    this.GetFav();
  },
  methods: {
    GetFav() {
      this.axios({
        method: "GET",
        url: "my-favourite",
      })
        .then((res) => {
          this.prductFav = res.data.data;
          console.log(this.prductFav);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container_Fav {
  background-color: white;
  padding: 18px;
  border-radius: 10px;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  // column-gap: 10px;
  .content {
    h6 {
      color: var(--color-yellow);
    }
  }
  .details_Adress {
    padding: 10px 20px;
    ._address {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .action {
        justify-content: space-evenly;
        button {
          text-decoration: underline;
          color: var(--color-yellow);
        }
      }
    }
  }
}
</style>
