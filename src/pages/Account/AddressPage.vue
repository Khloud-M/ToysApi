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
    <div v-if="Address" class="container_address">
      <h5>
        <v-icon icon="mdi-map-marker-outline" size="23"></v-icon>
        {{ $t("placeholder.home") }}
      </h5>
      <div class="details_Adress">
        <h4>
          {{ Address.fristName }}
          {{ Address.lastName }}
        </h4>
        <div class="_address">
          {{ Address.address }}
          <div class="action d-flex col-lg-3">
            <router-link to="/Account/editaddress">
              {{ $t("placeholder.edit") }}
            </router-link>
            <button @click="removeAdress">
              {{ $t("buttons.Delete") }}
            </button>
          </div>
        </div>
        <!-- end address -->
        <span>
          {{ Address.Address_phone }}
        </span>
      </div>
      <!-- end details_address -->
    </div>
    <!-- container_address -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      Address: {
        address: localStorage.getItem("Address"),
        fristName: localStorage.getItem("fristName"),
        lastName: localStorage.getItem("lastName"),
        Address_phone: localStorage.getItem("Address_phone"),
      },
    };
  },
  computed: {
    ...mapGetters({
      getAdress: "auth/GetAddress",
    }),
  },
  methods: {
    removeAdress() {
      this.$store.commit("auth/logoutAdress");
    },
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
</style>
