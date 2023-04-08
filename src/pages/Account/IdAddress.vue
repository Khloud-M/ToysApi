<template>
  <div class="account_page">
    <div class="heading">
      <h4>Edit Address</h4>
      <p>You can edit your address here</p>
    </div>
    <!-- heading -->
    <form class="d-flex" @submit.prevent="submitForm">
      <div class="edit_address_form col-lg-6">
        <h5>City</h5>
        <div>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="select_city"
          >
            <option v-for="city in citites" v-bind:value="city.id">
              {{ city.name }}
            </option>
          </select>
        </div>
        <!-- select your country -->
        <div>
          <label for="address"> The full address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter full address"
            v-model="address"
          />
        </div>
        <!-- enter address -->
        <div class="check_pass">
          <input type="checkbox" id="check" v-model="check" />
          <label for="check"> {{ $t("placeholder.remember2") }}</label>
        </div>
        <!-- end check_pass -->
      </div>
      <div class="edit_Contact_details col-lg-5">
        <div class="full_name d-flex">
          <div class="col-lg-6">
            <label for="name"> first name</label>
            <input
              type="text"
              id="firstname"
              placeholder="Enter first name "
              v-model="firstname"
            />
          </div>
          <!--  first name -->
          <div class="col-lg-5">
            <label for="name">last name</label>
            <input
              type="text"
              id="lastname"
              placeholder="Enter last  name "
              v-model="lastname"
            />
          </div>
          <!-- last name -->
        </div>
        <!-- full name  -->
        <div>
          <label for="name"> Phone </label>

          <input
            type="tel"
            id="phone"
            :placeholder="$t('placeholder.phone')"
            v-model="phone"
            required
          />
        </div>
        <base-button> Save information</base-button>
      </div>
      <!-- end edit_Contact_details -->
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  // props: ["id"],
  data() {
    return {
      citites: null,
      check: null,
      firstname: null,
      lastname: null,
      phone: null,
      address: null,
      select_city: null,
      id: this.$route.params.id,
    };
  },
  created() {
    this.GetAddress();
  },
  methods: {
    GetAddress() {
      this.axios({
        method: "GET",
        url: `edit-address/${this.id}`,
      })
        .then((res) => {
          this.firstname = res.data.data.first_name;
          this.lastname = res.data.data.last_name;
          this.phone = res.data.data.mobile;
          this.address = res.data.data.address;
          this.select_city = res.data.data.city_id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // submitForm() {
    //   const myData = new FormData();
    //   myData.append("first_name", this.firstname);
    //   myData.append("last_name", this.lastname);
    //   myData.append("mobile", this.phone);
    //   myData.append("address", this.address);
    //   myData.append("city_id", this.select_city);
    //   this.axios({
    //     method: "POST",
    //     url: "store-address",
    //     data: myData,
    //   })
    //     .then((res) => {
    //       console.log("store-address");
    //       console.log(res);
    //       this.$store.commit("auth/set", {
    //         first_name: res.data.data.first_name,
    //       });
    //       this.$router.push("/Account/address");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
.account_page {
  form {
    background-color: white;
    border-radius: 15px;
    padding: 20px;
    justify-content: space-between;
    & > :nth-child(2) {
      position: relative;
      &::before {
        position: absolute;
        content: "";
        height: 100%;
        width: 1px;
        background-color: var(--border-color);
        left: -20px;
      }
    }
    .check_pass {
      label {
        font-size: 16px;
      }
      input {
        display: inline-block;
        background-color: blue;
        width: 30px !important;
      }
    }
    button {
      margin: 15px 0;
      float: right;
    }
  }
  .edit_address_form {
    & > :nth-child(3) {
      margin: 15px 0;
    }
  }
}
</style>
