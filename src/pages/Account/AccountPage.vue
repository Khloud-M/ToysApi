<template>
  <div class="account_page">
    <div class="heading">
      <h4>My Account</h4>
      <p>You can control your account information and change your password</p>
    </div>
    <form @submit.prevent="SubmitForm">
      <div class="general_information">
        <h5>General Info</h5>
        <div>
          <label for="name"> name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your  name "
            v-model="name"
          />
        </div>
        <!--  name  -->

        <base-button> submit info</base-button>
      </div>
      <!-- end general_information  -->
      <div class="Profile_information">
        <h5>Profile information</h5>
        <div class="full_name d-flex">
          <div class="col-lg-6">
            <label for="name"> phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter phone "
              v-model="phone"
            />
          </div>
          <!-- name -->
          <div class="col-lg-5">
            <label for="name"> Password </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password "
              v-model="password"
            />
          </div>
        </div>
        <div class="changes">
          <base-button> change phone</base-button>
          <base-button class="change_password"> change password</base-button>
          <a href="#"> delete account </a>
        </div>
      </div>
      <!-- Profile_information -->
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      name: localStorage.getItem("user_name_toys"),
      phone: localStorage.getItem("user_phone_toys"),
      password: localStorage.getItem("password"),
    };
  },
  methods: {
    SubmitForm() {
      const myData = new FormData();
      myData.append("name", this.name);
      myData.append("phone", this.phone);
      myData.append("password", this.password);
      this.axios({
        method: "POST",
        url: "edit-profile",
        data: myData,
      })
        .then((response) => {
          console.log("edit profile");
          console.log(response);
          // update your numberphone
          localStorage.setItem("user_name_toys", this.name);
          localStorage.setItem("user_phone_toys", this.phone);
          localStorage.setItem("password", this.password);
        })
        .catch((error) => {
          console.log(error);
          this.$toast.error(`خد بالك وانت بتدخل بياناتك متفرهدنيش`);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.account_page {
  .general_information,
  .Profile_information {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    margin: 15px 0;
  }

  .changes {
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    .change_password {
      color: white;
      background-color: var(--main-color);
      background-image: linear-gradient(
        50deg,
        transparent 50%,
        #242323 50%
      ) !important;
    }
  }
}
</style>
