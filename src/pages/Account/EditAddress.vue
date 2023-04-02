<template>
  <div class="account_page">
    <div class="heading">
      <h4>Edit Address</h4>
      <p>You can edit your address here</p>
    </div>
    <!-- heading -->
    <form class="d-flex">
      <div class="edit_address_form">
        <h5>edit address</h5>
        <div>
          <select class="form-select" aria-label="Default select example">
            <option value="1">{{ $t("placeholder.Saudi") }}</option>
            <option value="1">{{ $t("placeholder.egypt") }}</option>
          </select>
        </div>
        <div class="col-lg-6">
          <label for="name"> first name</label>
          <input type="text" id="firstname" placeholder="Enter first name " />
        </div>
        <div class="check_pass">
          <div>
            <input type="checkbox" id="check" v-model="check" />
            <label for="check"> {{ $t("placeholder.remember2") }}</label>
          </div>
        </div>
      </div>
      <div class="edit_Contact_details">
        <div class="name">
          <input
            type="text"
            v-model="firstname"
            placeholder="first name"
            required
          />
        </div>
        <!-- name -->
        <div class="name">
          <input
            type="text"
            v-model="lastname"
            placeholder="last name"
            required
          />
        </div>
        <!-- name -->
        <div class="col-lg-8">
          <input
            type="tel"
            id="phone"
            :placeholder="$t('placeholder.phone')"
            v-model="phone"
            required
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      check: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.account_page {
  form {
    background-color: white;
    border-radius: 15px;
    padding: 15px;
  }
}
</style>
