<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>{{ $t("placeholder.Welcomeback") }}</h3>
      <p>{{ $t("placeholder.registerlogin") }}</p>
      <div class="phone d-flex">
        <div class="col-lg-3">
          <select class="form-select" aria-label="Default select example">
            <option value="1">{{ $t("placeholder.Saudi") }}</option>
            <option value="1">{{ $t("placeholder.egypt") }}</option>
          </select>
        </div>
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
      <div class="password">
        <input
          type="password"
          :placeholder="$t('placeholder.Password')"
          v-model="password"
          required
        />
      </div>
      <!-- Password-->
      <div class="check_pass d-flex">
        <div class="col-lg-6">
          <input type="checkbox" id="check" v-model="check" />
          <label for="check"> {{ $t("placeholder.remember") }}</label>
        </div>
        <div class="col-lg-4">
          <router-link to="/:auth/forgetPass"> Forget Password </router-link>
        </div>
      </div>
      <base-button class="form_submit"> {{ $t("buttons.signIn") }}</base-button>
    </form>
    <div class="footer_form d-flex justify-content-center mt-3">
      <p>{{ $t("placeholder.notaccount") }}</p>
      <router-link to="/:auth/register"
        >{{ $t("buttons.signUp") }}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: null,
      check: null,
      phone: null,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/");
    },
  },
};
</script>
