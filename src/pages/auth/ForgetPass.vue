<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>{{ $t("placeholder.resetpass") }}</h3>
      <p>{{ $t("placeholder.remember3") }}</p>
        <div>
          <input
            type="tel"
            id="phone"
            :placeholder="$t('placeholder.phone')"
            v-model="phone"
            required
          />
        </div>

      <base-button class="form_submit"> {{ $t("buttons.submit") }}</base-button>
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
      phone: null,
    };
  },
  methods:{
    submitForm(){
      this.$router.push("/:auth/varifaction/ResetPassword");
    }
  }
};
</script>
