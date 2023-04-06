<template>
  <div class="account_page">
    <div class="heading_address d-flex">
      <div class="heading">
        <h4>Addresses</h4>
        <p>You can control your added addresses here</p>
      </div>
      <base-button class="edit_button">
        <router-link to="/Account/editaddress">
          <v-icon icon="mdi-map-marker-plus-outline"></v-icon> add new address
        </router-link>
      </base-button>
    </div>
    <div
      v-if="Address"
      class="container_address"
      :class="{ show: ISshow }"
      v-for="Ad in Address"
      :key="Ad.id"
    >
    {{ Ad.id }}
      <h5>
        <v-icon icon="mdi-map-marker-outline" size="23"></v-icon>
        {{ $t("placeholder.home") }}
      </h5>
      <div class="details_Adress">
        <h4>
          {{ Ad.first_name }}
          {{ Ad.last_name }}
        </h4>
        <div class="_address">
          {{ Ad.city_name }}
          <div class="action d-flex col-lg-3">
            <router-link to="/Account/editaddress">
              {{ $t("placeholder.edit") }}
            </router-link>
            <!-- <router-link to="Ad.id"> -->
            <!-- <button @click="DeleteAdress">
              {{ $t("buttons.Delete") }}
            </button> -->
            <!-- <button @click="DeleteAdress">
              {{ $t("buttons.Delete") }}
            </button> -->
            <input type="submit" v-model="idAddress" placeholder="delet" @click="DeleteAdress"/>

            <!-- </router-link> -->
          </div>
        </div>
        <!-- end address -->
        <span>
          {{ Ad.mobile }}
        </span>
      </div>
      <!-- end details_address -->
    </div>
    <!-- container_address -->
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      Address: null,
      ISshow: false,
      idAddress: null,
    };
  },
  created() {
    this.GetAddress();
  },
  methods: {
    GetAddress() {
      this.axios({
        method: "GET",
        url: "my-addresses",
      })
        .then((res) => {
          // console.log("getAdress");
          this.Address = res.data.data;
          console.log(this.Address);
          this.idAddress = res.data.data.id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    DeleteAdress() {
      this.axios({
        method: "GET",
        url: `delete-address/${this.idAddress}`,
      })
        // this.axios
        //   .delete("delete-address/", { params: { ids: this.idAddress } })
        .then((res) => {
          console.log("delete-address");
          console.log(res);
          this.ISshow= ! this.ISshow;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  // methods: {
  //   removeAdress() {
  //     this.$store.commit("auth/logoutAdress");
  //     console.log("delete");
  //     this.ISshow = true;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.account_page {
  .heading_address {
    flex-direction: row;
    justify-content: space-between;
    button {
      font-size: 15px !important;
      height: 40px;
      a {
        color: black;
      }
      .v-icon {
        margin-right: 10px;
      }
    }
  }
}
.container_address {
  background-color: white;
  padding: 18px;
  border-radius: 10px;
  margin: 15px 0;
  h5 {
    margin: 10px 0;
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
// .show {
//   // display: none;
//   background-color: red;
// }
</style>
