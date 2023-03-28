<template>
  <div class="account_page">
    <div class="heading">
      <h4>My Account</h4>
      <p>You can control your account information and change your password</p>
    </div>
    <form class="general_information">
      <h5>General Info</h5>
      <div class="full_name d-flex">
        <div class="col-lg-6">
          <label for="name"> first name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter first name "
            v-model="firstname"
          />
        </div>
        <!-- name -->
        <div class="col-lg-5">
          <label for="name">last name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter last  name "
            v-model="lastname"
          />
        </div>
      </div>

      <base-button> submit info</base-button>
    </form>
    <form class="Profile_information">
      <h5>Profile information</h5>
      <div class="full_name d-flex">
        <div class="col-lg-6">
          <label for="name"> phone</label>
          <input
            type="number"
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
      <base-button> change phone</base-button>
      <base-button> change password</base-button>
      <a href="#"> delete account </a>
    </form>
  </div>
</template>

<script>
import BaseButton from "@/components/ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      firstname: localStorage.getItem("name"),
      lastname: localStorage.getItem("lastname"),
      phone: localStorage.getItem("phone"),
      password: localStorage.getItem("password"),
    };
  },
};
</script>

<style lang="scss" scoped>
.account_page {
  width: 100%;
  padding: 20px 0;
  .general_information,
  .Profile_information {
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    margin: 15px 0;
  }
  .full_name {
    justify-content: space-between;
    margin-top: 15px;
  }
  label {
    text-transform: capitalize;
    font-size: 20px;
  }
  input {
    margin: 15px 0;
    outline: none;
    border: 1px solid var(--border-color);
    padding: 15px 10px;
    border-radius: 10px;
    width: 100%;
    transition: all var(--transtion) ease-in-out;
  }
  input:focus {
    border-color: var(--color-yellow);
  }
}
</style>
