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
    <div class="details_Adress" v-if="getAdress">
      {{ getAdress }}
      <div class="action col-lg-3">
        <router-link to="/Account/editaddress">
          {{ $t("placeholder.edit") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  computed: {
    ...mapGetters({
      getAdress: "auth/GetAddress",
    }),
  },
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
.details_Adress {
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>
