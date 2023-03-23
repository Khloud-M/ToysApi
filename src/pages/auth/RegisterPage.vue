<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>{{ $t("placeholder.Welcome") }}</h3>
      <p>{{ $t("placeholder.register") }}</p>
      <div class="name">
        <input
          type="text"
          :placeholder="$t('placeholder.userName')"
          v-model="name"
          required
        />
      </div>
      <!-- name -->
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
      <div class="email">
        <input
          type="email"
          :placeholder="$t('placeholder.email')"
          v-model="email"
          required
        />
      </div>
      <!-- email -->
      <div class="password">
        <input
          type="password"
          :placeholder="$t('placeholder.Password')"
          v-model="password"
          required
        />
      </div>
      <!-- Password-->
      <div class="confirmpassword">
        <input
          type="password"
          :placeholder="$t('placeholder.cPassword')"
          v-model="confirmpassword"
          required
        />
      </div>
      <!-- confirmpassword -->
      <div class="check_pass">
        <div>
          <input type="checkbox" id="check" v-model="check" />
          <label for="check"> {{ $t("placeholder.remember2") }}</label>
        </div>
      </div>
      <base-button class="form_submit"> {{ $t("buttons.signUp") }}</base-button>
    </form>
    <div class="footer_form d-flex justify-content-center mt-3">
      <p>{{ $t("placeholder.notaccount") }}</p>
      <router-link to="/:auth">{{ $t("buttons.signIn") }} </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      confirmpassword: null,
      phone: null,
      check: null,
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/:auth/varifaction/verify");
    },
  },
};
</script>
