<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <h3>{{ $t("placeholder.Welcome") }}</h3>
      <p>{{ $t("placeholder.remember4") }}</p>
      <div class="password">
        <input
          type="password"
          :placeholder="$t('placeholder.newPassword')"
          v-model="password"
          required
        />
      </div>
      <!-- Password-->
      <div class="confirmpassword">
        <input
          type="password"
          :placeholder="$t('placeholder.cNewPassword')"
          v-model="newpassword"
          required
        />
      </div>
      <!-- confirmpassword -->
      <base-button class="form_submit"> {{ $t("buttons.submit") }}</base-button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: null,
      newpassword: null,
    };
  },
  methods:{
    submitForm(){
      this.$router.push("/:auth");
    }
  }
};
</script>
