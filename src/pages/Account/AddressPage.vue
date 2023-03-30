<template>
  <div class="Address">
    <div class="heading_address d-flex">
      <div class="heading">
        <h4>Addresses</h4>
        <p>You can control your added addresses here</p>
      </div>
      <base-button>
        <router-link to="/Account/editaddress">
          <v-icon icon="mdi-map-marker-plus-outline"></v-icon> add new address
        </router-link>
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.Address {
  padding: 20px 0;
  .heading_address {
    flex-direction: row;
    justify-content: space-between;
    button {
      font-size: 15px !important;
      padding: 0px 15px !important;
      .v-icon {
        margin-right: 10px;
      }
    }
  }
}
</style>
